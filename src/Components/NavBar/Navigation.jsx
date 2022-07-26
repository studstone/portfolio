import React from 'react';
import styled from 'styled-components';
import device from '../StyledComponents/Breakpoint';

const NavWrapper = styled.nav`
    position: fixed;
    right: 0;
    top: 6.6rem;
    width: 60%;
    bottom: 0;
    background-color: var(--color-background);
    z-index: 999;
    transform: ${props => (props.visible ? 'translateX(100%)' : 'translateX(0)')};
    transition: transform 0.5s ease-in-out;

    @media ${device.tablet} {
        position: relative;
        top: auto;
        right: auto;
        transform: translateX(0);
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
        transition: border-bottom 0.3s ease;
        :hover {
            border-bottom: 1px solid var(--color-border);
        }
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
    }

    @media ${device.laptopL} {
        font-size: 3.2rem;
    }
`;

const Navigation = ({ activeState, setActiveState, items }) => {

    const togleAtribute = () => {
        if (window.innerWidth < 768) {
            setActiveState(prevState => !prevState);
        }
    };

    return (
        <>
            <NavWrapper visible={activeState}>
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
        </>
    );
};

export default Navigation;
