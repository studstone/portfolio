import React from 'react';
import { useState } from 'react';
import BurgerMenu from './BurgerMenu';
import Logo from './Logo';
import Navigation from './Navigation';
import { Container } from '../StyledComponents/Container';
import { NavbarStyled, NavBarWrapper } from './StyledComponent';

const NavBar = ({ activState, items }) => {
    const [visible, setVisible] = useState(true);

    let oldScroll = window.pageYOffset;

    window.addEventListener('scroll', () => {
        const scroll = window.pageYOffset;

        scroll > oldScroll ? setVisible(false) : setVisible(true);

        oldScroll = scroll;
    });


    return (
        <>
            <NavbarStyled visible={visible}>
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
};

export default NavBar;
