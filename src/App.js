import React from "react";
import About from "./Components/About/About";
import ButtonUp from "./Components/ButtonUp/ButtonUp";
import Footer from "./Components/Footer/Footer";
import useActiveState from "./Components/Hooks/useActiveState";
import NavBar from "./Components/NavBar/NavBar";
import Preview from "./Components/Preview/Preview";
import Skills from "./Components/Skills/Skills";
import ClobalStyle from "./Components/StyledComponents/GlobalStyle";
import MyWork from "./Components/Work/MyWork";
import { contacts, items, skills, slides } from "./DB/DBItems";

const App = () => {
    const activState = useActiveState();

    return (
        <>
            <ClobalStyle />
            <NavBar activState={activState} items={items} />
            <Preview />
            <Skills skills={skills} />
            <About />
            <MyWork slides={slides} />
            <Footer contacts={contacts} />
            <ButtonUp />
        </>
    );
};

export default App;
