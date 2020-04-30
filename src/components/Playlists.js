import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import { pageTransition } from '../App';
import { motion } from "framer-motion";
import { Link, Redirect, useLocation } from 'react-router-dom';
import { SwitchDiv, ScrollDiv, BackToButton, CategoriesHeader, RandButton } from '../styles';
import backTo from '../img/backTo.svg';
import CategoryError from './CategoryError';

import { ColorExtractor } from 'react-color-extractor';

const Playlists = (props) => {

    console.log(props);

    const location = useLocation();

    const [plays, setPlays] = useState([]);
    const [error, setError] = useState(false);
    const [red, setRed] = useState(false);

    const [lastPlay, setLastPlay] = useState("");
    const [shouldIFetch, setShouldIFetch] = useState(true);

    const [randomNumb, setRandomNumb] = useState(null);

      const getRandomPlaylist = () => {
        console.log(plays.length);
        let min = 0;
        let max = plays.length-1;
        min = Math.ceil(min);
        max = Math.floor(max);
        setRandomNumb(Math.floor(Math.random() * (max - min + 1)) + min);
      }


      const getPlaylists = async() => {
        if(props.authKey.access_token === undefined){
          setRed(true);
          console.log('brak klucza tokena');
          return;
        }
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${props.authKey.access_token}`);

        const requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

        //https://api.spotify.com/v1/browse/categories/${location.state.id}/playlists?local=en_US

        //https://api.spotify.com/v1/browse/categories/at_home/playlists?limit=50&country=US

          await fetch(`https://api.spotify.com/v1/browse/categories/${location.state.id}/playlists?limit=50&country=US`, requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log(result.error);
            if(result.error === undefined){
              setPlays(result.playlists.items);
            }else{
              setError(true);
            }
          });
          // .catch();
      };

      useEffect(() => {
        if(location.state !== undefined){
          getPlaylists();
        }
        setTimeout(()=>{
          document.body.style="background: #f7ab1a";
        },1000);
      },[]);

      const getColors = (cls) => {
        console.log(cls);
      };

      const cols = [];
      console.log(cols);

    return(

        <motion.div
          style={SwitchDiv}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
        >

        { (randomNumb!==null) && (
          <Redirect 
            to={{ 
            pathname: `/player/${plays[randomNumb].id}`,
            search: `?name=${plays[randomNumb].name}`,
            state: {
              id: plays[randomNumb].id,
              name: plays[randomNumb].name,
              tracks: plays[randomNumb].tracks.href,
              backToPlaylist: location.state
            }}} />
          )
        }

          <BackToButton to='/categories'>
            <img src={backTo} alt="Back" />
          </BackToButton>

            {
              (error === true) && (
              <Redirect to={{ 
                pathname: `/error/${location.state.name}`,
                search: `?name=${location.state.name}`,
                state: {
                  catName: location.state.name
                }}}
              />)
            }

            {
              (location.state === undefined) ? <Redirect to="/" /> : ''
            }
          
          {/* <h1 style={{ margin: '25px', fontSize: '2.2rem', lineHeight: '2.2rem'}}>What playlist You want to play?</h1> */}
          
            <CategoriesHeader>
              <span>
                <h1 style={{ fontSize: '2.4rem', lineHeight: '2.2rem', marginBottom: '5px'}}>{location.state.name}</h1>
                <h5 style={{ fontFamily: 'CircularStd', color: '#FFF', fontSize: '1.2rem', lineHeight: '1.2rem', marginBottom: '5px'}}>Choose or random</h5>
              </span>
              <motion.div 
                whileTap={{ scale: 0.8 }}
                style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                onClick={() => getRandomPlaylist()}
              >
                <RandButton>Get random</RandButton>
              </motion.div>
            </CategoriesHeader>

            <ScrollDiv>

            { (plays[0] !== null) && (

              <ul style={{ padding: '0px', margin: '0px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', listStyleType: 'none' }}>
                {plays.map((play,idx) => { 
                
                return(
                    <li key={play.id} style={{ width: '40%', height: '40%', marginBottom: '20px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
                      
                      {/* <ColorExtractor src={play.images[0].url} getColors={(cls) => {let xx = cls;}} /> */}
                      <Link to={{ 
                        pathname: `/player/${play.id}`,
                        search: `?name=${play.name}`,
                        state: {
                          id: play.id,
                          name: play.name,
                          tracks: play.tracks.href,
                          backToPlaylist: location.state,
                        }}} style={{position: 'relative', display: 'flex', justifyContent: 'center'}}>
                          <img src={play.images[0].url} style={{ width: '100%' }} />
                        </Link>
                    </li>
                ) 
                  })}
              </ul>

            )}

            </ScrollDiv>     

        </motion.div>
    );
}

export default Playlists;