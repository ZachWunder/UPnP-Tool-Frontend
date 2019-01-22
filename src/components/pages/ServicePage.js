import React, { Component } from "react";

import Title from "../presentational/Title";
import ServicePageWrapper from "../presentational/ServicePage/ServicePageWrapper";
import BackButton from "../presentational/BackButton";
import ActionListWrapper from "../presentational/ServicePage/ActionListWrapper";
import ActionButton from "../presentational/ServicePage/ActionButton";
import ArgumentListWrapper from "../presentational/ServicePage/ArgumentListWrapper";
import ArgumentList from "../presentational/ServicePage/ArgumentList";

class ServicePage extends Component {

    state = {
        ActionList: false
    }

    componentDidMount = async () => {
        const SCPDURL = this.props.match.params.ServiceURL;

        await this.getActionList(SCPDURL);
    }

    getActionList = async SCPDURL => {
        fetch("http://localhost:3000/getServiceActions/" + SCPDURL)
        .then(response => {
            return response.json()
        })
        .then(serviceDetails => {
            this.setState({
                ActionList: serviceDetails.actionList,
                StateVariables: serviceDetails.serviceStateTable
             })
        });
    }

    setActiveArguments = argumentList => {
        console.log(argumentList)
        if (argumentList && argumentList.argument) {
            this.setState({
                clicked: true,
                ActiveArguments: argumentList.argument,
            })
        } else if (argumentList) {
            this.setState({
                clicked: true,
                ActiveArguments: argumentList,
            });
        } else {
            this.setState({ clicked:true, ActiveArguments: [{name: "No arguments for this action"}]});
        }
    }

    render () {
        const actionClicked = this.state.clicked;
        const ActionList = this.state.ActionList;
        const StateVariables = this.state.StateVariables
        const ActiveArguments = this.state.ActiveArguments;
        return (
            <React.Fragment>
                <Title>UPnP Tool</Title>
                <ServicePageWrapper>
                    <BackButton to={this.props.location.pathname.split("/services/")[0]}>
                        Back to Device
                    </BackButton>
                    <ArgumentListWrapper>
                        { actionClicked
                            ? <ArgumentList argumentList={ActiveArguments} stateVariables={StateVariables} />
                            : <h1>Select an argument to view it's actions</h1>
                        }
                    </ArgumentListWrapper>
                    <ActionListWrapper>
                        {ActionList && ActionList.length
                            ? ActionList.map(action => {
                                return (
                                    <ActionButton
                                        key={action.name}
                                        name={action.name}
                                        setActiveActionArgs={this.setActiveArguments}
                                        argumentList={action.argumentList} />
                                    )
                                })
                            : ActionList.name
                                ? <ActionButton
                                    key={ActionList.name}
                                    name={ActionList.name}
                                    setActiveActionArgs={this.setActiveArguments}
                                    argumentList={ActionList.argumentList} />
                                : <h2>No actions found for this service</h2>
                    }
                    </ActionListWrapper>
                </ServicePageWrapper>
            </React.Fragment>

        )
    }
}

export default ServicePage;
