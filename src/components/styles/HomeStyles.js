import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SL = styled(Link)`
  font-size: 1.8em;
  color: #ffffff7d;
  text-decoration: none;
  padding: 0.5em 0em;
  width: 100%;
  max-width: 7.5em;
  text-align: center;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FrontButtons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;