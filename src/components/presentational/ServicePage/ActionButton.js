import React, { Component } from "react";

import styled from "styled-components";

const ActionButtonWrapper = styled.button`
    width: 100%
`

// props: name, setArguments
class ActionButton extends Component {

    render () {
        return (
            <ActionButtonWrapper onClick={() => this.props.setActiveActionArgs(this.props.argumentList)}>
                <div>
                    <h2>{this.props.name}</h2>
                </div>
            </ActionButtonWrapper>
        )
    }
}


export default ActionButton;
