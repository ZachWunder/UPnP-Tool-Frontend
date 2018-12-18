import React, { Component } from "react";

import Title from "../presentational/Title";
import ServicePageWrapper from "../presentational/ServicePage/ServicePageWrapper";

class ServicePage extends Component {
    render () {
        return (
            <ServicePageWrapper>
                <Title>UPnP Tool</Title>
            </ServicePageWrapper>
        )
    }
}

export default ServicePage;
