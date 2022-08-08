import styled from 'styled-components';
import device from '../StyledComponents/Breakpoint';
import { FlexWrapper } from '../StyledComponents/FlexWrapper';


export const Section = styled.section`
    background: var(--background);
    overflow: hidden;
`;

export const PreviewFLex = styled(FlexWrapper)`
    flex-direction: column;
    color: var(--color-text);
    padding-top: 7.6rem;

    @media ${device.laptop} {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-top: 9.6rem;
    }

    @media ${device.laptop} {
        padding-top: 12.6rem;
    }
`;

export const InformationFlex = styled.div`
    @media ${device.laptop} {
        width: 48%;
    }
`;

export const Title = styled.h1`
    font-size: 2.5rem;

    & span {
        display: block;
        font-size: 2rem;
        font-weight: 600;
    }

    @media ${device.tablet} {
        font-size: 3.5rem;

        & span {
            font-size: 2rem;
        }
    }

    @media ${device.laptop} {
        font-size: 4.2rem;

        & span {
            font-size: 3.2rem;
        }
    }

    @media ${device.laptopL} {
        font-size: 5.8rem;

        & span {
            font-size: 4.8rem;
        }
    }

    @media ${device.desktop} {
        font-size: 7.2rem;

        & span {
            font-size: 6.2rem;
        }
    }
`;

export const Text = styled.p`
    margin-top: 1rem;
    font-size: 1.2rem;
    line-height: 1.8rem;

    @media ${device.tablet} {
        width: 50%;
        font-size: 1.6rem;
        line-height: 2.2rem;
    }

    @media ${device.laptop} {
        width: 100%;
        font-size: 2rem;
        line-height: 2.8rem;
    }

    @media ${device.laptopL} {
        font-size: 2.6rem;
        line-height: 3.6rem;
    }

    @media ${device.desktop} {
        font-size: 3.2rem;
        line-height: 4.2rem;
    }
`;

export const Button = styled.button`
    width: 100%;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.1rem;
    text-align: center;
    margin-top: 1rem;
    padding: 1rem 0;
    background-color: var(--background-button);
    box-shadow: var(--button-shadow);
    border-radius: 0.6rem;
    color: black;
    
    @media ${device.tablet} {
        margin-top: 2.5rem;
        width: 52%;
        padding: 1.2rem 0;
    }
    
    @media ${device.laptop} {
        padding: 1.4rem 0;
        transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        
        :hover {
            background-color: var(--button-hover);
            box-shadow: var(--button-shadow-hover);
        }
    }

    @media ${device.laptopL} {
        font-size: 2.4rem;
        padding: 2rem 0;
    }

    @media ${device.desktop} {
        font-size: 3rem;
        padding: 2.2rem 0;
    }
`;

export const SkillsFlex = styled.div`
    margin-top: 1.5rem;
    position: relative;

    @media ${device.tablet} {
        margin-top: 2.5rem;
    }

    @media ${device.laptop} {
        margin-top: 0;
        width: 48%;
    }
`;

export const Ellipsis = styled.div`
    position: relative;
    width: 100%;
    height: 30rem;
    border-radius: 50%;
    border: 40px solid var(--color-icon);
    filter: drop-shadow(0px 4px 70px rgba(0, 193, 236, 0.25));


    @media ${device.mobileM} {
        height: 35.5rem;
    }

    @media ${device.mobileL} {
        height: 40.5rem;
    }

    @media ${device.tablet} {
        height: 74.8rem;
        border: 67px solid var(--color-icon);
    }

    @media ${device.laptop} {
        height: 481px;
        animation: rotate 10s infinite linear, animation-border 2s infinite linear;

        @keyframes rotate {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }

        @keyframes animation-border {
            0% {
                border: 67px solid var(--color-icon);
            }
            50% {
                border: 47px solid var(--color-icon);
            }
            100% {
                border: 67px solid var(--color-icon);
            }
        }
    }

    @media ${device.laptopL} {
        height: 681px;
    }

    @media ${device.desktop} {
        height: 1220px;
    }
`;

export const Circle = styled.span`
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

    @media ${device.tablet} {
        width: 90px;
        height: 90px;
        line-height: 90px;
        font-size: 2.5rem;
    }

    @media ${device.laptop} {
        animation: rotateCircle 10s infinite linear;

        @keyframes rotateCircle {
            0%{
                transform: rotate(0deg);
            }

            100%{
                transform: rotate(-360deg);
            }
        }
    }
`;

export const CircleHtml = styled(Circle)`
    top: -36px;
    left: 0;
    @media ${device.mobileM} {
        top: -24px;
    }

    @media ${device.mobileL} {
        top: -11px;
    }

    @media ${device.tablet} {
        top: 10px;
    }

    @media ${device.laptop} {
        top: -50px;
    }

    @media ${device.laptopL} {
        top: -3px;
    }

    @media ${device.desktop} {
        top: 158px;
    }
`;

export const CircleJs = styled(Circle)`
    top: 2px;
    right: -39px;
    @media ${device.mobileM} {
        top: 22px;
    }

    @media ${device.mobileL} {
        top: 42px;
    }

    @media ${device.tablet} {
        top: 56px;
    }

    @media ${device.laptop} {
        top: -15px;
    }

    @media ${device.laptopL} {
        top: 41px;
    }

    @media ${device.desktop} {
        top: 228px;
    }
`;

export const CircleCss = styled(Circle)`
    bottom: -18px;
    left: -22px;
    @media ${device.mobileM} {
        bottom: -2px;
    }

    @media ${device.mobileL} {
        bottom: 13px;
    }

    @media ${device.tablet} {
        bottom: 30px;
    }

    @media ${device.laptop} {
        bottom: -34px;
    }

    @media ${device.laptopL} {
        bottom: 18px;
    }

    @media ${device.desktop} {
        bottom: 190px;
    }
`;

export const User = styled.img`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: auto;
`;
