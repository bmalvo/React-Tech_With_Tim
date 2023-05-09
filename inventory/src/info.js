import React from "react";
import {PropTypes} from 'prop-types';

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            count : 0,
            title : 'basic title',
        };
        this.buttonPressed = this.buttonPressed.bind(this);
    }

buttonPressed() {
    this.setState({
        count: this.state.count + 1
    });
}

    render(){
        return (
        <div>
        <p>Count: {this.state.count} </p>
        <button onClick={this.buttonPressed}>Click me!</button>
        </div>);
    }
}


export default Info;
