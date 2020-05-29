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

export const PlayerDiv = styled.div`
  height: 100%;
  width: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
`;

// export const AcceptButton = styled.button`
//   border: none;
//   background: #1DB954;
//   border-radius: 30px;
//   padding: 0.8em 0em;
//   width: 100%;
//   max-width: 10.5em;
//   filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.251));
//   color: #FFF;
//   font-size: 2.0em;
//   font-family: CircularStd;
//   font-weight: 400;
//   text-align: center;
//   text-decoration: none;
// `;

export const Wrapper = styled.div`
  height: 100%;
`;

export const FramerWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

export const MiddleWrapper = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AcceptButton = styled.button`
  border: 2px solid #F39A23;
  background: transparent;
  border-radius: 30px;
  width: 65%;
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
  margin: 15px 0px;
  transition: transform .1s ease-in-out;

  @media ${device.mobileL} {
    width: 60%;
  }
  @media ${device.tablet} {
    width: 50%;
  }
  @media ${device.laptop} {
    width: 20%;
  }
  @media ${device.laptopL} {
    width: 15%;
  }
  &:hover {
    transform: scale(0.9);
  }
`;

export const ReadyH1 = styled.h1`
  margin-bottom: 20px;
`;