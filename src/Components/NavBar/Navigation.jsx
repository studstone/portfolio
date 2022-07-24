import React from 'react';
import styled from 'styled-components';

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
`;

const NavList = styled.ul`
    padding: 2rem 0 0 0;
`;

const NavItem = styled.li`
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--color-text);
    &:last-child{
        margin-bottom: 0;
    }
`;

const NavLink = styled.a`
    display: block;
    text-align: center;
    font-size: 2rem;
    padding: 0 0 0.5rem 0;
`;

const Navigation = ({ activeState }) => (
    <>
        <NavWrapper visible={activeState}>
            <NavList>
                <NavItem>
                    <NavLink href="#preview">Домашняя</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#about">Обо мне</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#work">Мои работы</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#footer">Контакты</NavLink>
                </NavItem>
            </NavList>
        </NavWrapper>
    </>
);

export default Navigation;
