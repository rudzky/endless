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
    flex-basis: 35%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const TestContent = styled.div`
  display: flex;
  flex-basis: 65%;
  width: 100%;
  flex-direction: column;
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
  padding-left: 10%;
`;