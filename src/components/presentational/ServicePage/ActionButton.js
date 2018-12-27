import React, { Component } from "react";

// props: name, setArguments
class ActionButton extends Component {

    setArgsWithParameters = () => {
        this.props.setArguments(this.props.argumentList);
    }

    render () {
        return (
            <button onClick={this.setArgsWithParameters}>
                <div>
                    <h2>{this.props.name}</h2>
                </div>
            </button>
        )
    }
}


export default ActionButton;
