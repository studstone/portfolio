import React from 'react';
import { Container } from '../StyledComponents/Container';
import { FooterList, FooterTitle, Icon, Link, ListItem, SectionFooter } from './StyleFooter';

const Footer = ({ contacts }) => (
    <SectionFooter id="footer">
        <Container>
            <FooterTitle>Контакты:</FooterTitle>
            <FooterList>
                {
                    contacts.map((contact, index) =>
                        <ListItem key={index}>

                            <Link href={contact.href}>
                                <Icon src={contact.src} alt={contact.alt} />
                                {contact.name}&ensp;{contact.link}
                            </Link>
                        </ListItem>
                    )
                }
            </FooterList>
        </Container>
    </SectionFooter>
);

export default Footer;
