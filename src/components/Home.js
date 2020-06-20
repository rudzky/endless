import React from 'react';
import '../App.css';
import { withRouter } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
//styles
import { SwitchStyle, Button } from './styles/mainStyles'; 
import { SL, StyledDiv, FrontButtons, Logo, H1, H2, H3, LogoFramer, HomeContentWrapper, B1, B2, B3, B4 } from './styles/HomeStyles';
//img
import logo from '../img/logo-end.svg';
import ball1 from '../img/ball1.png';
import ball2 from '../img/ball2.png';
import ball3 from '../img/ball3.png';
import ball4 from '../img/ball4.png';

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

        <B1 src={ball1} />
        <B2 src={ball2} />
        <B3 src={ball3} />
        <B4 src={ball4} />

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

        <HomeContentWrapper>

            <StyledDiv>
              <H2>Welcome to</H2>
              <H1>Bangers' world</H1>
              <H3>Discover great music with our game.</H3>
            </StyledDiv>

            <FrontButtons>
              <Button to='/categories'>Get Started</Button>

              { isLaptop === false && (
                  <SL to={{
                    pathname: "/about",
                  }}
                  >
                    Info
                  </SL>
              )}
            
            </FrontButtons>

        </HomeContentWrapper>
         
    </SwitchStyle>
    );
}
export default withRouter(Home);