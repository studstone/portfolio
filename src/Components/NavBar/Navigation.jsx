import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../style/mobile-menu.css';
import { Blur, NavItem, NavLink, NavList, NavWrapper } from './StyledComponent';

const Navigation = ({ activeState, setActiveState, items }) => {
    const box = useRef(null);

    const togleAtribute = () => {
        if (window.innerWidth < 768 || box.current) {
            setActiveState(prevState => !prevState);
        }
    };

    const scroll = e => {
        e.preventDefault();

        const section = document.querySelector(e.target.hash);

        section.scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
    };

    return (
        <>
            <CSSTransition
                in={activeState}
                timeout={400}
                classNames='menu'
                mountOnEnter
                unmountOnExit
            >
                <NavWrapper>
                    <NavList>
                        {
                            items.map((item, index) =>
                                <NavItem key={index} onClick={togleAtribute}>
                                    <NavLink
                                        href={item.href}
                                        onClick={scroll}
                                    >
                                        {item.value}
                                    </NavLink>
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
                                    <NavLink
                                        onClick={scroll}
                                        href={item.href}
                                    >
                                        {item.value}
                                    </NavLink>
                                </NavItem>
                            )
                        }
                    </NavList>
                </NavWrapper>
            }
            <CSSTransition
                in={activeState}
                timeout={400}
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
