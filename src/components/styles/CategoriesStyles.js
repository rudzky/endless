import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Image } from "react-image-and-background-image-fade";

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
    line-height: 1rem;
    margin: 0px;

    @media ${device.mobileS} {
        font-size: 1.3rem;
    }

    @media ${device.mobileM} {
        font-size: 1.6rem
    }
    
    @media ${device.tablet} {
        font-size: 2.6rem;
    }

    @media ${device.laptop} {
        font-size: 2.2rem;
    }

    @media ${device.desktop} {
        font-size: 3.2rem;
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

    @media ${device.desktop} {
        font-size: 2rem;
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

    @media ${device.tablet} {
        font-size: 1.2rem;
    }

    @media ${device.desktop} {
        font-size: 1.5rem;
        margin: 30px 0px 30px;
    }
`;

export const RollImg = styled.img`
    &:hover {
        cursor: pointer;
        transform: rotate(360deg);
    }
    transition: all .4s ease-in-out;

    @media ${device.desktop} {
        width: 50px;
    }
`;  

export const ImageLoader = styled(Image)`
    background-size: cover;
    background-position: center top;
    transition: filter .3s ease-in-out;

    &:hover {
        filter: brightness(0.5);
    }
`;

export const BackPara = styled.p`
    font-size: 1rem;

    &:hover {
        cursor: pointer;
    }

    @media ${device.desktop} {
        font-size: 1.8rem;
    }
`;

export const Loading = styled.h1`
    z-index: 0;
    font-size: 1.4rem;

    @media ${device.tablet} {
        font-size: 1.6rem;
    }
    @media ${device.laptop} {
        font-size: 1.8rem;
    }
    @media ${device.desktop} {
        font-size: 2rem;
    }
`;