import React from "react";


class Inputas extends React.Component {
  
    render() {
        return (
            <>
            <input onChange={(e) => this.props.keisk(e)} value={this.props.value} />
            </>
        );
    }
}

export default Inputas;