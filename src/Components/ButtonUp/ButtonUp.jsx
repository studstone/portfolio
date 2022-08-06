import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import Arrow from '../../image/arrow.svg';
import '../../style/mobile-menu.css';
import device from '../StyledComponents/Breakpoint';


const Button = styled.button`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: var(--background-button);
    box-shadow: var(--button-shadow);
    background-image: url(${Arrow});
    background-size: 50%;
    background-position: center;
    background-repeat: no-repeat;
    transform: rotate(-90deg);
    z-index: 999;

    @media ${device.laptop} {
        width: 5rem;
        height: 5rem;
        transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

        :hover {
            background-color: var(--button-hover);
            box-shadow: var(--button-shadow-hover);
        }
    }
`;

const ButtonUp = () => {
    console.log();

    const [activeButton, setActiveButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 250) {
                setActiveButton(true);
            } else {
                setActiveButton(false);
            }
        });
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <CSSTransition
                in={activeButton}
                timeout={300}
                classNames='button-up'
                mountOnEnter
                unmountOnExit
            >
                <Button onClick={scrollUp} />
            </CSSTransition>
        </>
    );
};

export default ButtonUp;
