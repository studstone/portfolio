import React from "react";
import useActiveState from "./Components/Hooks/useActiveState";
import NavBar from "./Components/NavBar/NavBar";
import Preview from "./Components/Preview/Preview";
import Skills from "./Components/Skills/Skills";
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

    const skills = [
        {
            value: 'FLEXBOX',
            src: './image/flexbox.svg',
            alt: 'Icon'
        },
        {
            value: 'GRID',
            src: './image/grid.svg',
            alt: 'Icon'
        },
        {
            value: 'SCSS',
            src: './image/scss.svg',
            alt: 'Icon'
        },
        {
            value: 'REACT',
            src: './image/react.svg',
            alt: 'Icon'
        },
        {
            value: 'WEBPACK',
            src: './image/webpack.svg',
            alt: 'Icon'
        },
        {
            value: 'ANIMATION',
            src: './image/animation.svg',
            alt: 'Icon'
        },
        {
            value: 'BEM',
            src: './image/bem.svg',
            alt: 'Icon'
        }
    ];

    const activState = useActiveState();

    return (
        <>
            <ClobalStyle />
            <NavBar activState={activState} items={items} />
            <Preview />
            <Skills skills={skills} />
        </>
    );
};

export default App;
