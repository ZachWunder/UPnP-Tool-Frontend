import styled from "styled-components";

import { Link } from "react-router-dom";

const BackButton = styled(Link)`
    grid-area: back-button;
    background-color: #5efc82;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size 1.5em;
    font-family: 'Roboto', sans-serif;
`

export default BackButton;
