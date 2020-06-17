import styled, { keyframes } from 'styled-components';
import { motion } from "framer-motion";
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

export const GradientWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    // background-image: linear-gradient(-15deg, black, transparent);
    background-image: linear-gradient(-19deg,black 65%,rgba(0,0,0,0.7) 80%,transparent);
`; 
//div
export const SwitchStyle = styled(motion.div)`
    will-change: opacity, top;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 7vh 0px;
`;

export const Button = styled(Link)`

  width: 275px;
  text-decoration: none;
  color: #000;
  font-family: CircularStd;
  font-weight: 500;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FFF;
  border-radius: 40px;
  padding: 20px 10px;
  margin-bottom: 15px;
  transition: transform .1s ease-in-out;

  @media ${device.mobileL} {
    width: 60%;
  }
  @media ${device.tablet} {
    font-size: 1.8rem;
    width: 305px;
  }
  @media ${device.laptop} {
    width: 285px;
    font-size: 1.4rem;
    margin-top: 20px;
  }
  @media ${device.laptopL} {
    width: 15%;
  }
  &:hover {
    transform: scale(0.9);
  }
`;

export const opacityAnimation = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;
//TO BYLO WCZESNIEJ _ WERSJA DZIALAJACA XD
// export const ScrollDiv = styled.div`
//   overflow-y: scroll; 
//   height: 60%;
//   animation-name: ${opacityAnimation};
//   animation-duration: 2s;
//   min-width: 100%;
//   margin-top: 5%;
// `;

export const ScrollDiv = styled(motion.div)`
  overflow-y: scroll; 
  height: 80%;
  // animation-name: ${opacityAnimation};
  // animation-duration: 2s;
  width: 100%;
  margin-top: 10px;

  @media ${device.laptop} {
    width: 100%;
    padding: 0px 15%;
  }
`;

export const SwitchDiv = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  //byl justi na end
  justify-content: start;
  // padding-bottom: 5%;
`;

export const RandButton = styled.button`
  border: none;
  background: #FFF;
  border-radius: 30px;
  padding: 0.8em 0em;
  width: 100%;
  max-width: 9.5em;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.251));
  color: #000;
  font-size: 2.0em;
  font-family: CircularStd;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  margin: 20px 0px;
`;

export const CategoriesHeader = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0% 5%;
`;
//link był xd
export const BackToButton = styled(Link)`
  width: 25px;
`;