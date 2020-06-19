import styled from 'styled-components';
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

export const TestDiv = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  // padding-bottom: 5%;
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
      height: 35%;
      flex-direction: row;
      justify-content: space-evenly;
    }
`;

export const TestContent = styled.div`
  display: flex;
  height: 75%;
  width: 100%;
  flex-direction: column;
  // padding-top: 10%;

  @media ${device.laptop} {
    height: 65%;
  }
`;

export const TestList = styled.ul`
  list-style-type: none;
  padding: 10px;
  margin: 0px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  
  @media ${device.tablet} {
    padding: 30px;
  }

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

export const TestH3 = styled.h3`
  margin-bottom: 3%;
  text-align: left;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  letter-spacing: 0px;
  margin-top: 0px
`;

export const H3 = styled.h3`
  font-family: CircularStd;
  margin: 0px;
  font-weight: 100;
  font-size: 1rem;
  // margin-top: 20px;

  @media ${device.tablet} {
    font-size: 1.4rem;
  }

  @media ${device.desktop} {
    font-size: 2rem;
  }
`;

export const TestH5 = styled.h5`
  margin: 0px;
  color: white;
  text-align: left;
  font-size: 0.9rem;
  max-width: 90%;
  text-overflow: ellipsis;
  overflow-x: hidden;

  @media ${device.mobileM} {
    font-size: 1.1rem;
  }
  @media ${device.mobileL} {
    font-size: 1.2rem;
  }
  @media ${device.tablet} {
    font-size: 1.6rem;
  }
  @media ${device.laptop} {
    font-size: 1rem;
  }
  @media ${device.laptopL} {
    font-size: 1.2rem;
  }

  @media ${device.desktop} {
    font-size: 2.2rem;
  }
`;

export const TestH6 = styled.h6`
  margin: 0px;
  color: #FFFFFFAA;
  text-align: left;
  font-size: 0.7rem;
  font-weight: 300;
  max-width: 90%;
  text-overflow: ellipsis;

  @media ${device.tablet} {
    font-size: 1.3rem;
  }
  @media ${device.laptop} {
    font-size: .9rem;
  }
  @media ${device.laptopL} {
    font-size: 1rem;
  }
  @media ${device.desktop} {
    font-size: 1.5rem;
  }
`;

export const TestListImg = styled.img`
  @media ${device.mobileS} {
    width: 100%;
    // height: 50px;
  }
  // @media ${device.mobileM} {
  //   width: 65px;
  //   height: 65px;
  // }
`;

export const TestListDescribe = styled.div`
  width: 66%;
  display: flex;
  flex-direction: column;
  // padding-left: 15px;
  // padding-top: 10px;
  white-space: nowrap;

  @media ${device.tablet} {
    width: 75%;
  }

  @media ${device.laptop} {
    align-items: flex-start;
    padding: 10px;
    width: 100%;
    border-radius: 0px 0px 10px 10px;
    background: rgba(255,255,255,.1);
  }

  @media ${device.laptopL} {
    padding: 15px;
  }

  @media ${device.desktop} {
    padding: 20px;
  }
`;

export const TestListItem = styled.li`
  width: 100%;
  display: flex;
  // margin-bottom: 10px;
  // flex-basis: 18%;
  

  @media ${device.laptop} {
    height: 80%;
    max-width: 18%;
  }
`;

// export const Choosen = styled.p`
//   margin: 0px;
//   color: #FFFFFFAA;
//   align-self: center;
// `;

export const Choosen = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  align-self: center;
  // margin-right: 10px;
`;

export const TrackNumber = styled.h1`
  font-size: 1.8rem;
  margin: 0px;
  margin-bottom: 5px;
  text-align: center;

  @media ${device.mobileM} {
    font-size: 2.2rem;
  }

  @media ${device.tablet} {
    font-size: 3.2rem;
  }
  @media ${device.laptop} {
    text-align: left;
  }
  @media ${device.desktop} {
    font-size: 4.2rem;
  }
`;

export const Progress = styled.progress`
  width: 90%;
`;

export const ItemDiv = styled(motion.div)`
  display: flex;
  background: rgba(255,255,255,0.1);
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  justify-content: space-between;
  transition: all .3 ease-in-out;

  &:hover {
    background: rgba(255,255,255,0.15);
  }

  @media ${device.laptop} {
    flex-direction: column;
    align-items: center;
    justify-content: unset;
    background: transparent;

    &:hover {
      background: transparent;
    }
  }
`;

export const ProgressDiv = styled(motion.div)`
  width: 90%;
  display: flex;
  justify-content: center;

  @media ${device.laptop} {
    width: 50%;
  }
`;

export const Img = styled.img`

  max-height: 10vh;
  width: auto;

  // width: 20%;

  // background: url(${props => props.src});
  // align-self: center;
  // margin-left: 5px;
  // background-position: center center;
  // background-size: contain;

  // @media ${device.mobileS} {
  //   width: 50px;
  //   height: 50px;
  // }
  // @media ${device.mobileM} {
  //   max-height: 75px;
  // }
  // @media ${device.tablet} {
  //   width: 90px;
  //   height: 90px;
  // }
  @media ${device.laptop} {
    max-height: unset;
    width: 100%;
  }
`;

export const ImgWrap = styled.div`
  flex-basis: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CheckedWrapper = styled.div`
  width: 5%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

  @media ${device.laptop} {
    width: 50%;
    height: 40px;
    flex-direction: row;
  }
`;

export const HeadWrap = styled.div`
  @media ${device.laptop} {
    width: 30%;
  }
`;