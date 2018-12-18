import styled from "styled-components";

const DeviceInfoWrapper = styled.div`
    grid-area: ${props => "device-" + props.area};
    background-color: #6ab7ff;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
`

export default DeviceInfoWrapper;
