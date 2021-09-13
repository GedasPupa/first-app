import React from "react";

import Mygtukas from "./Mygtukas";
import Paragrafas from "./Paragrafas";
import Mygtukas2 from "./Mygtukas2";
import Mygtukas3 from "./Mygtukas3";


class Divas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tevoState: 'Labas', counter: 0};
        
    }

    nustatykTevoState = () => {
        const cnt = this.state.counter + 1;
        this.setState({tevoState: 'Hello', counter: cnt, bg: 'pink'});
    }

    atstatykTevoState = () => {
        const cnt = this.state.counter + 1;
        this.setState({tevoState: 'Labas', counter: cnt, bg: 'lightblue'});
    }

    nudazykTevoState = () => {
        const cnt = this.state.counter + 1;
        this.setState({tevoState: 'Viso gero!', counter: cnt, bg: 'lightgreen'});
    }

    render() {
        return (
            <div className="konteineris" style={{backgroundColor: this.state.bg}}>
                <Paragrafas tekstas={this.state.tevoState} counter={this.state.counter} bg={this.state.bg}/>
                <div className="col">
                    <Mygtukas sniuras={this.atstatykTevoState} klase={this.state.tevoState + ' btn'}/>
                    {/* <Paragrafas counter={this.state.counter} klase={this.state.tevoState}/> */}
                    <Mygtukas2 virve={this.nustatykTevoState} klase={this.state.tevoState + ' btn'} />
                    <Mygtukas3 lasas={this.nudazykTevoState} klase={this.state.tevoState + ' btn'}/>
                </div>
            </div>     
        );
    }
}

export default Divas;

// NAMU DARBAS
// [3:28 PM] Arvydas Kijakauskas (Dėstytojas)
// Namuose tas pats apskritimas ir trys mygtukai. Kiekvienas mygtukas atskiras komponentas ir atskira spalva nudažomas apskritimas
// Kokį mygtuką paspausime toks bus apskritimas