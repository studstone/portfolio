import styled from "styled-components";
import device from "./Breakpoint";

export const Container = styled.div`
    max-width: 30rem;
    margin: auto;

    @media ${device.mobileM} {
        max-width: 35.5rem;
    }

    @media ${device.mobileL} {
        max-width: 40.5rem;
    }

    @media ${device.tablet} {
        max-width: 74.8rem;
    }

    @media ${device.laptop} {
        max-width: 100.4rem;
    }

    @media ${device.laptopL} {
        max-width: 142.0rem;
    }

    @media ${device.desktop} {
        max-width: 250.0rem;
    }
`;
