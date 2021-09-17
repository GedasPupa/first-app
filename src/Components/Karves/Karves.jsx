// 09.15 nd:
// Reikia padaryti kad būtų du mygtukai. 
// Vienas kuria apskritimus (karves), kitas kuria keturkampius (avinus). 
// Viskas viename masyve ir draugauja su localStorage
// Spalvos inputas vienas ir taspats abiem mygtukam

// 09.16 nd:
// Reikia dviejų analogiškų fermų. 
// Kiekvienas gyvulys fermoje turi turėti papildomą mygtuką - pereiti į kitą fermą

import React from "react";
import { Karve } from "./Karve";
import './karve.scss';
import { Buttonas } from "./Buttonas";
import { getId } from '../../shared/nextId.js';

class Karves extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            karvutes: [],
            spalva: 'lightgreen'
        };
    }

    componentDidMount() {
        let AllAnimals = localStorage.getItem('AllAnimals');
        AllAnimals = JSON.parse(AllAnimals);
        if (AllAnimals === null) {
            return;
        }
        this.setState({karvutes: AllAnimals});
    }

    refreshPage() {
        window.location.reload(); 
    }

    sukurKarve = (e) => {
        const karveees = this.state.karvutes;
        karveees.push({id: getId(), spalva: this.state.spalva, gyvis: (e.target.id === 'karve') ? 'karve' : 'avis'});
        this.setState(({karvutes: karveees}));
        localStorage.setItem('AllAnimals', JSON.stringify(this.state.karvutes));
    }

    istrinkKarve = (id) => {
        const karveees = this.state.karvutes;
        for (let i=0; i<karveees.length; i++) {
            if (karveees[i].id === id) {
                karveees.splice(i, 1);
                break;
            }
        }
        this.setState(({karvutes: karveees}));
        localStorage.setItem('AllAnimals', JSON.stringify(karveees));
    }

    nuspalvinkKarve = (id, spalva1) => {
        console.log(id, spalva1);
        const karveees = this.state.karvutes;
        for (let i=0; i<karveees.length; i++) {
            if (karveees[i].id === id) {
                karveees.splice(i, 1, {id: karveees[i].id, spalva: spalva1, gyvis: karveees[i].gyvis});
                break;
            }
        }
        this.setState(({karvutes: karveees}));
        localStorage.setItem('AllAnimals', JSON.stringify(karveees));
    }

    inputChange = (e) => {
        this.setState(state => ({karvutes: state.karvutes, spalva: e.target.value}));

    }

    render() {
        return (
            <div className='main'>
                <div className='buttons'>
                    <h2>G A N Y K L A</h2>
                    <Buttonas id='karve' 
                        knopkesFunkcija={(e) => this.sukurKarve(e)} 
                        knopke='Pasigamink Karvę!' 
                    />
                    <Buttonas knopkesFunkcija={(e) => this.sukurKarve(e)} knopke='Pasigamink Avį!' />
                    <input onChange={(e) => this.inputChange(e)} placeholder='Parašyk spalvą!' />
                    <Buttonas knopkesFunkcija={this.refreshPage} knopke='Refresh Man!' />
                </div>
                <div className='ganykla'>
                    {this.state.karvutes.map((karvute, index) => 
                        <Karve key={index} 
                            id={karvute.id} 
                            spalva={karvute.spalva}
                            spalva1={this.state.spalva}
                            klase={karvute.gyvis} 
                            istrinkKarve={this.istrinkKarve} 
                            nuspalvinkKarve={this.nuspalvinkKarve} 
                        />)
                    }
                </div>
            </div>
        );
    }
}

export { Karves };