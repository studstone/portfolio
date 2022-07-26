import React from 'react';
import styled from 'styled-components';
import { Container } from '../StyledComponents/Container';
import { FlexWrapper } from '../StyledComponents/FlexWrapper';
import UserImage from '../../image/men.webp';

const Section = styled.section`
    background: var(--background);
`;

const PreviewFLex = styled(FlexWrapper)`
    flex-direction: column;
    color: var(--color-text);
    padding-top: 7.6rem;
`;

const InformationFlex = styled.div`

`;

const Title = styled.h1`
    font-size: 2.5rem;

    & span {
        display: block;
        font-size: 2rem;
        font-weight: 600;
    }
`;

const Text = styled.p`
    margin-top: 1rem;
    font-size: 1.2rem;
    line-height: 1.8rem;

`;

const Button = styled.button`
    width: 100%;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.1rem;
    text-align: center;
    margin-top: 1rem;
    padding: 1rem 0;
    background: var(--background-button);
    box-shadow: 0rem 0.2rem 1.3rem rgba(226, 158, 0, 0.48);
    border-radius: 0.6rem;
`;

const SkillsFlex = styled.div`
    margin-top: 1.5rem;
    position: relative;
`;

const Ellipsis = styled.div`
    border: 40px solid var(--color-icon);
    width: 100%;
    height: 300px;
    border-radius: 50%;
    filter: drop-shadow(0px 4px 70px rgba(0, 193, 236, 0.25));
`;

const Circle = styled.span`
    display: block;
    position: absolute;
    font-family: 'Noto Sans', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    line-height: 60px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--background-circle);
    color: var(--color-icon);
`;

const CircleHtml = styled(Circle)`
    top: -36px;
    left: 0;
`;

const CircleJs = styled(Circle)`
    top: 2px;
    right: -39px;
`;

const CircleCss = styled(Circle)`
    bottom: -18px;
    left: -22px;
`;

const User = styled.img`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: auto;
`;


const Preview = () => (
    <Section>
        <Container>
            <PreviewFLex>
                <InformationFlex>
                    <Title>
                        <span>Привет,</span> Я Николай Тимофеев
                    </Title>
                    <Text>
                        Занимаюсь фронтенд разработкой уже год. Вам&nbsp;нужен сайта? Тогда
                        свяжитесь со мной.
                    </Text>
                    <Button>Связаться</Button>
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
    </Section>
);

export default Preview;
