import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import { pageTransition } from '../App';
import { motion } from "framer-motion";
import { Link, Redirect, useLocation } from 'react-router-dom';
import { switchStyleTrack, ScrollDiv, BackToButton } from '../styles';
import backTo from '../img/backTo.svg';

const Playlists = (props) => {

    console.log(props);

    const location = useLocation();

    const [plays, setPlays] = useState([]);
    const [error, setError] = useState(false);
    const [red, setRed] = useState(false);

    const [lastPlay, setLastPlay] = useState("");
    const [shouldIFetch, setShouldIFetch] = useState(true);


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
            setPlays(result.playlists.items);
          })
          .catch(setError(true));

      };

      useEffect(() => {
        if(location.state !== undefined){
          getPlaylists();
        }
      },[]);

    return(

        <motion.div
          style={switchStyleTrack}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
        >

          <BackToButton to='/categories'>
            <img src={backTo} alt="Back" />
          </BackToButton>

            {
              (location.state === undefined) ? <Redirect to="/" /> : ''
            }
          
          <h1 style={{ margin: '25px', fontSize: '2.2rem', lineHeight: '2.2rem'}}>What playlist You want to play?</h1>


            <ScrollDiv style={{height: '100%'}}>

            { (plays[0] !== null) && (

              <ul style={{ padding: '0px', margin: '0px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', listStyleType: 'none' }}>
                {plays.map(play => { 
                
                return(
                    <li key={play.id} style={{ width: '40%', height: '40%', marginBottom: '20px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
                      <Link to={{ 
                        pathname: `/player/${play.id}`,
                        search: `?name=${play.name}`,
                        state: {
                          id: play.id,
                          name: play.name,
                          tracks: play.tracks.href,
                          backToPlaylist: location.state
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