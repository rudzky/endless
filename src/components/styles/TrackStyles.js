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

export const Cover = styled(motion.div)`
  display: flex;
  justify-content: center;
  width: 90%;

  @media ${device.laptop} {
    width: 40%;
  }
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

export const Controls = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 30px;
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

export const ControlBar = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-basis: 30%;
`;

export const TrackStyle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  opacity: 1;
  transform: none;
  padding: 5% 0px;
`;