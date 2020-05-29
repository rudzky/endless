import React, { useState, useEffect } from 'react';
import '../App.css';
import { motion } from "framer-motion";
import { Link, Redirect, useLocation, withRouter, useParams } from 'react-router-dom';
import Track from './Track';
import backTo from '../img/backTo.svg';

//stylesy
import { SwitchDiv, BackToButton, CategoriesHeader } from './styles/mainStyles';
import { PlayerDiv, AcceptButton, Wrapper, FramerWrapper, MiddleWrapper, ReadyH1 } from './styles/PlayerStyles';

const Player = (props) => {

    const location = useLocation();
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
    const [dataForTest, setDataForTest] = useState(null);

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
      if( tracks !== null && tracks !== undefined ){
        let tracks_with_preview = [];
        let pack = [];
        let usedNumbers = [];

        const check = (i) => {
          if(usedNumbers.includes(i)){
            return true;
          }else{
            return false;
          }
        };

        tracks_with_preview = tracks.items.filter(e => e.track.preview_url);

        let min = Math.ceil(0);
        let max = Math.floor(tracks_with_preview.length - 1);

        if(tracks_with_preview.length >= 5){
          do{
            let i;
            do{
              i = Math.floor(Math.random() * (max - min + 1)) + min;
            }while(check(i));

            usedNumbers.push(i);
            
            let song = {
              artist: tracks_with_preview[i].track.artists[0].name,
              name: tracks_with_preview[i].track.name,
              preview: tracks_with_preview[i].track.preview_url,
              cover: tracks_with_preview[i].track.album.images[1].url
            }
            pack.push(song);

          }while(pack.length < 5);
        }else{
          setIsErro(true);
        };

        setFiltered(pack);

      }else{
        setIsErro(true);
      }
    };

    useEffect(() => {
      getTracks();
    },[]);

    useEffect(() => {
      if(tracks.length !== 0){
        filterTracks();
      };
    },[tracks]);

    const acceptGo = () => {
      setCan(true);
    };

    const linkToTest = (data) => {
      setDataForTest(data);
    };

    //console.log(tracks);

    return(

        <SwitchDiv initial={{ opacity: 0 }} animate={{ opacity: 1}} exit={{ opacity: 0}} transition={{ duration: 0.3 }}>

          {
            dataForTest && (
              <Redirect to={{ pathname: "/check", state: dataForTest }} />
            )
          }
          
          {
            isErro && (
            <Redirect to={{ 
              pathname: `/play_error/${names.id}`,
              search: `?name=${names.name}`
            }}
            />)
          }
          
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
          
          <PlayerDiv>
            <FramerWrapper initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0 }} transition={{ duration: 1 }}>

              { !can ? (
                <motion.div  style={{ height: '100%' }} initial={{ opacity: 0 }} animate={{ opacity: 1}} exit={{ opacity: 0}} transition={{ duration: 1 }}>

                    <Accept fun={setCan} disabled={tracks} />

                </motion.div>
                ) : (
                  // <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0}} transition={{ delay: 1, duration: 1 }}>
                    <Track source={filtered} playName={names.name} p1={location.para1} p2={location.para2} backFunc={() => setUnmount(true)} linkToTestFunc={(data) => linkToTest(data)} />
                  // </motion.div>
                )
              }
            </FramerWrapper>
          </PlayerDiv>

        </SwitchDiv>
    );
}

export default withRouter(Player);

const Accept = ({fun, disabled}) => {
  const location = useLocation();
  return(
    <Wrapper>
      
      <CategoriesHeader>
        <BackToButton
          to={{
            pathname: location.para1 || "/categories",
            search: location.para2
          }}
        >
          <img src={backTo} alt="Back" />
        </BackToButton>
      </CategoriesHeader>

      <MiddleWrapper>

        <ReadyH1>Ready?</ReadyH1>

        <AcceptButton 
          disabled={ disabled === [] ? true : false }
          onClick = {() => fun(true)}
        >
          Hell yea!
        </AcceptButton>

      </MiddleWrapper>

    </Wrapper>
  );
};