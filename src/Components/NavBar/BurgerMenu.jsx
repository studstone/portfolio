import React from 'react';
import { BurgerLine, ButtonBurger } from './StyledComponent';

const BurgerMenu = ({ activeState, setActiveState }) => {

    const togleAtribute = () => {
        setActiveState(prevState => !prevState);
    };

    return (
        <>
            <ButtonBurger visible={activeState} onClick={togleAtribute}>
                <BurgerLine visible={activeState} />
            </ButtonBurger>
        </>
    );
};

export default BurgerMenu;
