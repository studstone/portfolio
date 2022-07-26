import React from "react";
import useActiveState from "./Components/Hooks/useActiveState";
import NavBar from "./Components/NavBar/NavBar";
import ClobalStyle from "./Components/StyledComponents/GlobalStyle";

const App = () => {
    const items = [
        {
            value: 'Домашняя',
            href: '#preview'
        },
        {
            value: 'Обо мне',
            href: '#about'
        },
        {
            value: 'Мои работы',
            href: '#work'
        },
        {
            value: 'Контакты',
            href: '#footer'
        }
    ];

    const activState = useActiveState();

    return (
        <>
            <ClobalStyle />
            <NavBar activState={activState} items={items} />
        </>
    );
};

export default App;
