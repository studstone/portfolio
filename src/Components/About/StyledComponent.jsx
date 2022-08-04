import styled from 'styled-components';
import device from '../StyledComponents/Breakpoint';


export const SectionAbout = styled.section`
    padding: 4rem 0;
    background: linear-gradient(130.68deg, #414141 0%, #2d2d2d 100.52%);
    color: var(--color-text);
    font-size: 2rem;
    overflow: hidden;

    @media ${device.laptop} {
            padding-bottom: 85rem
    }

    @media ${device.laptopL} {
            padding-bottom: 90rem
    }
`;
export const Wrapper = styled.div`
    width: 100%;

    @media ${device.tablet} {
        position: relative;
    }
`;

export const Title = styled.h1`
    margin-bottom: 1.5rem;

    @media ${device.tablet} {
            margin-bottom: 84rem;
    }

    @media ${device.laptop} {
            font-size: 4.2rem;
            margin-bottom: 0;
    }
`;

export const CircleWhite = styled.div`

    @media ${device.tablet} {    
        position: absolute;
        top: 6rem;
        left: 0;
        width: 50rem;
        height: 50rem;
        border: 6rem solid #E4E4E4;
        border-radius: 50%;
        filter: drop-shadow(0px 4px 70px rgba(255, 255, 255, 0.25));
    }

    @media ${device.laptop} {
        width: 60rem;
        height: 60rem;
    }

    @media ${device.laptopL} {
        width: 80rem;
        height: 80rem;
    }
`;

export const CircleBlue = styled.div`
    @media ${device.tablet} {
        position: absolute;
        top: 36rem;
        right: 0;
        width: 40rem;
        height: 40rem;
        border-radius: 50%;
        border: 55px solid #00C4F0;
        filter: drop-shadow(0px 4px 70px rgba(0, 193, 236, 0.25));
    }

    @media ${device.laptop} {
        width: 50rem;
        height: 50rem;
    }

    @media ${device.laptopL} {
        width: 40rem;
        height: 40rem;
        top: 50rem;
        right: 22rem;
    }
`;

export const CircleYellow = styled.div`
    @media ${device.tablet} {
        position: absolute;
        top: 6rem;
        right: 0;
        width: 30rem;
        height: 30rem;
        border-radius: 50%;
        border: 34px solid #E2A200;
        filter: drop-shadow(0px 4px 70px rgba(226, 162, 0, 0.25));
    }

    @media ${device.laptop} {
        top: 0;
        right: 3.3rem;
        width: 40rem;
        height: 40rem;
    }

    @media ${device.laptopL} {
        right: 6rem;
        width: 50rem;
        height: 50rem;
    }
`;

export const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1.4rem;
    background-color: var(--background-wrapper);
    box-shadow: var(--shadow-wrapper);
    width: 100%;
    height: 36rem;
    z-index: 2;

    img {
        width: 90%;
        height: 90%;
        object-fit: cover;
        border-radius: 14px;
        box-shadow: var(--shadow-image);
    }
`;

export const ImageWrapperFirst = styled(ImageWrapper)`
    @media ${device.tablet} {
        position: absolute;
        top: 6rem;
        left: 0;
        width: 30rem;
        height: 40rem;
    }

    @media ${device.laptopL} {
        left: 16rem;
    }
`;

export const ImageWrapperSecond = styled(ImageWrapper)`
    @media ${device.tablet} {
        position: absolute;
        top: 52rem;
        left: 0;
        width: 30rem;
        height: 30rem;
    }

    @media ${device.tablet} {
        top: 56rem;
        left: 8rem;
    }
`;

export const ImageWrapperThird = styled(ImageWrapper)`
    @media ${device.tablet} {
            position: absolute;
            top: 22rem;
            right: 0;
            width: 30rem;
            height: 50rem;
    }

    @media ${device.tablet} {
            right: 10rem;
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: var(--background-wrapper);
    box-shadow: var(--shadow-wrapper);
    border-radius: 1.4rem;
    margin-top: 1.5rem;

    @media ${device.tablet} {
            margin-top: 0;
    }

    @media ${device.laptop} {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(15%);
            width: 38rem;
    }

    @media ${device.laptopL} {
            transform: translateX(-46%) translateY(0%);
            width: 47rem;
    }
`;

export const AboutText = styled.p`
    font-size: 2.4rem;
    padding: 1rem;
    width: 100%;
    height: 100%;

    @media ${device.laptopL} {
        font-size: 3rem;
    }
`;
