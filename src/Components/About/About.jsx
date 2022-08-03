import React from 'react';
import { Container } from '../StyledComponents/Container';
import {
    AboutText, CircleBlue, CircleWhite, CircleYellow, ImageWrapperFirst,
    ImageWrapperSecond, ImageWrapperThird, SectionAbout, TextWrapper, Title, Wrapper
} from './StyledComponent';


const About = () => (
    <SectionAbout id="about">
        <Container>
            <Wrapper>
                <Title>Обо мне</Title>
                <ImageWrapperFirst>
                    <img
                        src="./image/foto-1.webp"
                        alt="Icon: foto"
                    />
                </ImageWrapperFirst>
                {window.innerWidth >= 768 &&
                    <>
                        <CircleWhite />
                        <CircleBlue />
                        <CircleYellow />
                        <ImageWrapperSecond>
                            <img
                                src="./image/foto-2.webp"
                                alt="Icon: foto"
                            />
                        </ImageWrapperSecond>
                        <ImageWrapperThird>
                            <img
                                src="./image/foto-3.webp"
                                alt="Icon: foto"
                            />
                        </ImageWrapperThird>
                    </>
                }
                <TextWrapper>
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
                </TextWrapper>
            </Wrapper>
        </Container>
    </SectionAbout>
);

export default About;
