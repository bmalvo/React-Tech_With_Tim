import React from "react";

export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    clickedButton() {
        this.setState({count: this.state.count +1});
        console.log("clicked!");
    }

    render () {
        return (
        <div>
            <p>Clicked { this.state.count }</p>
            <button className="btn btn-primary" onClick={() => this.clickedButton()}>Click me!</button>
        </div>);
    }
}