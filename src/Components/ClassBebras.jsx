import React from "react";

class ClassBebras extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};

    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            // this.tick,

            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick = () => {
        this.setState({
            date: new Date()
        });
    }
    
    render() {
        return (<>
            <h1>{this.props.bebras}
            <br />
            {this.state.date.toLocaleTimeString()}
            </h1>
        </>);
    }
}

export { ClassBebras };


