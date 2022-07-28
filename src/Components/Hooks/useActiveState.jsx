import { useState } from 'react';

const useActiveState = () => {

    const [activeState, setActiveState] = useState(false);

    return { activeState, setActiveState };
};

export default useActiveState;
