import React from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";

const ServiceDiv = styled.div`
    font-family: 'Roboto', sans-serif;
`
// Props: serviceURL, basePath, serviceId
const Service = (props) => (
    <Link to={props.basePath + "/services/" + encodeURIComponent(props.serviceURL)}>
        <ServiceDiv>
            <h2>{props.serviceId}</h2>
        </ServiceDiv>
    </Link>
);

export default Service;
