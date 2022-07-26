import React from 'react';
import styled from 'styled-components';
import 'animate.css';
import device from '../StyledComponents/Breakpoint';

const LogoSvg = styled.svg`
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

const LogoHeadBack = styled.path`
    animation-delay: 0.9s;
`;

const LogoHeadEyes = styled.path`
    animation-delay: 0.7s;
`;

const LogoHeadNose = styled.path`
    animation-delay: 0.5s;
`;

const LogoHeadChin = styled.path`
    animation-delay: 0.2s;
`;

const LogoHeadNeck = styled.path`
    animation-delay: 0s;
`;

const LogoTitle = styled.h1`
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

const Logo = () => (
    <>
        <LogoSvg viewBox="0 0 25 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <LogoHeadBack className='animate__animated animate__fadeInDown' d="M22.5391 0.429809C22.4071 0.786435
        22.3694 1.38996
        22.3034 4.03264C22.2657
        5.7792 22.2091 7.32458 22.1809 7.46174C22.1526 7.60805 22.0866 8.80594 22.03 10.141C21.898
        13.5061 21.6717 15.655 21.0306 19.9345C20.7855 21.5165 20.71 22.3303
        20.7289 22.9887L20.7572 23.894L21.436 24.0586L22.1054 24.2323L22.7749 23.8117C23.1331
        23.5831 23.5197 23.2813 23.6234 23.1441C24.0005 22.6229 24.3494 21.0318
        24.6134 18.5537C24.9434 15.527 25 14.073 25 9.31802C25 4.28868 24.9057 2.79817 24.5097
        1.42653C24.34 0.823012 24.0948 0.594406 23.2368 0.228635L22.7089
        2.90964e-05L22.5391 0.429809Z" fill="#00C4F0" />
            <LogoHeadEyes className='animate__animated animate__fadeInDown' d="M13.0731 4.60873C11.9511 4.77333 10.8669
        5.02937 9.39605 5.50487C7.40667 6.14497 6.94467
        6.37358 6.47326 6.96795C6.2564 7.25142 6.02069 7.6812 5.94527 7.91895C5.65299 8.83338 5.8227 10.4245
        6.36954 11.7504L6.53925 12.1802L7.10496 11.6315C7.83094
        10.9274 8.46264 9.69294 9.07549 7.80922C9.32063 7.05025 9.56577 6.40101 9.62234 6.36443C9.67891
        6.32785 10.2163 6.30957 10.8103 6.31871C11.838 6.34614 11.9323
        6.36443 12.6111 6.67534C13.6011 7.14169 14.016 7.52575 14.5345 8.49504C14.8645 9.126 15.0154
        9.31802 15.1568 9.31802C15.2699 9.31802 15.7602 9.24487 16.2599
        9.14428C16.7691 9.05284 17.9287 8.83338 18.8527 8.66878C19.7767 8.50419 20.5781 8.33959 20.6347
        8.30301C20.927 8.12927 19.5881 6.57475 18.4284 5.74262C16.8068
        4.57216 15.3831 4.2704 13.0731 4.60873Z" fill="#00C4F0" />
            <LogoHeadNose className='animate__animated animate__fadeInDown' d="M2.90927 17.9411C2.20214 18.0417
        2.09843 18.0782 1.91929 18.3251C1.48559 18.9012
        1.76844 20.1997 2.56042 21.361C2.73956 21.6262 2.89041 21.8731 2.89041 21.9188C2.89041
        21.9645 2.99413 22.0926 3.12612 22.2114L3.36183 22.4218L4.81381
        22.312C5.61522 22.2572 6.76548 22.12 7.37833 22.0194C8.0006 21.9188 8.80201 21.7999
        9.16029 21.7542C9.97113 21.6445 11.3288 21.1141 11.6871 20.7575C11.9888
        20.474 12.1585 19.9162 12.0359 19.6053C11.9134 19.2853 9.94285 18.5263 8.18917 18.1331C7.35004
        17.9319 6.89748 17.8953 5.43608 17.8679C4.41781 17.8496 3.36183
        17.8771 2.90927 17.9411Z" fill="#00C4F0" />
            <LogoHeadChin className='animate__animated animate__fadeInDown' d="M3.39013 24.406C2.07016 24.4975 2.02302
        24.5158 1.77788 25.0004C1.4196 25.7228
        1.36303 26.1617 1.4856 27.3231C1.57988 28.2283 1.57045 28.5575 1.43846 29.5268C1.30646 30.5236
        0.872754 32.4621 0.674758 32.9285C0.580474 33.1571 0.769042 33.1388
        1.00475 32.8919C1.24989 32.6267 1.51388 31.9318 1.90988 30.487C2.32473 28.9599 2.71129 28.2009
        3.24871 27.8351C3.49385 27.6705 4.26697 27.3688 5.13438
        27.0945C6.5675 26.6464 6.61464 26.6281 6.6995 26.3446C6.74664 26.18 6.76549 26.0337 6.74664
        26.0154C6.60521 25.8783 4.95524 25.6588 3.6447 25.6039C2.25873
        25.5491 2.1173 25.5308 2.37187 25.4211C3.06957 25.1376 4.03126 25.037 6.72778 24.9638C8.24575
        24.9273 9.50915 24.8724 9.53744 24.8541C9.61287 24.7718 7.67062
        24.4975 6.42607 24.406C5.07781 24.3146 4.79496 24.3146 3.39013 24.406Z" fill="#00C4F0" />
            <LogoHeadNeck className='animate__animated animate__fadeInDown' d="M19.0601 31.3191C16.3165 33.1296 12.7148
        34.5196 8.3589 35.4523C7.08607 35.7266 6.66179
        35.7906 4.35184 36.0924C3.36186 36.2204 3.13558 36.2753 3.16386 36.385C3.18272 36.4581 3.30529
        36.8513 3.42786 37.2445C3.55043 37.6469 3.69185 38.2413
        3.74842 38.5796L3.85213 39.1831L3.36186 39.997C2.80558 40.948 1.98531 42.5665 1.50447
        43.6912C0.863335 45.1909 -0.0795031 47.8885 0.00535231 47.9799C0.146778
        48.1079 0.684196 47.6233 1.57989 46.5625C2.80558 45.1086 6.11495 41.8624 7.69891 40.5548C9.79202
        38.8265 12.7148 36.641 15.2888 34.8762C16.9953 33.7057 18.353
        32.6358 19.5598 31.502C20.4367 30.6698 20.6441 30.4321 20.4555 30.4504C20.4084 30.4504 19.7861
        30.8436 19.0601 31.3191Z" fill="#00C4F0" />
        </LogoSvg>
        <LogoTitle>Studstone</LogoTitle>
    </>
);

export default Logo;
