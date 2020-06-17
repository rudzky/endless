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
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 15vh;
`;

export const AcceptButton = styled.button`
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
  border: none;
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

export const ReadyH1 = styled.h1`
  font-size: 3rem;
  margin-bottom: 40px;

  @media ${device.tablet} {
    font-size: 5rem;
  }

  @media ${device.laptop} {
    font-size: 7.4rem;
  }
`;