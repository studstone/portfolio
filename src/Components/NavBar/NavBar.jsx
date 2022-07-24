import React from 'react';
import styled from 'styled-components';
import BurgerMenu from './BurgerMenu';
import Logo from './Logo';
import Navigation from './Navigation';

const NavbarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 1.3rem 0;
    background-color: var(--color-background);
`;

const Container = styled.div`
    width: 30rem;
    margin: auto;
`;

const NavBarWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const NavBar = activState => (
    <>
        <NavbarStyled>
            <Container>
                <NavBarWrapper>
                    <Logo />
                    <Navigation {...activState} />
                    <BurgerMenu {...activState} />
                </NavBarWrapper>
            </Container>
        </NavbarStyled>
    </>
);

export default NavBar;
