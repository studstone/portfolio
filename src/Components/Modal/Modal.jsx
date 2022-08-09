import React from 'react';
import { useForm } from 'react-hook-form';
import { CSSTransition } from 'react-transition-group';
import '../../style/mobile-menu.css';
import { ButtonCloseModal, ModalBlur, ModalButton, ModalForm, ModalInput, ModalWrapper } from './StyleModal';


const Modal = ({ openModal, setOpenModal }) => {
    const {
        register,
        formState: {
            errors,
            isValid,
        },
        handleSubmit,
        reset
    } = useForm({
        mode: 'onBlur'
    });

    const closeModal = () => {
        setOpenModal(false);
        document.body.removeAttribute('style');
        reset();
    };

    const onSubmit = data => {
        console.log(data);
        reset();
    };

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
                    <ModalForm onSubmit={handleSubmit(onSubmit)}>
                        <ModalInput
                            {...register('name', {
                                required: 'Поле обязательно к заполнению',
                                pattern: {
                                    value: /^[а-яА-ЯёЁa ]{2,20}$/,
                                    message: 'Введите корректноe имя',
                                },
                            })}
                            type='text'
                            placeholder='Ваше Имя'
                            label='Ваше Имя'
                        />
                        {
                            errors?.name &&
                            <span>{errors?.name.message}</span>
                        }
                        <ModalInput
                            {...register('email', {
                                required: 'Поле обязательно к заполнению',
                                pattern: {
                                    value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
                                    message: 'Введите корректный Email',
                                },
                            })}
                            type='email'
                            placeholder='Ваш Email'
                        />
                        {
                            errors?.email &&
                            <span>{errors?.email.message}</span>
                        }
                        <ModalInput
                            {...register('phone', {
                                required: 'Поле обязательно к заполнению',
                                pattern: {
                                    value: /^((8|\+7)[-]?)?(\(?\d{3}\)?[-]?)?[\d\- ]{7,10}$/,
                                    message: 'Введите корректный номер телефона',
                                },
                            })}
                            type='tel'
                            placeholder='Ваш телефон'
                        />
                        {
                            errors?.phone &&
                            <span>{errors?.phone.message}</span>
                        }
                        <ModalButton disabled={!isValid} type="submit" >
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
