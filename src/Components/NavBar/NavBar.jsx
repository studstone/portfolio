import React from 'react';
import BurgerMenu from './BurgerMenu';
import Logo from './Logo';
import Navigation from './Navigation';
import { Container } from '../StyledComponents/Container';
import { NavbarStyled, NavBarWrapper } from './StyledComponent';

const NavBar = ({ activState, items }) => (
    <>
        <NavbarStyled>
            <Container>
                <NavBarWrapper>
                    <Logo />
                    <Navigation {...activState} items={items} />
                    {
                        window.innerWidth < 768 &&
                        <BurgerMenu {...activState} />
                    }
                </NavBarWrapper>
            </Container>
        </NavbarStyled>
    </>
);

export default NavBar;
