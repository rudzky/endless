import React from 'react';
import '../App.css';
import { withRouter } from 'react-router-dom';
//import { SL, StyledDiv, FrontButtons, Logo } from '../styles';

//stylesy
import { SwitchStyle, Button, SwitchDiv } from './styles/mainStyles'; 
import { SL, StyledDiv, FrontButtons, Logo } from './styles/HomeStyles';

import { motion } from "framer-motion";
import logo from '../img/logo.svg';


const Home = () => {

    setTimeout(() => {document.body.style="background: #03a9f4"}, 3000);

    return (

      <SwitchStyle
          // style={SwitchStyle}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Logo src={logo}/>
        </motion.div>

          <StyledDiv>
            <h1>What's up <br />You meloman?</h1>
            <h3>Play music game, feel cool and discover some banger sounds</h3>
          </StyledDiv>
         
          <FrontButtons>
            <motion.div 
              whileTap={{ scale: 0.8 }} 
              style={{ width: '50%', display: 'flex', justifyContent: 'center', maxWidth: '12.5rem',
              margin: '15px 0px',
              borderRadius: '30px' }}
            >
              <Button to='/categories'>Get Started</Button>
            </motion.div>
            <SL to={{
              pathname: "/about",
            }}
            >
              Info
            </SL>
          </FrontButtons>

    </SwitchStyle>
    
    );
}
export default withRouter(Home);