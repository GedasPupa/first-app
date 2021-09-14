// Padaryti tris kontroliuojamus inputus du text tipo ir vienas checkbox. 
// Vienas inputas turi keisti apskritimo spalvą, kitas apskritimo skersmenį
// ir trečias - kai pažymėtas turi pakeisti apskritimą į kvadratą.

import React from "react";

import Knopke from "./Knopke";
import Inputas from "./Inputas";

class Apskritimas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bg: 'lightblue',
            value_0: 'įvesk spalvą!',
            value_1: 'įvesk spindulį!',
            chbox: true
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

    spalvink = (e) => {
        let spalva = e.target.value;
        this.setState(() => ({value_0: spalva, bg: spalva}));
    }

    didink = (e) => {
        let spindulys = e.target.value;
        this.setState({value_1: spindulys}); 
    }

    toggle = (e) => {
        this.setState({chbox: !this.state.chbox});
    }

    refreshPage() {
        window.location.reload(); 
    }

    render() {
        return (
            <div className="konteineris" style={{backgroundColor: this.state.bg, width: (this.state.value_1+'px'), height: (this.state.value_1+'px'), borderRadius: this.state.chbox ? '50%' : '10px'}}>
                <Inputas value={this.state.value_0} keisk={this.spalvink}/>
                <Inputas value={this.state.value_1} keisk={this.didink}/>
                <div><label for="checkboxas">Toggle..Toggle</label> <input type="checkbox" id="checkboxas" checked={this.state.chbox} onChange={this.toggle}/></div>
                <Knopke reload={this.refreshPage} />
            </div>
        );
    }
}

export default Apskritimas;

{/* <Paragrafas tekstas={this.state.tevoState} counter={this.state.counter} bg={this.state.bg}/>
<div className="col">
    <Mygtukas sniuras={this.atstatykTevoState} klase={this.state.tevoState + ' btn'}/>
    <Mygtukas2 virve={this.nustatykTevoState} klase={this.state.tevoState + ' btn'} />
    <Mygtukas3 lasas={this.nudazykTevoState} klase={this.state.tevoState + ' btn'}/>
</div> */}

    {/* <Paragrafas counter={this.state.counter} klase={this.state.tevoState}/> */}
