import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import { pageTransition } from '../App';
import { motion } from "framer-motion";
import { Link, Redirect, useLocation, useParams, withRouter } from 'react-router-dom';
//import { SwitchDiv, ScrollDiv, BackToButton, CategoriesHeader, RandButton } from '../styles';
import backTo from '../img/backTo.svg';
import CategoryError from './CategoryError';

//stylesy
import { ScrollDiv, SwitchDiv, RandButton, CategoriesHeader, BackToButton } from './styles/mainStyles';

import { ColorExtractor } from 'react-color-extractor';
import { Image } from "react-image-and-background-image-fade";

const Playlists = (props) => {

    const useQuery = () => {
      return new URLSearchParams(useLocation().search);
    };
    let x = useQuery();
    x = x.get("name");
    let { name } = useParams();
    const [names, setNames] = useState({id: name, name: x});

    const location = useLocation();

    console.log('PLAYLISTs',location);

    const [plays, setPlays] = useState([]);
    const [error, setError] = useState();
    const [red, setRed] = useState(false);
    const [lastPlay, setLastPlay] = useState("");
    const [shouldIFetch, setShouldIFetch] = useState(true);
    const [randomNumb, setRandomNumb] = useState(null);

    const getRandomPlaylist = () => {
      //console.log(plays.length);
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
        console.log(names.id);
        await fetch(`https://api.spotify.com/v1/browse/categories/${names.id}/playlists?limit=50&country=US`, requestOptions)
        .then(response => response.json())
        .then(result => {
          //console.log(result.error);
          //console.log(result,"background: red; color: white");
          if( result.error === undefined && ( result.playlists.items.length > 4 ) ){
            setPlays(result.playlists.items);
            setError(false);
          }else{
            setError(true);
          }
        });
    };

    useEffect(() => {
      if(names.id !== undefined){
        getPlaylists();
      }
    },[]);

    if(error === true){
      return(
        <SwitchDiv
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
        >
          <Redirect to={{ 
            pathname: `/error/${names.id}`,
            search: `?name=${names.name}`
          }}
          />
        </SwitchDiv>
      )
    }
    if(error === false){
      return(

        <SwitchDiv
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
        >

          {(randomNumb!==null) && (
            <Redirect to={{
              pathname: `/player/${plays[randomNumb].id}`,
              search: `?name=${plays[randomNumb].name}`,
            }} />
          )}

          {(names === null) && <Redirect to="/" />}

          <BackToButton to='/categories'>
            <img src={backTo} alt="Back" />
          </BackToButton>
                      
          <CategoriesHeader>
            <span>
              <h1 style={{ fontSize: '2.4rem', lineHeight: '2.2rem', marginBottom: '5px'}}>{names.name}</h1>
              <h5 style={{ fontFamily: 'CircularStd', color: '#FFF', fontSize: '1.2rem', lineHeight: '1.2rem', marginBottom: '5px'}}>Choose or random</h5>
            </span>
            <motion.div 
              whileTap={{ scale: 0.8 }}
              style={{ width: '50%', display: 'flex', justifyContent: 'center' }}
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
                        
                        <Link to={{ 
                          pathname: `/player/${play.id}`,
                          search: `?name=${play.name}`,
                          para1: location.pathname,
                          para2: location.search
                        }} style={{position: 'relative', display: 'flex', justifyContent: 'center', width: '100%' }}>

                          <Image 
                            src={play.images[0].url} 
                            style={{ backgroundSize: 'cover',backgroundPosition: 'center top' }} 
                            width='100%'
                            height='100%'
                            isResponsive 
                            lazyLoad 
                          />

                          </Link>
                      </li>
                  ) 
                    })}
                </ul>

              )}

              </ScrollDiv>     
                
        </SwitchDiv>
      );
  }
  else{
    return(
      <h1 style={{ zIndex: '0'}}>Loading...</h1>
    );
  }
}

export default withRouter(Playlists);

const Loader = () => {
  return(
    <div
      style={{
        padding: '150px',
        background: 'gray'
      }}
    >
    </div>
  );
}