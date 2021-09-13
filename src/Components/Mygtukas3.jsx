import React from "react";


class Mygtukas3 extends React.Component {
  
    render() {
        return (
            <>
            <button onClick={(e) => this.props.lasas(e)} className={this.props.klase}>Knopkė-3</button>
            </>
        );
    }
}

export default Mygtukas3;