import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TestDiv = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 5%;
`;

export const TestHeader = styled.div`
    display: flex;
    height: 30%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // padding-top: 10%;
`;

export const TestContent = styled.div`
  display: flex;
  height: 70%;
  width: 100%;
  flex-direction: column;
  // padding-top: 10%;
`;

export const TestList = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 10%;
  padding-left: 10%;
  justify-content: space-evenly;
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
`;

export const TestH5 = styled.h5`
  margin: 0px;
  color: white;
  text-align: left;
  font-size: 0.9rem;
  max-width: 90%;
  text-overflow: ellipsis;
`;

export const TestH6 = styled.h6`
  margin: 0px;
  color: #FFFFFFAA;
  text-align: left;
  font-size: 0.7rem;
  font-weight: 300;
  max-width: 90%;
  text-overflow: ellipsis;
`;

export const TestListImg = styled.img`
  width: 22%;
`;

export const TestListDescribe = styled.div`
  width: 78%;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

export const TestListItem = styled.li`
  width: 90%;
  display: flex;
  margin-bottom: 10px;
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
  margin-right: 10px;
`;