import React from 'react';
import { Keyboard, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from '../StyledComponents/Container';
import { DescriptionSlide, MyWorkSection, Title, WorkFlexWrapper } from './StyleMyWork';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';
import '../../style/swiper.css';

const MyWork = ({ slides }) => (
    <MyWorkSection id='work'>
        <Container>
            <WorkFlexWrapper>
                <Title>Мои Работы</Title>
                <Swiper
                    modules={[Navigation, Keyboard]}
                    navigation
                    keyboard
                >
                    {
                        slides.map((slide, index) =>
                            <SwiperSlide
                                key={index}
                            >
                                <img src={slide.src} alt={slide.alt} />
                                <DescriptionSlide>
                                    <h3>{slide.title}</h3>
                                    <p>{slide.description}</p>
                                    <a href={slide.href}>
                                        {slide.link}
                                        <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.5 1.5L25 12L14.5 22.5" />
                                            <path d="M25 12H1" />
                                        </svg>
                                    </a>
                                </DescriptionSlide>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </WorkFlexWrapper>
        </Container>
    </MyWorkSection>
);

export default MyWork;
