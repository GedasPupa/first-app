// 09.15 nd:
// Reikia padaryti kad būtų du mygtukai. 
// Vienas kuria apskritimus (karves), kitas kuria keturkampius (avinus). 
// Viskas viename masyve ir draugauja su localStorage
// Spalvos inputas vienas ir taspats abiem mygtukam

import React from "react";
import { Karve } from "./Karve";
import './karve.scss';
import { Buttonas } from "./Buttonas";

class Karves extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            karvutes: [{spalva: 'red', gyvis: 'avis'}, {spalva: 'green', gyvis: 'karve'}],
            karvute: 'lightgreen'
        };
    }

    // nustatykTevoState = () => {
    //     const cnt = this.state.counter + 1;
    //     this.setState({tevoState: 'Hello', counter: cnt, bg: 'pink'});
    // }

    // atstatykTevoState = () => {
    //     const cnt = this.state.counter + 1;
    //     this.setState({tevoState: 'Labas', counter: cnt, bg: 'lightblue'});
    // }

    // spalvink = (e) => {
    //     let spalva = e.target.value;
    //     this.setState(() => ({value_0: spalva, bg: spalva}));
    // }

    // didink = (e) => {
    //     let spindulys = e.target.value;
    //     this.setState({value_1: spindulys}); 
    // }

    // toggle = () => {
    //     this.setState(state => ({chbox: !state.chbox}));
    // }

    componentDidMount() {
        const AllAnimals = localStorage.getItem('AllAnimals');
        this.setState({karvutes: JSON.parse(AllAnimals)});
    }

    refreshPage() {
        window.location.reload(); 
    }

    sukurKarve = (e) => {
        const karveees = this.state.karvutes;
        karveees.push({spalva: this.state.karvute, gyvis: (e.target.id === 'karve') ? 'karve' : 'avis'});
        this.setState(({karvutes: karveees}));
        localStorage.setItem('AllAnimals', JSON.stringify(this.state.karvutes));
    }

    inputChange = (e) => {
        this.setState(state => ({karvutes: state.karvutes, karvute: e.target.value}));

    }

    render() {
        return (
            <div className='main'>
                <div className='buttons'>
                    <h2>G A N Y K L A</h2>
                    <Buttonas id='karve' knopkesFunkcija={(e) => this.sukurKarve(e)} knopke='Pasigamink Karvę!' />
                    <Buttonas knopkesFunkcija={(e) => this.sukurKarve(e)} knopke='Pasigamink Avį!' />
                    <input onChange={(e) => this.inputChange(e)} placeholder='Parašyk spalvą!' />
                    <Buttonas knopkesFunkcija={this.refreshPage} knopke='Refresh Man!' />
                </div>
                <div className='ganykla'>
                    {this.state.karvutes.map((karvute, index) => <Karve key={index} spalva={karvute.spalva} klase={karvute.gyvis}/>)}
                </div>
            </div>
        );
    }
}

export { Karves };