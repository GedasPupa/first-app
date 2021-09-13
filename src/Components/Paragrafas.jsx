import React from "react";


class Paragrafas extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    
    render() {
        return (
            <>
            <p className={this.props.klase + ' paragrafas'} style={{backgroundColor: this.props.bg}}>Tėvo Counteris: {this.props.counter} Tekstas: {this.props.tekstas}</p>
            </>
        );
    }
}

export default Paragrafas;