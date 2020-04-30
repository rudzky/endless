import React, { useState, useEffect } from 'react';
import '../App.css';
import { pageTransition } from '../App';
import { motion } from "framer-motion";
import { Link, Redirect, useLocation } from 'react-router-dom';
import { switchStyleTrack, ScrollDiv, PlayerDiv, ReadyStyle, AcceptButton, SwitchDiv, BackToButton } from '../styles';
import Track from './Track';
import backTo from '../img/backTo.svg';

const Player = (props) => {

    const location = useLocation();
    const backToPlaylist = location.state.backToPlaylist;

    console.log(location);
    //console.log(props);

    const [tracks, setTracks] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [error, setError] = useState(false);
    const [red, setRed] = useState(false);
    const [can, setCan] = useState(false);

      const getTracks = () => {
        if(props.authKey.access_token === undefined){
          setRed(true);
          return;
        }
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${props.authKey.access_token}`);

        const requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

        fetch(`${location.state.tracks}`, requestOptions)
          .then(response => response.text())
          .then(result => setTracks(JSON.parse(result)))
          .catch(setError(true));
      };

      const filterTracks = () => {
        //console.log('siema',tracks);
        let i = 0;
        let pack = [];
        do{
            if(tracks.items[i].track.preview_url !== null){
                let song = {
                    artist: tracks.items[i].track.artists[0].name,
                    name: tracks.items[i].track.name,
                    preview: tracks.items[i].track.preview_url,
                    cover: tracks.items[i].track.album.images[1].url
                }
              pack.push(song);
            }
            i++;
        } while(pack.length <= 4);
        setFiltered(pack);
        // setTimeout(() => setCan(true),3000);
      }

      useEffect(() => {
        console.log(location.state);
        if(location.state !== undefined){
          getTracks();
        }
      },[]);

      useEffect(() => {
        if(tracks.length !== 0){
          filterTracks();
        }
      },[tracks]);

      const acceptGo = () => {
        console.log('duppaaaa');
        setCan(true);
      };

      console.log(tracks);

    return(

        <motion.div
          style={SwitchDiv}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
        >

          <BackToButton to={{ 
            pathname: `/playlists/${backToPlaylist.id}`,
            search: `?name=${backToPlaylist.name}`,
            state: {
              id: backToPlaylist.id,
              name: backToPlaylist.name,
            }
            }}>
            <img src={backTo} alt="Back" />
          </BackToButton>

            {
              (location.state === undefined) ? <Redirect to="/" /> : ''
            }
          
            <PlayerDiv
              style={{ height: '100%' }}
            >
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 1 }}
              >
                {
                  !can ? (<motion.div 
                    style={{ height: '100%' }}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1 }}>
                      <Ready /><Accept fun={setCan} />
                    </motion.div>) : (
                    <motion.div
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 100 }}
                      transition={{ delay: 1, duration: 1 }}
                    >
                      <Track source={filtered} playName={location.state.name}/>
                    </motion.div>
                  )
                }
              </motion.div>
            </PlayerDiv>

        </motion.div>
    );
}

export default Player;

const Ready = () => {
  return(
    <h1 style={{marginBottom: '20px'}}>Ready?</h1>
  );
};

const Accept = ({fun}) => {
  return(
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ delay: 1, duration: 0.3 }}
      onClick = {() => fun(true)}
    >
      <AcceptButton>Hell yea!</AcceptButton>
    </motion.div>
  );
};