import React, { useEffect, useState } from 'react';
import './App.css';
import { requestOptions } from './headers';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from './components/Home';
import Categories from './components/Categories';
import Playlists from './components/Playlists';
import Player from './components/Player';
import CategoryError from './components/CategoryError';
import PlaylistError from './components/PlaylistError';

import "circular-std";

import { Container, Logo, switchStyle, GradientBall, GradientBall2, GradientBall3, GradientBall4 } from './styles';
import { AnimatePresence, motion } from "framer-motion";

export default function App(){

  const [auth, setAuth] = useState(false);
  const [leftTime, setLeftTime] = useState(1);

  const refreshToken = () => {
    if((leftTime === 1) || (leftTime <= Date.now() + 60000)){

      fetch("https://accounts.spotify.com/api/token", requestOptions)
        .then(response => response.text())
        .then(result => {
          result = JSON.parse(result);
          setAuth(result);
          let time = (Date.now() + 3500000);
          setLeftTime(time);
          // let some = {
          //   code: result.access_token, 
          //   expires: time
          // };
          //window.sessionStorage.setItem('key', JSON.stringify(some));
        })
        .catch(error => console.log('error', error));
    }
  };

  useEffect(() => {

    refreshToken();

    const interval = setInterval(() => {
      if(leftTime <= Date.now() + 3500000){
        refreshToken();
      }
    }, 10000);

    return () => {
      clearInterval(interval);
    }

  },[leftTime]);

  // const location = useLocation();

  return(

    <Router>

    <Container style={{position: 'relative', overflow: 'hidden'}}>

      <GradientBall />

      <GradientBall2 />

      <GradientBall3 />

      <GradientBall4 />

      <div style={{position: 'absolute',width: '100%',height: '100%',backgroundImage: 'linear-gradient(-15deg, black, transparent)'}}></div>

      <Route
				render={({ location }) => (

        <AnimatePresence exitBeforeEnter initial={false} >
          <Switch location={location} key={location.pathname}>

            {
              (auth!==false) && (
                <Route path="/player/:name" component={() => <Player authKey={auth} />} />
              )
            }
            
            { (auth!==false) && (
              <Route path="/categories" component={() => <Categories authKey={auth} />}/>
            )}

            { (auth!==false) && (
              <Route path="/playlists/:name" component={() => <Playlists authKey={auth} />} />
            )}

            { (location.pathname === "/") && (
              <Route path="/" component={Home} />
            )}

            <Route path="/about" component={About} />

            <Route path="/error/:name" component={CategoryError} />

            <Route path="/play_error/:name" component={PlaylistError} />

          </Switch>
        </AnimatePresence>
        
        )}
      />

    </Container>

    </Router>
    
  );
}


function About() {
  return (
    <motion.div
      style={switchStyle}
      initial={{ opacity: 0, y: 100}}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.2 }}
    >

      <div>
        <h2>About</h2>
        <Link to='/'>
          Wracam XD
        </Link>
      </div>

    </motion.div>
  );
}

