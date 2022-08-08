import React from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../style/mobile-menu.css';
import { ButtonCloseModal, ModalBlur, ModalButton, ModalForm, ModalInput, ModalWrapper } from './StyleModal';


const Modal = ({ openModal, setOpenModal, inputs }) => {

    const closeModal = () => setOpenModal(false);

    return (
        <>
            <CSSTransition
                in={openModal}
                timeout={400}
                classNames='blur'
                mountOnEnter
                unmountOnExit
            >
                <ModalBlur onClick={closeModal} />
            </CSSTransition>
            <CSSTransition
                in={openModal}
                timeout={400}
                classNames='modal'
                mountOnEnter
                unmountOnExit
            >
                <ModalWrapper>
                    <ModalForm>
                        {
                            inputs.map((input, index) =>
                                <ModalInput
                                    key={index}
                                    name={input.name}
                                    type={input.type}
                                    placeholder={input.placeholder}
                                />
                            )
                        }
                        <ModalButton type="submit">
                            Оставьте заявку
                        </ModalButton>
                    </ModalForm>
                    <ButtonCloseModal onClick={closeModal} />
                </ModalWrapper>
            </CSSTransition>
        </>
    );
};

export default Modal;
