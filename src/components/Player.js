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
    //console.log(props.history.goBack);

    const useQuery = () => {
      return new URLSearchParams(useLocation().search);
    };
    let x = useQuery();
    x = x.get("name");
    let { name } = useParams();
    const [names, setNames] = useState({id: name, name: x});

    const [tracks, setTracks] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [error, setError] = useState(false);
    const [red, setRed] = useState(false);
    const [can, setCan] = useState(false);
    const [unmount, setUnmount] = useState(false);

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

        fetch(`https://api.spotify.com/v1/playlists/${names.id}/tracks`, requestOptions)
          .then(response => response.text())
          .then(result => setTracks(JSON.parse(result)))
          .catch(setError(true));
      };

      const filterTracks = () => {
        //console.log('siema',tracks);
        if( tracks !== null && tracks !== undefined ){
          let min = 0;
          let max = tracks.items.length - 1;
          min = Math.ceil(min);
          max = Math.floor(max);
        
          let pack = [];
          let usedNumbers = [];
          let iterCount = 0;

          const check = (i) => {
            if(usedNumbers.includes(i)){
              return true;
            }else{
              return false;
            }
          };

          do{
            let i;
            do{
              i = Math.floor(Math.random() * (max - min + 1)) + min;
            }while(check(i));

            // if(check(i)){
            //   let i = Math.floor(Math.random() * (max - min + 1)) + min;
            // };

              if((tracks.items[i].track !== null) && (tracks.items[i].track !== undefined)){
                if((tracks.items[i].track.preview_url !== null)){
                    let song = {
                      artist: tracks.items[i].track.artists[0].name,
                      name: tracks.items[i].track.name,
                      preview: tracks.items[i].track.preview_url,
                      cover: tracks.items[i].track.album.images[1].url
                    }
                    pack.push(song);
                    usedNumbers.push(i);
                }
              }
              iterCount++;
          } while((pack.length <= 4) && (iterCount < tracks.items.length - 1));

        setFiltered(pack);

        if(pack.length < 5){
          setIsErro(true);
        }

      }else{
        setIsErro(true);
      }
    };

    useEffect(() => {
      getTracks();
      return () => console.log('return 1');
    },[]);

    useEffect(() => {
      if(tracks.length !== 0){
        filterTracks();
      };
      return () => console.log('return 2');
    },[tracks]);

    const acceptGo = () => {
      setCan(true);
    };

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
          {/* backtobutton */}
          

            {
              unmount && (
                <Redirect to={{
                  pathname: location.para1 || "/categories",
                  search: location.para2
                }} 
              />
            )}

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

                      <Ready />
                      <Accept fun={setCan} disabled={tracks} />

                    </motion.div>) : (
                    <motion.div
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 100 }}
                      transition={{ delay: 1, duration: 1 }}
                    >
                      <Track source={filtered} playName={names.name} p1={location.para1} p2={location.para2} />
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
  const location = useLocation();
  return(
    <>
      <BackToButton
        to={{
          pathname: location.para1 || "/categories",
          search: location.para2
        }}
      >
        <img src={backTo} alt="Back" />
      </BackToButton>
      <h1 style={{marginBottom: '20px'}}>Ready?</h1>
    </>
  );
};

const Accept = ({fun, disabled}) => {
  return(
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ delay: 1, duration: 0.3 }}
      onClick = {() => fun(true)}
    >
      <AcceptButton 
        disabled={ disabled === [] ? true : false }
      >Hell yea!</AcceptButton>
    </motion.div>
  );
};