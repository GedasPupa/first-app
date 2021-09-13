import React from "react";


class Mygtukas extends React.Component {
  
    render() {
        return (
            <>
            <button onClick={(e) => this.props.sniuras(e)} className={this.props.klase}>Knopkė-1</button>
            </>
        );
    }
}

export default Mygtukas;