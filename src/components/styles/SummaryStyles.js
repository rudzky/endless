import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';

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

export const AnswerBlock = styled.div`
    display: flex;
`;

export const List = styled.ul`
    padding: 0px;
    margin: 0px;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 13%;
}
`;

export const ColorizedDiv = styled.div`
    width: 50vw;
    height: 50vw;
    background: ${props => props.bg};
    box-shadow: 0px 0px 20px ${props => props.bg};
    padding: 5px;
    transition: box-shadow 1s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${device.laptop} {
      width: 30vw;
      height: 30vw;
    }
`;

export const H1 = styled.h1`
    font-size: 2rem;
    margin-top: 0;

    @media ${device.tablet} {
      font-size: 3rem;
    }

    @media ${device.desktop} {
      font-size: 5rem;
    }
`;

export const H2 = styled.h2`
    font-size: 2.2rem;
    margin: 0px;
    text-align: left;
    text-transform: uppercase;
    line-height: 2rem;
`;



export const AnswerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.col};
  width: 30px;
  height: 30px;
  padding: 20px;
  border-radius: 3px;

  @media ${device.tablet} {
    padding: 30px;
  }
  @media ${device.laptop} {
    padding: 40px;
  }
  @media ${device.desktop} {
    padding: 60px;
  }
`;

export const AnswersWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-evenly;

  @media ${device.laptop} {
    width: 70%;
    justify-content: space-between;
  }
`;

export const H3 = styled.h3`
  font-family: CircularStd;
  margin: 0px;
  font-weight: 100;
  font-size: 1rem;
  margin-top: 20px;

  @media ${device.mobileM} {
    font-size: 1.2rem;
  }

  @media ${device.tablet} {
    font-size: 1.7rem;
    margin-top: 40px;
  }

  @media ${device.desktop} {
    font-size: 2.5rem;
  }
`;

export const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > a:last-child{
    margin-bottom: 0px;
  }

  @media ${device.tablet} {
    width: 90%;
    flex-direction: row;
    justify-content: space-evenly;
    & > a {
      margin: 0px;
    }
  }

  @media ${device.laptop} {
    width: 70%;
    justify-content: flex-start;

    & > a {
      font-size: 1.1rem;
      width: 215px;
      padding: 15px 10px;
    }

    & > a:last-child{
      margin-left: 10px;
    }
  }

  @media ${device.desktop} {
    & > a {
      font-size: 1.8rem;
      width: 285px;
      padding: 25px 10px;
    }
    & > a:last-child{
      margin-left: 20px;
    }
  }
  
`;

export const TestDiv = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  // padding-bottom: 5%;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

export const TestHeader = styled.div`
    display: flex;
    // height: 25%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // padding-top: 10%;

    @media ${device.laptop} {
      // height: 35%;
      flex-direction: column;
      // justify-content: space-evenly;
      align-items: flex-start;

      & > h1, h3 {
        margin: 0px;
      }
    }
`;

export const LapWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media ${device.laptop} {
    width: 50vw;
    align-items: flex-start;
  }
`;

export const Button = styled(Link)`

  width: 255px;
  text-decoration: none;
  color: #FFF;
  font-family: CircularStd;
  font-weight: 500;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
//   background: #FFF;
    border: 1px solid white;
  border-radius: 40px;
  padding: 15px 10px;
  margin-bottom: 15px;
  transition: transform .1s ease-in-out;

  @media ${device.mobileM} {
    width: 275px;
    font-size: 1.2rem;
    padding: 19px 10px;
  }

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

  @media ${device.desktop} {
    font-size: 2.4rem;
    padding: 25px 10px;
    border-radius: 55px;
  }

  &:hover {
    transform: scale(0.9);
  }
`;