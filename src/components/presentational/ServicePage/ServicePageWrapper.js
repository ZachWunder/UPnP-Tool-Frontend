import styled from "styled-components";

const ServicePageWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas:
        "back-button services services"
        "actions services services"
        "actions services services"
        "actions services services";
    grid-column-gap: 2vw;
    height: 100%;
    width: 100%;
`
export default ServicePageWrapper;
