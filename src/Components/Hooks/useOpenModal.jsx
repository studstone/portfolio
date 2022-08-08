import { useState } from 'react';

const useOpenModal = () => {

    const [openModal, setOpenModal] = useState(false);

    return { openModal, setOpenModal };
};

export default useOpenModal;
