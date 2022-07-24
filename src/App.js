import React from "react";
import useActiveState from "./Components/Hooks/useActiveState";
import NavBar from "./Components/NavBar/NavBar";
import ClobalStyle from "./Components/StyledComponents/GlobalStyle";

const App = () => {
    const activState = useActiveState();

    return (
        <>
            <ClobalStyle />
            <NavBar {...activState} />
        </>
    );
};

export default App;
