import styled, { keyframes } from 'styled-components';

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

export const ani = keyframes`
 0% { left: 0%; top: 0%; }
 25% { left: 40%; top: 67%; }
 50% { left: 50%; top: 10%; transform: scale(0.1) }
 75% { left: 17%; top: 82%; }
 100% { left: 0%; top: 0%; transform: scale(1) }
 `;

 export const ani2 = keyframes`
  0% { left: 0%; top: 0%; }
  25% { left: 20%; top: 77%; transform: scale(0.1)}
  50% { left: -20%; top: 60%; }
  75% { left: 7%; top: 8%; }
  100% { left: 0%; top: 0%; transform: scale(1)}
 `;

 export const ani3 = keyframes`
  0% { left: 0%; top: 0%; }
  25% { left: 50%; top: 50%; }
  50% { left: 22%; top: 76%; }
  75% { left: 74%; top: 43%; transform: scale(0.1)}
  100% { left: 0%; top: 0%; transform: scale(1)}
 `;

 export const ani4 = keyframes`
  0% { left: 0%;
    top: 0%; }
  14% { left: -80%;
    top: -10%; }
  29% { left: 20%;
    top: -22%; }
  39% { left: 33%;
    top: 7%; }
  55% { left: 14%;
    top: 31%;
 }
  68% { left: -16%;
    top: 57%; transform: scale(0.1)}
  79% { left: -66%;
    top: 47%; }
  88% {     left: -36%;
    top: 33%; }
  100% { left: 0%;
    top: 0%; transform: scale(1)}
 `;



export const GradientBall = styled.div`
  will-change: left, top;  
  transition: background-color 2s ease-in-out;
  position:absolute;
  left: 0%;
  top: 0%;
  
  width: 48vh;
  height: 48vh;
  background: #1a01f8eb;
  border-radius: 50%;

  animation-name: ${ani};
  animation-duration: 15s;
  animation-iteration-count: infinite;
`;


export const GradientBall2 = styled.div`
  will-change: left, top;
  transition: background-color 2s ease-in-out;
  position:absolute;
  left: 70%;
   top: 99%;
  
  width: 43vh;
  height: 43vh;

  background: #1a01f8e3;
  border-radius: 50%;

  animation-name: ${ani2};
  animation-duration: 18s;
  animation-iteration-count: infinite;
`;

export const GradientBall3 = styled.div`
  will-change: left, top;
  transition: background-color 2s ease-in-out;
  position:absolute;
  left: 99%; top: 5%;
  
  width: 30vh;
  height: 30vh;
  background: #1a01f8d1;
    border-radius: 50%;

  animation-name: ${ani3};
  animation-duration: 20s;
  animation-iteration-count: infinite;
`;

export const GradientBall4 = styled.div`
  will-change: left, top;
  transition: background-color 2s ease-in-out;
  position:absolute;
  left: 20%; top: 50%;
  
  width: 35vh;
  height: 35vh;
  background: #1a01f8f0;
  border-radius: 50%;
  animation-name: ${ani4};
  animation-duration: 20s;
  animation-iteration-count: infinite;
`;
