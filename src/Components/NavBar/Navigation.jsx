import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../style/mobile-menu.css';
import styled from 'styled-components';
import device from '../StyledComponents/Breakpoint';

const NavWrapper = styled.nav`
    position: fixed;
    right: 0;
    top: 6.6rem;
    width: 60%;
    bottom: 0;
    background: var(--background);
    z-index: 999;

    @media ${device.tablet} {
        position: relative;
        top: auto;
        right: auto;
        transform: translateX(0);
        background: transparent;
    }

    @media ${device.laptop} {
        width: 50%;
    }

    @media ${device.desktop} {
        width: 30%;
    }
`;

const NavList = styled.ul`
    padding: 2rem 0 0 0;

    @media ${device.tablet} {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0;
    }
`;

const NavItem = styled.li`
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--color-text);
    &:last-child{
        margin-bottom: 0;
    }

    @media ${device.tablet} {
        margin-bottom: 0;
        border-bottom: none;
    }

    @media ${device.laptop} {
        height: 4rem;
    }
`;

const NavLink = styled.a`
    display: block;
    text-align: center;
    font-size: 2rem;
    padding: 0 0 0.5rem 0;

    @media ${device.tablet} {
        padding: 0;
    }

    @media ${device.laptop} {
        font-size: 2.4rem;
        transition: border-bottom 0.3s ease;
        :hover {
            border-bottom: 1px solid var(--color-border);
        }
    }

    @media ${device.laptopL} {
        font-size: 3.2rem;
    }
`;

const Blur = styled.div`
    position: fixed;
    top: 66px;
    left: 0;
    right: 0;
    bottom: 0;
`;

const Navigation = ({ activeState, setActiveState, items }) => {
    const box = useRef(null);

    const togleAtribute = () => {
        if (window.innerWidth < 768 || box.current) {
            setActiveState(prevState => !prevState);
        }
    };

    return (
        <>
            <CSSTransition
                in={activeState}
                timeout={500}
                classNames='menu'
                mountOnEnter
                unmountOnExit
            >
                <NavWrapper>
                    <NavList>
                        {
                            items.map((item, index) =>
                                <NavItem key={index} onClick={togleAtribute}>
                                    <NavLink href={item.href}>{item.value}</NavLink>
                                </NavItem>
                            )
                        }
                    </NavList>
                </NavWrapper>
            </CSSTransition>
            {window.innerWidth >= 768 &&
                <NavWrapper>
                    <NavList>
                        {
                            items.map((item, index) =>
                                <NavItem key={index} onClick={togleAtribute}>
                                    <NavLink href={item.href}>{item.value}</NavLink>
                                </NavItem>
                            )
                        }
                    </NavList>
                </NavWrapper>
            }
            <CSSTransition
                in={activeState}
                timeout={500}
                classNames='blur'
                mountOnEnter
                unmountOnExit
            >
                <Blur
                    ref={box}
                    onClick={togleAtribute} />
            </CSSTransition>
        </>
    );
};

export default Navigation;
