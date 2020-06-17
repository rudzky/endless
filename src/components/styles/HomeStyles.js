import styled, { keyframes } from 'styled-components';
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

  @media ${device.tablet} {
    font-size: 2.6em;
    margin-top: 10px;
  }

  @media ${device.laptop} {
    width: 5%;
    font-size: 1.2rem;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media ${device.mobileL} {
    margin: 0;
    align-items: center;
  }
`;

export const FrontButtons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  // @media ${device.laptop} {
  //   flex-basis: 50%;
  // }
`;

export const Logo = styled.img`

  @media ${device.mobileS} {
    width: 80px;
  }

  @media ${device.mobileM} {
    width: 85px;
  } 

  @media ${device.tablet} {
    width: 120%;
  }

  @media ${device.laptop} {
    width: 100px;
  }
`;

export const H1 = styled.h1`
  color: #FFFFFF;

  @media ${device.mobileS} {
    font-weight: 600;
    font-size: 3.8rem;
    line-height: 3.8rem;
    margin: 0px;
    text-align: center;
    text-shadow: 0px 3px 6px #00000029;
    padding: 0px 20px;
  }

  @media ${device.mobileM} {
    font-size: 4.4rem;
    line-height: 4.4rem;
  }

  @media ${device.mobileL} {
    
  }
  @media ${device.tablet} {
    font-size: 7.4rem;
    line-height: 7.4rem;
  }
  @media ${device.laptop} {
    font-size: 8.4rem;
    line-height: 6.5rem;
  }

`;

export const H2 = styled.h2`

  color: #FFFFFF;
  text-transform: uppercase;
  letter-spacing: 0px;
  font-weight: 100;

  @media ${device.mobileS} {
    font-size: 1rem;
  }

  @media ${device.mobileM} {
  }

  @media ${device.mobileL} {

  }
  @media ${device.tablet} {
    font-size: 1.8rem;
  }
  @media ${device.laptop} {
    font-size: 1.4rem;
  }
`;

export const H3 = styled.h3`
  color: #FFFFFFCC;
  font-weight: 100;
  text-align: center;

  @media ${device.mobileS} {
    font-size: 1.2rem;
    width: 60%;
  }

  @media ${device.mobileM} {
  }

  @media ${device.mobileL} {

  }
  @media ${device.tablet} {
    font-size: 1.8rem;
    width: unset;
  }
  @media ${device.laptop} {
    font-size: 1.4rem;
    align-self: flex-end;
  }
`;

export const LogoFramer = styled(motion.div)`

  @media ${device.mobileS} {
    align-self: flex-start;
    margin-left: 10%;
  }

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

export const HomeContentWrapper = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  width: 100%;
  flex-basis: 90%;
  justify-content: space-around;

  @media ${device.laptop} {
    justify-content: center;
  }
`;


export const B1a = keyframes`
  0% { transform: scale(0.92) }
  50% { transform: scale(1.07) }
  100% { transform: scale(0.92) }
`;

export const B1 = styled.img`
  position: absolute;
  z-index: -10;
  top: 25vh;
  left: 40vw;
  animation: ${B1a} 6s infinite;

  @media ${device.mobileS}{
    top: 60vh;
    left: 47vw;
  }
  @media ${device.tablet} {
    top: 53vh;
    left: 21vw;
  }
`; 

export const B2 = styled.img`
  position: absolute;
  z-index: -10;
  top: 30vh;
  left: 38vw;
  animation: ${B1a} 9s infinite;

  @media ${device.mobileS}{
    top: 45vh;
    left: 19vw;
  }
  @media ${device.tablet} {
    top: 36vh;
    left: 34vw;
  }
`;

export const B3 = styled.img`
  position: absolute;
  z-index: -10;
  top: 38vh;
  left: 40vw;
  animation: ${B1a} 4.5s infinite;

  @media ${device.mobileS}{
    top: 14vh;
    left: 11vw;
  }    
  
  @media ${device.tablet} {
    top: 45vh;
    left: 49vw;
  }
`;
export const B4 = styled.img`
  position: absolute;
  z-index: -10;
  top: 24vh;
  left: 47vw;
  animation: ${B1a} 7.5s infinite;

  @media ${device.mobileS}{
    top: 24vh;
    left: 57vw;
  }

  @media ${device.tablet} {
    top: 24vh;
    left: 68vw;
  }
`;