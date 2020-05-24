import React from 'react';
import '../App.css';
import { withRouter } from 'react-router-dom';
//import { SL, StyledDiv, FrontButtons, Logo } from '../styles';
import { useMediaQuery } from 'react-responsive';
//stylesy
import { SwitchStyle, Button, SwitchDiv } from './styles/mainStyles'; 
import { SL, StyledDiv, FrontButtons, Logo, H1, H2, LogoFramer, HeaderLogo, ButtonFramer } from './styles/HomeStyles';

import { motion } from "framer-motion";
import logo from '../img/logo-end.svg';


const Home = () => {

    const isLaptop = useMediaQuery({
      query: '(min-width: 1024px)'
    });

    return (

      <SwitchStyle
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
        transition={{ duration: 0.3 }}
      >
        <HeaderLogo>
          <LogoFramer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Logo src={logo}/>

            { isLaptop && (
              <SL to={{
                pathname: "/about",
              }}
              >
                Info
              </SL>
            )}

          </LogoFramer>

            <StyledDiv>
              <H1>Pretty good music app</H1>
              <H2>that will make You fun!</H2>
            </StyledDiv>
        </HeaderLogo>
         
      <FrontButtons>
        {/* <ButtonFramer
          whileTap={{ scale: 0.95 }} 
        > */}
          <Button to='/categories'>Get Started</Button>
        {/* </ButtonFramer> */}

        { isLaptop === false && (
            <SL to={{
              pathname: "/about",
            }}
            >
              Info
            </SL>
        )}
    
      </FrontButtons>

    </SwitchStyle>
    
    );
}
export default withRouter(Home);