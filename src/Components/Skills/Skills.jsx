import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../StyledComponents/Container';
import { Item, SectionSkills, SkillsList } from './StyledComponent';

const MSectionSkills = motion(SectionSkills);
const MSkillsList = motion(SkillsList);
const MItem = motion(Item);

const SkillsAnimation = {
    hidden: {
        rotateX: -180,
        opacity: 0
    },
    visible: custom => ({
        rotateX: 0,
        opacity: 1,
        transition: { delay: custom * 0.3 }
    })
};

const Skills = ({ skills }) => (
    <MSectionSkills
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.3, once: true }}
    >
        <Container>
            <MSkillsList>
                {
                    skills.map((skill, index) =>
                        <MItem
                            key={index}
                            variants={SkillsAnimation}
                            custom={index + 1}
                        >
                            <img src={skill.src} alt={skill.alt} />
                            <span>{skill.value}</span>
                        </MItem>
                    )
                }
            </MSkillsList>
        </Container>
    </MSectionSkills>
);

export default Skills;
