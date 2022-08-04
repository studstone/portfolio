import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../StyledComponents/Container';
import {
    AboutText, CircleBlue, CircleWhite, CircleYellow, ImageWrapperFirst,
    ImageWrapperSecond, ImageWrapperThird, SectionAbout, TextWrapper, Title, Wrapper
} from './StyledComponent';

const MWrapper = motion(Wrapper);
const MImageWrapperFirst = motion(ImageWrapperFirst);
const MImageWrapperSecond = motion(ImageWrapperSecond);
const MImageWrapperThird = motion(ImageWrapperThird);
const MCircleWhite = motion(CircleWhite);
const MCircleBlue = motion(CircleBlue);
const MCircleYellow = motion(CircleYellow);
const MTextWrapper = motion(TextWrapper);
const MTitle = motion(Title);

const BackInLeft = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.3 }
    })
};

const BackInRight = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.3 }
    })
};

const Opacity = {
    hidden: {
        opacity: 0,
    },
    visible: custom => ({
        opacity: 1,
        transition: { delay: custom * 0.3 }
    })
};


const About = () => (
    <SectionAbout id="about">
        <Container>
            <MWrapper
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.2, once: true }}
            >
                <MTitle
                    variants={BackInLeft}
                    custom={1}
                >
                    Обо мне
                </MTitle>
                <MImageWrapperFirst
                    variants={BackInLeft}
                    custom={2}
                >
                    <img
                        src="./image/foto-1.webp"
                        alt="Icon: foto"
                    />
                </MImageWrapperFirst>
                {window.innerWidth >= 768 &&
                    <>
                        <MCircleWhite
                            variants={BackInLeft}
                            custom={1}
                        />
                        <MCircleBlue
                            variants={BackInRight}
                            custom={3}
                        />
                        <MCircleYellow
                            variants={BackInRight}
                            custom={1}
                        />
                        <MImageWrapperSecond
                            variants={BackInLeft}
                            custom={3}
                        >
                            <img
                                src="./image/foto-2.webp"
                                alt="Icon: foto"
                            />
                        </MImageWrapperSecond>
                        <MImageWrapperThird
                            variants={BackInRight}
                            custom={2}
                        >
                            <img
                                src="./image/foto-3.webp"
                                alt="Icon: foto"
                            />
                        </MImageWrapperThird>
                    </>
                }
                <MTextWrapper
                    variants={Opacity}
                    custom={4}
                >
                    <AboutText>
                        Ещё раз привет! Мне 25 лет и я год занимаюсь разработкой сайтов.
                        Я прошел три курса: по HTML и CSS, Javascript и ReactJS. Почему
                        вы должны выбрать меня? К каждой работе я подхожу с огромной
                        ответственостью, а если косячу, то признаю ошибки и исправляю их
                        с компенсацией для вас. Стараюсь сделать заказ максимально
                        быстро, с учетом всех правок и пожеланий. Доверившись мне, вы
                        получите максимальную отдачу от своего проекта, сэкономите нервы
                        и время. Если вы заинтересовались мной, хотите узнать что-то еще
                        или воспользоваться моими услугами, то я предоставлю все мои
                        контакты ниже.
                    </AboutText>
                </MTextWrapper>
            </MWrapper>
        </Container>
    </SectionAbout>
);

export default About;
