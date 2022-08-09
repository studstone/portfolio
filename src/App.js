import React from "react";
import About from "./Components/About/About";
import ButtonUp from "./Components/ButtonUp/ButtonUp";
import Footer from "./Components/Footer/Footer";
import useActiveState from "./Components/Hooks/useActiveState";
import useOpenModal from "./Components/Hooks/useOpenModal";
import Modal from "./Components/Modal/Modal";
import NavBar from "./Components/NavBar/NavBar";
import Preview from "./Components/Preview/Preview";
import Skills from "./Components/Skills/Skills";
import ClobalStyle from "./Components/StyledComponents/GlobalStyle";
import MyWork from "./Components/Work/MyWork";
import { contacts, items, skills, slides } from "./DB/DBItems";

const App = () => {
    const activState = useActiveState();
    const toggleModal = useOpenModal();

    return (
        <>
            <ClobalStyle />
            <NavBar activState={activState} items={items} />
            <Preview {...toggleModal} />
            <Skills skills={skills} />
            <About />
            <MyWork slides={slides} />
            <Footer contacts={contacts} />
            <Modal {...toggleModal} />
            <ButtonUp />
        </>
    );
};

export default App;
