import React from 'react';
import styled from 'styled-components';

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
        top: ${props => (props.visible ? '50%' : '0')};
        transform: ${props => (props.visible ? 'rotate(45deg)' : 'rotate(0deg)')};

    }
    &::after{
        top: ${props => (props.visible ? '50%' : 'auto')};
        bottom: ${props => (props.visible ? 'auto' : '0')};
        transform: ${props => (props.visible ? 'rotate(-45deg)' : 'rotate(0deg)')};
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
    opacity: ${props => (props.visible ? '0' : '1')};
    transition: opacity 0.3s ease-in-out;
`;

const BurgerMenu = ({ activeState, setActiveState }) => {

    const togleAtribute = () => {
        setActiveState(prevState => !prevState);
    };

    return (
        <>
            <ButtonBurger visible={activeState} onClick={togleAtribute}>
                <BurgerLine visible={activeState} />
            </ButtonBurger>
        </>
    );
};

export default BurgerMenu;
