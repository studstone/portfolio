import styled from "styled-components";
import { Title } from '../About/StyledComponent';
import device from '../StyledComponents/Breakpoint';

export const SectionFooter = styled.footer`
    padding: 2rem 0;
`;

export const FooterList = styled.ul`
    display: flex;
    align-items: start;
    flex-direction: column;
    flex-grow: 1; 
`;

export const ListItem = styled.li`
    margin-bottom: 1rem;
    font-size: 1.4rem;

    :last-child{
        margin-bottom: 0;
    }

    @media ${device.tablet} {
        font-size: 2rem;
    }
`;

export const Icon = styled.img`
    margin-right: 1rem;
`;

export const Link = styled.a`
    display: flex;
    align-items: center;
    color: inherit;

    @media ${device.laptop} {
        position: relative;

        &::after {
            position: absolute;
            content:"";
            width: 0;
            height: 2px;
            background: var(--background-button);
            bottom: -5px;
            right: 0;
            left: 0;
            margin-top: 0.1rem;
            transition: width 0.4s ease-in-out, color 0.4s ease-in-out;
        }

        &:hover {
            color: #ffffff;
            &:after {
            width: 100%;
            }
        }
    }

    @media ${device.laptopL} {
        font-size: 2.4rem;
    }
`;

export const FooterTitle = styled(Title)`
    margin-bottom: 1.5rem;
    @media ${device.tablet} {
        font-size: 2.4rem;
    }
    @media ${device.laptopL} {
        font-size: 3rem;
    }
`;
