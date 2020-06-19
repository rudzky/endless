import styled, { keyframes } from 'styled-components';
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

export const Container = styled.div`
  color: palevioletred;
  width: 100%; //100vw - 100vh
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  top: 0px;
  left: 0px;
`;

export const InfoWrap = styled(motion.div)`
    will-change: opacity, top;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    overflow-y: scroll;

    background: #4000F5;
`;

export const H1 = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  line-height: 3rem;
  margin: 20px 0px;
  @media ${device.mobileM} {
    font-size: 4rem;
    line-height: 4rem;
  }
`;

export const P = styled.p`
  font-weight: 100;
  font-size: 1.3rem;
  text-align: justify;
  color: rgba(255,255,255,.8);
  margin: 0px;
`;

export const H2 = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  line-height: 3rem;
  margin-top: 50px;
  margin-bottom: 0px;
  font-weight: 500;
`;
