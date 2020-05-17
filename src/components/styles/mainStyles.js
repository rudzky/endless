import styled, { keyframes } from 'styled-components';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

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
    justify-content: space-evenly;
    padding: 25vh 0 25vh;
`;

export const Button = styled(Link)`
  border: none;
  background: #1DB954;
  border-radius: 30px;
  // padding: 0.8em 0em;
  // width: 100%;
  // max-width: 10.5em;
  width: 100%;
  max-width: 10.5em;
  min-height: 2.8em;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.251));
  color: #FFF;
  font-size: 2.0em;
  font-family: CircularStd;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
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