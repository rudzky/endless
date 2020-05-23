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
  border: 2px solid #F39A23;
  background: #000;
  border-radius: 30px;
  width: 100%;
  min-height: 2.8em;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-filter: drop-shadow(0px 3px 6px rgba(0,0,0,0.251));
  filter: drop-shadow(0px 3px 6px rgba(0,0,0,0.251));
  color: #F39A23;
  font-size: 2.0em;
  font-family: CircularStd;
  font-weight: 400;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;

  @media ${device.mobileL} {
    width: 60%;
  }
  @media ${device.tablet} {
    width: 50%;
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
  height: 60%;
  // animation-name: ${opacityAnimation};
  // animation-duration: 2s;
  min-width: 100%;
  margin-top: 5%;
`;

export const SwitchDiv = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
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
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10%;
`;
//link był xd
export const BackToButton = styled(Link)`
  position: absolute;
  top: 5%;
  left: 10%;
`;