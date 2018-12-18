import styled from "styled-components";

const HomeWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr 3fr;
    grid-template-areas:
        "title title title"
        "back-button services services"
        "device-info services services"
        "device-info services services"
        "device-info services services";
    grid-column-gap: 2vw;
    height: 100%;
    width: 100%;
`
export default HomeWrapper;
