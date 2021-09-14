import React from "react";

class Knopke extends React.Component {
  
    render() {
        return (
            <>
            <button onClick={(e) => this.props.reload(e)}>Refresh</button>
            </>
        );
    }
}

export default Knopke;