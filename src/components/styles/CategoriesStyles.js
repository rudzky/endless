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
    font-size: 1.6rem;
    line-height: 1rem;
    margin: 0px;
    
    @media ${device.tablet} {
        font-size: 2.6rem;
    }

    @media ${device.laptop} {
        font-size: 2.2rem;
    }
`;

export const H5 = styled.h5`
    font-family: CircularStd;
    color: rgb(255, 255, 255);
    font-weight: 100;
    font-size: .9rem;
    margin: 0px;
    letter-spacing: 0px;

    @media ${device.tablet} {
        font-size: 1.5rem;
    }

    @media ${device.laptop} {
        font-size: 1rem;
    }
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

export const RollImg = styled.img`
    &:hover {
        cursor: pointer;
        transform: rotate(360deg);
    }
    transition: all .4s ease-in-out;
`;  