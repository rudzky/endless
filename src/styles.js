import styled, { keyframes } from 'styled-components';
import { Link } from "react-router-dom";

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

export const Container = styled.div`
  color: palevioletred;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  top: 0px;
  left: 0px;
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

export const Button = styled(Link)`
  border: none;
  background: #1DB954;
  border-radius: 30px;
  padding: 0.8em 0em;
  width: 100%;
  max-width: 10.5em;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.251));
  color: #FFF;
  font-size: 2.0em;
  font-family: CircularStd;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
`;

export const AcceptButton = styled.button`
  border: none;
  background: #1DB954;
  border-radius: 30px;
  padding: 0.8em 0em;
  width: 100%;
  max-width: 10.5em;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.251));
  color: #FFF;
  font-size: 2.0em;
  font-family: CircularStd;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
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

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Rocket = styled.img`
  position: absolute;
  top: 60px;
  right: 30px;
  transform: rotate(-80deg);
`;

export const House = styled.img`
  width: 60vw;
  position: absolute;
  bottom: 0px;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SL = styled(Link)`
  font-size: 1.8em;
  color: #ffffff7d;
  text-decoration: none;
  padding: 0.5em 0em;
  width: 100%;
  max-width: 7.5em;
  text-align: center;
`;

export const SuperDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const switchStyle = {
  position: "absolute",
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  padding: '25vh 0 25vh'
};

export const switchStyleTrack = {
  position: "absolute",
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '13.5vh 0px 30px',
};

export const SwitchDiv = {
  position: "absolute",
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
  paddingBottom: '5%'
};

export const ReadyStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

// flex-basis: 50%;
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: space-evenly;

export const FrontButtons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const opacityAnimation = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
 `;

export const ScrollDiv = styled.div`
  overflow-y: scroll; 
  height: 60%;
  // padding: 0px 20px;

  animation-name: ${opacityAnimation};
  animation-duration: 2s;

  min-width: 100%;
  margin-top: 5%;
`;

export const PlayerDiv = styled.div`
  height: 82vh;
  padding: 0px 20px;
  display: flex;
  align-items: center;
`;

export const Cover = styled.img`
  width: 85vw;
  box-shadow: 0px 3px 10px #00000066;
`;

export const ArtTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  width: 100%;
`;

export const Title = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: #FFF;
  text-align: center;
  letter-spacing: -1.23px;
  margin: 0px;
  white-space: nowrap;

  max-width: 100%;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;

export const Artist = styled.p`
  font-size: 0.8rem;
  font-weight: 300;
  color: #FFF;
  text-align: center;
  margin: 0px;
  margin-top: 3px;
`;

export const PlayButton = styled.button`

  &:focus {
    outline: none;
  }

  border: none;
  border-radius: 50%;
  background: #0474E4;
  box-shadow: 0px 1px 6px #0474E4;
  width: 50px;
  height: 50px;
  position: relative;
`;

// export const PlayIcon = styled.img`
//   position: absolute;
//   top: 14px;
//   left: 17px;
// `;

export const Controls = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const HeaderPlaylist = styled.p`
  font-size: 1em;
  letter-spacing: .03em;
  text-align: center;
  color: #FFFFFFB3;
  text-transform: uppercase;
  font-weight: 300;
  margin: 0px;
  margin-bottom: 3px;
`;

export const PlaylistName = styled.p`
  font-size: 1em;
  letter-spacing: .03em;
  text-align: center;
  color: #FFFFFFE6;
  font-weight: 500;
  margin: 0px;
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

export const BackToButton = styled(Link)`
  position: absolute;
  top: 5%;
  left: 10%;
`;

export const ControlBar = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-basis: 30%;
`;