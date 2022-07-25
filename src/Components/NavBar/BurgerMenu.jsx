import React from 'react';
import styled from 'styled-components';
import device from '../StyledComponents/Breakpoint';

const ButtonBurger = styled.button`
    position: relative;
    float: right;
    width: 3rem;
    height: 2rem;
    border: none;
    background: transparent;
    padding: 0;
    &::before, ::after {
        content: '';
        position: absolute;
        left: 0;
        width: 100%;
        height: 0.2rem;
        background-color: white;
        transition: transform 0.3s ease-in-out, top 0.3s ease-in-out, botto 0.3s ease-in-out;

    }
    &::before {
        top: ${props => (props.visible ? '0' : '50%')};
        transform: ${props => (props.visible ? 'rotate(0deg)' : 'rotate(45deg)')};

    }
    &::after{
        top: ${props => (props.visible ? 'auto' : '50%')};
        bottom: ${props => (props.visible ? '0' : 'auto')};
        transform: ${props => (props.visible ? 'rotate(0deg)' : 'rotate(-45deg)')};
    }

    @media ${device.tablet} {
        display: none;
    }
`;
const BurgerLine = styled.span`
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 0.2rem;
    background-color: white;
    transform: translateY(-50%);
    opacity: ${props => (props.visible ? '1' : '0')};
    transition: opacity 0.3s ease-in-out;
`;

const BurgerMenu = ({ activeState, setActiveState }) => {

    const openMenu = () => {
        setActiveState(prevState => !prevState);
    };

    return (
        <>
            <ButtonBurger visible={activeState} onClick={openMenu}>
                <BurgerLine visible={activeState} />
            </ButtonBurger>
        </>
    );
};

export default BurgerMenu;
