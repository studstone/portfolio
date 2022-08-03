import styled from 'styled-components';


export const SectionAbout = styled.section`
    padding: 4rem 0;
    background: linear-gradient(130.68deg, #414141 0%, #2d2d2d 100.52%);
    color: var(--color-text);
    font-size: 2rem;
`;

export const Title = styled.h1`
    margin-bottom: 1.5rem;
`;

export const CircleWhite = styled.div`
    
`;

export const CircleBlue = styled.div`
    
`;

export const CircleYellow = styled.div`
    
`;

export const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1.4rem;

    img {
        width: 90%;
        height: 90%;
        object-fit: cover;
        border-radius: 14px;
        box-shadow: var(--shadow-image);
    }
`;

export const ImageWrapperFirst = styled(ImageWrapper)`
    background-color: var(--background-wrapper);
    box-shadow: var(--shadow-wrapper);
    width: 100%;
    height: 36rem;
`;

export const ImageWrapperSecond = styled(ImageWrapper)`

`;

export const ImageWrapperThird = styled(ImageWrapper)`

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
`;

export const AboutText = styled.p`
    padding: 1rem;
`;
