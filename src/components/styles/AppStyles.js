import styled, { keyframes } from 'styled-components';

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
 25% { left: 60%; top: 37%; }
 50% { left: 47%; top: 69%; }
 75% { left: 77%; top: 22%; }
 100% { left: 0%; top: 0%; }
 `;

 export const ani2 = keyframes`
  0% { left: 70%; top: 99%; }
  25% { left: 50%; top: 50%; }
  50% { left: 20%; top: 69%; }
  75% { left: 7%; top: 8%; }
  100% { left: 70%; top: 99%; }
 `;

 export const ani3 = keyframes`
  0% { left: 99%; top: 5%; }
  25% { left: 50%; top: 50%; }
  50% { left: 22%; top: 76%; }
  75% { left: 74%; top: 43%; }
  100% { left: 99%; top: 5%; }
 `;

 export const ani4 = keyframes`
  0% { left: -80%;
    top: 30%; }
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
    top: 57%; }
  79% { left: -66%;
    top: 47%; }
  88% {     left: -36%;
    top: 33%; }
  100% { left: -80%;
    top: 30%; }
 `;



export const GradientBall = styled.div`
  position:absolute;
  left: 0%;
   top: 0%;
  
  width: 125px;
  height: 125px;
  background: #00000021;
    border-radius: 50%;

  animation-name: ${ani};
  animation-duration: 15s;
  animation-iteration-count: infinite;
`;

export const GradientBall2 = styled.div`
  position:absolute;
  left: 70%;
   top: 99%;
  
  width: 225px;
  height: 225px;

  background: #00000021;
  border-radius: 50%;

  animation-name: ${ani2};
  animation-duration: 18s;
  animation-iteration-count: infinite;
`;

export const GradientBall3 = styled.div`
  position:absolute;
  left: 99%; top: 5%;
  
  width: 325px;
  height: 325px;
  background: #00000021;
    border-radius: 50%;

  animation-name: ${ani3};
  animation-duration: 20s;
  animation-iteration-count: infinite;
`;

export const GradientBall4 = styled.div`
  position:absolute;
  left: 20%; top: 50%;
  
  width: 555px;
  height: 555px;
  background: #00000021;
  border-radius: 50%;
  animation-name: ${ani4};
  animation-duration: 20s;
  animation-iteration-count: infinite;
`;
