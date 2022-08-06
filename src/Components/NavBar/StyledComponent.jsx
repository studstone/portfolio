import styled from 'styled-components';
import 'animate.css';
import device from '../StyledComponents/Breakpoint';
import { FlexWrapper } from '../StyledComponents/FlexWrapper';

export const ButtonBurger = styled.button`
    position: relative;
    float: right;
    width: 3rem;
    height: 2rem;
    border: none;
    background: transparent;
    padding: 0;
    &::before, ::after {
        content: '';
        position: absolute;
        left: 0;
        width: 100%;
        height: 0.2rem;
        background-color: white;
        transition: transform 0.3s ease-in-out, top 0.3s ease-in-out, botto 0.3s ease-in-out;

    }
    &::before {
        top: ${props => (props.visible ? '50%' : '0')};
        transform: ${props => (props.visible ? 'rotate(45deg)' : 'rotate(0deg)')};

    }
    &::after{
        top: ${props => (props.visible ? '50%' : 'auto')};
        bottom: ${props => (props.visible ? 'auto' : '0')};
        transform: ${props => (props.visible ? 'rotate(-45deg)' : 'rotate(0deg)')};
    }
`;
export const BurgerLine = styled.span`
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 0.2rem;
    background-color: white;
    transform: translateY(-50%);
    opacity: ${props => (props.visible ? '0' : '1')};
    transition: opacity 0.3s ease-in-out;
`;

export const LogoSvg = styled.svg`
    display: inline-block;
    width: 2rem;
    height: 4rem;
    margin-right: 10px;

    @media ${device.tablet} {
        width: 2.5rem;
        height: 5rem;
        margin-right: 20px;
    }

    @media ${device.laptopL} {
        width: 3rem;
        height: 6rem;
    }
`;

export const LogoHeadBack = styled.path`
    animation-delay: 0.9s;
`;

export const LogoHeadEyes = styled.path`
    animation-delay: 0.7s;
`;

export const LogoHeadNose = styled.path`
    animation-delay: 0.5s;
`;

export const LogoHeadChin = styled.path`
    animation-delay: 0.2s;
`;

export const LogoHeadNeck = styled.path`
    animation-delay: 0s;
`;

export const LogoTitle = styled.h1`
    display: inline-block;
    color: white;
    margin-right: auto;
    letter-spacing: 1px;

    @media ${device.tablet} {
        font-size: 2.5rem;
    }

    @media ${device.laptopL} {
        font-size: 4rem;
    }
`;

export const NavbarStyled = styled.header`
    position: fixed;
    top: ${props => (props.visible ? "0" : "-10rem")};
    left: 0;
    right: 0;
    padding: 1.3rem 0;
    background: var(--background);
    z-index: 999;
    opacity: ${props => (props.visible ? "1" : "0")};
    transition: top 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;

export const NavBarWrapper = styled(FlexWrapper)`
    align-items: center;
`;

export const NavWrapper = styled.nav`
    position: fixed;
    right: 0;
    top: 6.6rem;
    width: 60%;
    bottom: 0;
    background: var(--background);
    z-index: 999;

    @media ${device.tablet} {
        position: relative;
        top: auto;
        right: auto;
        transform: translateX(0);
        background: transparent;
    }

    @media ${device.laptop} {
        width: 50%;
    }

    @media ${device.desktop} {
        width: 30%;
    }
`;

export const NavList = styled.ul`
    padding: 2rem 0 0 0;

    @media ${device.tablet} {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0;
    }
`;

export const NavItem = styled.li`
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--color-text);
    &:last-child{
        margin-bottom: 0;
    }

    @media ${device.tablet} {
        margin-bottom: 0;
        border-bottom: none;
    }

    @media ${device.laptop} {
        height: 4rem;
    }
`;

export const NavLink = styled.a`
    display: block;
    position: relative;
    text-align: center;
    font-size: 2rem;
    padding: 0 0 0.5rem 0;

    @media ${device.tablet} {
        padding: 0;
    }

    @media ${device.laptop} {
        font-size: 2.4rem;

        &:after {
            position: absolute;
            content:"";
            width: 0;
            height: 2px;
            background: var(--background-button);
            bottom: 0;
            right: 0;
            left: 0;
            margin-top: 0.1rem;
            transition: width 0.5s ease-in-out;   
        } 

        &:hover {

            &:after {
            width: 100%; 
            }
        }
    }
    @media ${device.laptopL} {
        font-size: 3.2rem;
    }
`;

export const Blur = styled.div`
    position: fixed;
    top: 66px;
    left: 0;
    right: 0;
    bottom: 0;
`;
