import React from "react";

class Mygtukas2 extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    
    render() {
        return (
            <>
            <button onClick={(e) => this.props.virve(e)} className={this.props.klase}>Knopkė-2</button>
            </>
        );
    }
}

export default Mygtukas2;


