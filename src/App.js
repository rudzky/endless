import React, { useEffect, useState } from 'react';
import './App.css';
import { requestOptions } from './headers';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import Home from './components/Home';
import Categories from './components/Categories';
import Playlists from './components/Playlists';
import Player from './components/Player';
import CategoryError from './components/CategoryError';
import PlaylistError from './components/PlaylistError';
import Test from './components/Test';
import Summary from './components/Summary';
import "circular-std";
import { AnimatePresence} from "framer-motion";
import house from "./img/house.svg";
// stylesy
import { GradientWrapper, SwitchStyle, SwitchDiv, Button, HomeButton } from './components/styles/mainStyles';
import { 
  Container,  
  InfoWrap,
  H1,
  P,
  H2,
  HomeIcon
} from './components/styles/AppStyles';

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
      if(leftTime <= Date.now() + 900000){
        refreshToken();
      }
    }, 900000);

    return () => {
      clearInterval(interval);
    }

  },[leftTime]);

  return(

    <Router basename={process.env.PUBLIC_URL}>
      {/* bylo position relative */}
    <Container 
    >

      <Route
				render={({ location }) => (

        <AnimatePresence exitBeforeEnter initial={false} >
          <Switch location={location} key={location.pathname}>

            { (auth !== false) && (
              <Route path="/categories" component={() => <Categories authKey={auth} />}/>
            )}

            <Route path="/check" component={Test} />

            {
              (auth!==false) && (
                <Route path="/player/:name" component={() => <Player authKey={auth} />} />
              )
            }

            { (auth!==false) && (
              <Route path="/playlists/:name" component={() => <Playlists authKey={auth} /> } />
            )}

            {/* { (location.pathname === "/") && ( */}
              <Route exact path="/" component={Home} />
            {/* )} */}

            

            <Route path="/about" component={About} />

            <Route path="/error/:name" component={CategoryError} />

            <Route path="/play_error/:name" component={PlaylistError} />

            <Route path="/summary" component={Summary} />

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
    <InfoWrap
      initial={{ opacity: 0, y: 100}}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.2 }}
    >

      <div>
        <H1>Cześć,<br/> a nawet czołem</H1>
        <P>Tutaj takie małe info, co to w ogóle jest...</P>

        <H2>No to co to jest?</H2>
        <P>Endless to apka/gierka, która sprawdza twoją muzyczną pamięć. Coś ala "Jaka to melodia", ale dużo łatwiej  &#128522;</P>
        
        <H2>A po co to komu?</H2>
        <P>Ciężkie pytanie. Najprościej odpowiem, że to apka głównie pokazowa. Jeśli to czytasz to wyszła całkiem znośnie &#128524;</P>

        <H2>Jak to jest zrobione?</H2>
        <P>Użyłem Reacta, React-Routera, Styled-Components, Framer-Motion i jeszcze kilku innych narzędzi.</P>

        <H2>A UI skąd, co?</H2>
        <P>Do profeski trochę brakuje(dużo brakuje), ale UI zrobiłem sam, oczywiście inspirując się na Dribbble i u samego Spotify. Ta podstrona jest akurat robiona bez designu (troche z lenistwa). &#128526;</P>

        <H2>Ale skąd te dane?</H2>
        <P>Już odpowiadam. Użyłem Spotify API. Ciekawostka: Najpierw wybrałem API, a dopiero później wpadłem na pomysł tej apki &#128513;</P>
        
        <H2>Czemu to po jest angielsku?</H2>
        <P>Z przyczyn praktycznych i takich, że ten font troche słabo sobie radzi z UTF-8 &#128530;</P>

        <H2>Kto to takie zrobił?</H2>
        <P>A ja &#128519; <br /> Piotrek Rudzki</P>
        
        <HomeButton to='/'>
          {/* <HomeIcon src={house} alt="home"/> */}
          Home
        </HomeButton>
      </div>

    </InfoWrap>
  );
}

