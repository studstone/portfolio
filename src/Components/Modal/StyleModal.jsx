import styled from "styled-components";
import { Blur } from "../NavBar/StyledComponent";
import { Button } from "../Preview/StyledComponent";
import device from "../StyledComponents/Breakpoint";

export const ModalBlur = styled(Blur)`
    top: 0;
    z-index: 1000;
`;


export const ModalWrapper = styled.div`
    position: fixed;
    padding: 3.2rem 1rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 80%;
    border-radius: 0.6rem;
    background: var(--background-circle);
    z-index: 1001;

    @media ${device.tablet} {
        width: 40%;
    }

    @media ${device.laptop} {
        width: 30%;
    }

    @media ${device.laptopL} {
        width: 20%;
    }
`;

export const ModalForm = styled.form`
    width: 100%;
    height: 100%;
`;

export const ModalInput = styled.input`
    padding-left: 1rem;
    width: 100%;
    height: 4rem;
    border: none;
    outline: none;
    border-radius: 0.6rem;
    margin-top: 1.5rem;
    font-size: 1.4rem;
    color: black;
    :first-child{
        margin-top: 0rem;
    }

    ::placeholder{
        color: black
    }

    @media ${device.laptop} {
        height: 5rem;
    }
`;

export const ModalButton = styled(Button)`
    margin-top: 2rem;

    @media ${device.tablet} {
        width: 100%;
    }
`;

export const ButtonCloseModal = styled.span`
    position: fixed;
    top: 0.5rem;
    right: 0.5rem;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    
    ::after,
    ::before{
        content: '';
        position: absolute;
        top: 50%;
        width: 100%;
        height: 0.2rem;
        background-color: var(--color-icon);
        transition: transform 0.4s ease-in-out;
    }
    ::after{
        transform: rotate(45deg);
    }
    ::before{
        transform: rotate(-45deg);
    }

    :hover{
        ::after{
            transform: rotate(-135deg);
        }
        ::before{
            transform: rotate(-225deg);
        }
    }

`;
