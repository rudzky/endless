import styled from 'styled-components';
import {motion} from 'framer-motion';

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  };
export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};
  
export const ErrorWrap = styled(motion.div)`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
    padding: 5% 0px;
`;

export const H1 = styled.h1`
    font-size: 3rem;

    @media ${device.tablet} {
        font-size: 6rem;
    }
    @media ${device.desktop} {
        font-size: 9rem;
    }
`;

export const H3 = styled.h3`
    font-size: 1.2rem;
    font-weight: 100;
    text-align: center;
    padding: 0px 20px;

    @media ${device.tablet} {
        font-size: 1.9rem;
    }
`;