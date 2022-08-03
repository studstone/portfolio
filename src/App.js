import React from "react";
import useActiveState from "./Components/Hooks/useActiveState";
import NavBar from "./Components/NavBar/NavBar";
import Preview from "./Components/Preview/Preview";
import Skills from "./Components/Skills/Skills";
import ClobalStyle from "./Components/StyledComponents/GlobalStyle";
import { items, skills } from "./DB/DBItems";

const App = () => {


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
