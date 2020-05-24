import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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

export const SL = styled(Link)`
  font-family: CircularStd;
  font-size: 1.8em;
  color: #ffffffcc;
  text-decoration: none;
  padding: 0.5em 0em;
  width: 20%;
  text-align: center;

  @media ${device.laptop} {
    width: 5%;
    font-size: 2.8em;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10% 0% 0% 7%;
  @media ${device.mobileL} {
    margin: 10% 0% 0% 0%;
    align-items: center;
  }
`;

export const FrontButtons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media ${device.laptop} {
    flex-basis: 50%;
  }
`;

export const Logo = styled.img`
  width: 90%;

  @media ${device.laptop} {
    width: 10%;
  }

  @media ${device.tablet} {
    width: 120%;
  }
`;

export const H1 = styled.h1`
  margin: 0px;
  font-family: CircularStd;
  font-weight: 600;
  color: #FFF;
  font-size: 3.2rem;
  letter-spacing: -.03em;
  line-height: 2.8rem;
  text-align: left;
  font-size: 3.6rem;

  @media ${device.mobileS} {
    line-height: 2.8rem;
    font-size: 3rem;
  }

  @media ${device.mobileM} {
    font-size: 3.5rem;
  }

  @media ${device.mobileL} {
    line-height: 3.5rem;
    font-size: 3.6rem;
    text-align: center;
  }
  @media ${device.tablet} {
    font-size: 6.2rem;
    width: 100%;
    line-height: 6.5rem;
  }
`;

export const H2 = styled.h2`
  width: 70%;
  margin-top: 0;
  font-family: CircularStd;
  font-size: 2.5rem;
  line-height: 2.3rem;
  color: #F39A23;

  @media ${device.mobileS} {
    font-size: 1.8rem;
    line-height: 2rem;
    margin-top: 5px;
  }

  @media ${device.mobileM} {
    font-size: 2.2rem;
  }

  @media ${device.mobileL} {
    width: 78%;
    margin-top: 10px;
    font-size: 1.8rem;
    line-height: 2rem;
    text-align: center;
  }
  @media ${device.tablet} {
    width: 70%;
    margin-top: 20px;
    font-size: 4rem;
    line-height: 4rem;
  }
`;

export const LogoFramer = styled(motion.div)`
  @media ${device.laptop} {
    align-self: flex-start;
    margin-left: 10%;
    width: 80%;
    display: flex;
    justify-content: space-between;
  }
`;

export const ButtonFramer = styled(motion.div)`
  width: 80%; 
  display: flex; 
  justify-content: center;
  margin: 15px 0px;
  border-radius: 30px;

  @media ${device.laptop} {
    width: 50%;
  }
`;

export const HeaderLogo = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  width: 100%;

  @media ${device.laptop} {
    flex-basis: 50%;
  }
`;