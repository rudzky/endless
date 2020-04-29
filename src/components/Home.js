import React from 'react';
import '../App.css';

import { Button, SL, House, Rocket, StyledDiv, SuperDiv, switchStyle, FrontButtons, Logo } from '../styles';

import { pageVariants, pageTransition } from '../App';
import { motion } from "framer-motion";

import logo from '../img/logo.svg';


const Home = () => {

    return (

      <motion.div
          style={switchStyle}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
      >

          <Logo src={logo}/>

          <StyledDiv>
            <h1>What's up <br />You meloman?</h1>
            <h3>Play music game, feel cool and discover some banger sounds</h3>
          </StyledDiv>
         
          <FrontButtons>
            <Button to='/categories' style={{ margin: '15px 0px' }}>Get Started</Button>
            <SL to={{
              pathname: "/about",
            }}
            >
              Info
            </SL>
          </FrontButtons>

    </motion.div>
    
    );
}
export default Home;