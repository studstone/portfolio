import React from 'react';
import styled from 'styled-components';
import device from '../StyledComponents/Breakpoint';
import { Container } from '../StyledComponents/Container';

const SectionSkills = styled.section`
    padding: 4rem 0;
    background: linear-gradient(130.68deg, #414141 0%, #2d2d2d 100.52%);
    color: var(--color-text);
    font-size: 2rem;
`;

const SkillsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem 2rem;

    @media ${device.tablet} {
        justify-content: center;
    }

    @media ${device.laptop} {
        gap: 2rem 2rem
    }
`;

const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 14rem;
    height: 14rem;
    background-color: #2A2A2A;
    box-shadow: 0rem 0.4rem 0.6rem rgba(0, 0, 0, 0.47);
    border-radius: 29px;
    
    
    img {
        width: 6rem;
        height: auto;
        margin-bottom: 0.5rem;
    }

    @media ${device.mobileM} {
        width: 16.7rem;
        height: 16.7rem;

        img {
            width: 7.5rem;
        }
    }

    @media ${device.mobileL} {
        width: 19.2rem;
        height: 19.2rem;

        img {
            width: 8.5rem;
        }
    }

    @media ${device.tablet} {
        width: 23.6rem;
        height: 23.6rem;

        img {
            width: 8.5rem;
        }
    }

    @media ${device.laptop} {
        width: 27rem;
        height: 27rem;

        img {
            width: 10rem;
        }
    }
`;

const Skills = ({ skills }) => {
    console.dir(SectionSkills);

    return (
        <SectionSkills>
            <Container>
                <SkillsList>
                    {
                        skills.map((skill, index) =>
                            <Item key={index}>
                                <img src={skill.src} alt={skill.alt} />
                                <span>{skill.value}</span>
                            </Item>
                        )
                    }
                </SkillsList>
            </Container>
        </SectionSkills>
    );
};

export default Skills;
