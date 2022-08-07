import styled from "styled-components";
import device from "../StyledComponents/Breakpoint";
import { FlexWrapper } from "../StyledComponents/FlexWrapper";

export const MyWorkSection = styled.section`
    padding: 4rem 0;
    background: var(--background);
`;


export const WorkFlexWrapper = styled.div`
`;

export const DescriptionSlide = styled(FlexWrapper)`
    flex-direction: column;
    align-items: center;

    img {
        width: 90%;
        height: 16.5rem;
        border-radius: 29px;
        margin-bottom: 1rem;
        object-fit: cover;
    }

    h3 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    p {
        text-align: center;
        padding: 0 1.5rem 0 1.5rem;
        font-size: 1.5rem;
    }   
    
    a {
        padding: 1.5rem 2rem;
        display: flex;
        align-items: center;
        color: var(--color-border);
    }

    svg {
        margin-left: 0.5rem;
        margin-bottom: -1px;
        width: 1rem;
        height: auto;
        stroke-width: 0.2rem;
        stroke: var(--background-button);
    }

    @media ${device.tablet} {
            width: 48%;

            p {
                font-size: 1.8rem;
                padding: 0;
            }

            a {
                font-size: 1.2rem;
            }
    }

    @media ${device.laptop} {

        h3 {
            font-size: 3.5rem;
        }

        p {
            font-size: 2.2rem;
        }

        a svg {
            margin-bottom: -5px;
            width: 2rem;
            transition: stroke, margin-left 0.3s ease-in-out;
        }

        a {
            font-size: 1.8rem;
            transition: color, transform  0.3s ease-in-out;
        }

        a:hover svg {
            stroke: var(--button-hover);
            margin-left: 1.5rem;
        }

        a:hover {
            color: var(--button-hover);
            transform: scale(1.5);
        }
    }

    @media ${device.laptopL} {
        h3 {
            margin-bottom: 1.5rem;
        }
        p {
            font-size: 2.8rem;
            margin-bottom: 1.5rem;
        }

        a {
            font-size: 2.5rem;
        }
        
    }
`;

export const Title = styled.h1`
    margin-bottom: 1.5rem;
    font-size: 3rem;

    @media ${device.laptop} {
            font-size: 4.2rem;
    }
`;
