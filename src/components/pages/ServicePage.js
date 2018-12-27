import React, { Component } from "react";

import Title from "../presentational/Title";
import ServicePageWrapper from "../presentational/ServicePage/ServicePageWrapper";
import BackButton from "../presentational/BackButton";
import ActionListWrapper from "../presentational/ServicePage/ActionListWrapper";
import ActionButton from "../presentational/ServicePage/ActionButton";

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
        .then(actions => {
            console.log(actions)
            this.setState({
                ActionList: actions.actions
             })
        });
    }

    setArguments = actionArguments => {
        this.setState({ actionArguments: actionArguments.argument });
        console.log(this.state.actionArguments)
    }

    render () {
        const ActionList = this.state.ActionList;
        return (
            <React.Fragment>
                <Title>UPnP Tool</Title>
                <ServicePageWrapper>
                    <BackButton to={this.props.location.pathname.split("/services/")[0]}>
                        Back to Device
                    </BackButton>
                    <ActionListWrapper>
                        {ActionList && ActionList.length ? ActionList.map(action => {
                            return (
                                <ActionButton key={action.name} name={action.name} setArguments={this.setArguments} argumentList={action.argumentList} />
                            )
                        }) : ActionList.name ?
                            <ActionButton key={ActionList.name} name={ActionList.name} setArguments={this.setArguments} argumentList={ActionList.argumentList} />
                        : null
                    }
                    </ActionListWrapper>

                </ServicePageWrapper>
            </React.Fragment>

        )
    }
}

export default ServicePage;
