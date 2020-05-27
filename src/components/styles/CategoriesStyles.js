import styled from 'styled-components';
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

export const H1 = styled.h1`
    font-size: 1.2rem;
    line-height: 1.2rem;
    margin-bottom: 5px;
`;

export const H5 = styled.h5`
    font-family: CircularStd;
    color: rgb(255, 255, 255);
    font-size: .9rem;
    margin-bottom: 5px;
    letter-spacing: 0px;
`;

export const UL = styled.ul`
    padding: 0px;
    margin: 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    list-style-type: none;
`;

export const LI = styled.li`
    width: 42%;
    height: 40%;
    margin-bottom: 25px;
    position: relative;
    display: flex;
    justify-content: center;

    @media ${device.mobileL} {
        width: 30%;
    }

    @media ${device.laptop} {
        width: 22%;
    }
`;

export const PlaylistLink = styled(Link)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    width: 100%;
`;

export const P = styled.p`
    font-weight: 600;
    color: white;
    font-size: 0.9rem;
    margin: 10px 0px 0px;
`;