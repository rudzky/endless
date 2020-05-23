import styled from 'styled-components';

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
  height: 82vh;
  padding: 0px 20px;
  display: flex;
  align-items: center;
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