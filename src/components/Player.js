import React, { useState, useEffect } from 'react';
import '../App.css';
import { pageTransition } from '../App';
import { motion } from "framer-motion";
import { Link, Redirect, useLocation, withRouter, useParams } from 'react-router-dom';
//import { switchStyleTrack, ScrollDiv, PlayerDiv, ReadyStyle, AcceptButton, SwitchDiv, BackToButton } from '../styles';
import Track from './Track';
import backTo from '../img/backTo.svg';
// import PlaylistError from './PlaylistError';

//stylesy
import { SwitchDiv, BackToButton } from './styles/mainStyles';
import { PlayerDiv, AcceptButton } from './styles/PlayerStyles';

const Player = (props) => {

    const location = useLocation();

    console.log(location);

    //const stateTruck = JSON.parse(location.state.tracks);
    //const stateBack = JSON.parse(location.state.backToPlaylist);

    // const state

    // hook
      const useQuery = () => {
        return new URLSearchParams(useLocation().search);
      };
      let x = useQuery();
      x = x.get("name");
      let { name } = useParams();

      const [names, setNames] = useState({id: name, name: x});
    // end_hook

    //console.log('PLAYER LOKACJA PROPSY',location);
    //console.log(props);

    //const backToPlaylist = location.state.backToPlaylist;

    const [tracks, setTracks] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [error, setError] = useState(false);
    const [red, setRed] = useState(false);
    const [can, setCan] = useState(false);

    const [isErro, setIsErro] = useState(false);

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

        //https://api.spotify.com/v1/playlists/37i9dQZF1DX76Wlfdnj7AP/tracks

        fetch(`https://api.spotify.com/v1/playlists/${names.id}/tracks`, requestOptions)
          .then(response => response.text())
          .then(result => setTracks(JSON.parse(result)))
          .catch(setError(true));
      };

      const filterTracks = () => {
        //console.log('siema',tracks);
        let i = 0;
        let pack = [];
        do{
          //console.log(i);
          //console.log(tracks.items.length);
            if((tracks.items[i].track !== null)){
              if((tracks.items[i].track.preview_url !== null)){
                  let song = {
                    artist: tracks.items[i].track.artists[0].name,
                    name: tracks.items[i].track.name,
                    preview: tracks.items[i].track.preview_url,
                    cover: tracks.items[i].track.album.images[1].url
                  }
                  pack.push(song);
              }
            }
            i++;
        } while((pack.length <= 4) && (i < tracks.items.length));
        setFiltered(pack);
        if(pack.length < 5){
          setIsErro(true);
        }
        // setTimeout(() => setCan(true),3000);
      }

      useEffect(() => {
        //console.log(location.state);
        //if(location.state !== undefined){
          getTracks();
        //}
      },[]);

      useEffect(() => {
        if(tracks.length !== 0){
          filterTracks();
        }
      },[tracks]);

      const acceptGo = () => {
        //console.log('duppaaaa');
        setCan(true);
      };

      //console.log(tracks);

    return(

        <SwitchDiv
          //style={SwitchDiv}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
        >
          
          {
            isErro && (
            <Redirect to={{ 
              pathname: `/play_error/${names.id}`,
              search: `?name=${names.name}`
            }}
            />)
          }

          <BackToButton to={{ 
            pathname: `/categories`,
            //search: `?name=${names.name}`
            // state: {
            //   id: stateBack.id,
            //   name: stateBack.name,
            // }
            }}>
            <img src={backTo} alt="Back" />
          </BackToButton>

            {
              (names === undefined) ? <Redirect to="/" /> : ''
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
                      <Track source={filtered} playName={names.name}/>
                    </motion.div>
                  )
                }
              </motion.div>
            </PlayerDiv>

        </SwitchDiv>
    );
}

export default withRouter(Player);

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