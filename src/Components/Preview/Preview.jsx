import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../StyledComponents/Container';
import UserImage from '../../image/men.webp';
import {
    Button, CircleCss, CircleHtml, CircleJs,
    Ellipsis, InformationFlex, PreviewFLex, Section, SkillsFlex, Text, Title, User
} from './StyledComponent';

const MSection = motion(Section);
const MTitle = motion(Title);
const MText = motion(Text);
const MButton = motion(Button);

const TextAnimation = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.3 }
    })
};

const Preview = ({ setOpenModal }) => {

    const hendlerOpenModal = () => {
        setOpenModal(prev => !prev);
        document.body.style.overflow = 'hidden';
    };

    return (
        <MSection
            id='preview'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
        >
            <Container>
                <PreviewFLex>
                    <InformationFlex>
                        <MTitle
                            variants={TextAnimation}
                            custom={1}
                        >
                            <span>Привет,</span> Я Николай Тимофеев
                        </MTitle>
                        <MText
                            variants={TextAnimation}
                            custom={2}
                        >
                            Занимаюсь фронтенд разработкой уже год.<br /> Вам&nbsp;нужен сайт? Тогда
                            свяжитесь со мной.
                        </MText>
                        <MButton
                            variants={TextAnimation}
                            custom={3}
                            onClick={hendlerOpenModal}
                        >
                            Связаться
                        </MButton>
                    </InformationFlex>
                    <SkillsFlex>
                        <Ellipsis>
                            <CircleCss>CSS</CircleCss>
                            <CircleJs>JS</CircleJs>
                            <CircleHtml>HTML</CircleHtml>
                        </Ellipsis>
                        <User
                            src={UserImage}
                        />
                    </SkillsFlex>
                </PreviewFLex>
            </Container>
        </MSection>
    );
};

export default Preview;
