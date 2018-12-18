import styled from "styled-components";

const HomeWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 2fr 2fr 2fr;
    grid-template-areas:
        "title title title title"
        "reload-button reload-button reload-button reload-button"
        "device-0 device-1 device-2 device-3"
        "device-4 device-5 device-6 device-7"
        "device-8 device-9 device-10 device-11";
    grid-column-gap: 2vw;
    grid-row-gap: 2vw;
    height: 100%;
    width: 100%;
`
export default HomeWrapper;
