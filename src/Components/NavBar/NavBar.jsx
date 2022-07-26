import React from 'react';
import styled from 'styled-components';
import BurgerMenu from './BurgerMenu';
import Logo from './Logo';
import Navigation from './Navigation';
import { Container } from '../StyledComponents/Container';
import { FlexWrapper } from '../StyledComponents/FlexWrapper';

const NavbarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 1.3rem 0;
    background: var(--background);
    z-index: 999;
`;

const NavBarWrapper = styled(FlexWrapper)`
    align-items: center;
`;

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
