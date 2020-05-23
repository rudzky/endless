import React, { useState, useEffect } from 'react';
import '../App.css';
import { motion } from "framer-motion";
import { Link, Redirect } from 'react-router-dom';
//import { switchStyleTrack, ScrollDiv, SwitchDiv, RandButton, CategoriesHeader, BackToButton } from '../styles';
import backTo from '../img/backTo.svg';

//stylesy
import { ScrollDiv, SwitchDiv, RandButton, CategoriesHeader, BackToButton } from './styles/mainStyles';

import { Image } from "react-image-and-background-image-fade";

const Categories = ({ authKey }) => {

    const [cats, setCats] = useState([]);
    const [error, setError] = useState();
    const [red, setRed] = useState(false);
    const [randomNumb, setRandomNumb] = useState(null);

      const getRandomCategory = () => {
          //console.log(cats.length);
          let min = 0;
          let max = cats.length-1;
          min = Math.ceil(min);
          max = Math.floor(max);
          setRandomNumb(Math.floor(Math.random() * (max - min + 1)) + min);
      }

      const getCategories = async() => {
        if(authKey === undefined){
          setRed(true);
          return;
        }
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${authKey.access_token}`);

        const requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

        await fetch("https://api.spotify.com/v1/browse/categories?limit=50&country=US", requestOptions)
          .then(response => response.text())
          .then(result => { 
            setCats(JSON.parse(result).categories.items);
            setError(false); 
          })
          .catch(setError(true));
      };

      useEffect(() => {
        getCategories();
        // setTimeout(()=>{
        //   document.body.style="background: #4dd453";
        // },1000);
      },[]);

    if(error === false){
      return(
          <SwitchDiv
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            transition={{ duration: 0.3 }}
          >

          { (randomNumb!==null) && (
            <Redirect 
            to={{ 
              pathname: `/playlists/${cats[randomNumb].id}`,
              search: `?name=${cats[randomNumb].name}`,
              state: {
                id: cats[randomNumb].id,
                name: cats[randomNumb].name
              }}} />
            )
          }

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // transition={{ duration: 0.3 }}
          >
            <BackToButton to='/'>
              <img src={backTo} alt="Back" />
            </BackToButton>
          </motion.div>
            
            <CategoriesHeader>
              <span>
                <h1 style={{ fontSize: '2.4rem', lineHeight: '2.2rem', marginBottom: '5px'}}>Browse</h1>
                <h5 style={{ fontFamily: 'CircularStd', color: '#FFF', fontSize: '1.2rem', lineHeight: '1.2rem', marginBottom: '5px'}}>Choose or random</h5>
              </span>
              <motion.div 
                whileTap={{ scale: 0.8 }}
                style={{ width: '50%', display: 'flex', justifyContent: 'center' }}
                onClick={() => getRandomCategory()}
              >
                <RandButton>Get random</RandButton>
              </motion.div>
            </CategoriesHeader>
            

              <ScrollDiv
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >

                <ul style={{ padding: '0px', margin: '0px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', listStyleType: 'none' }}>
                  {cats.map(cat => { 
                  
                  return(
                      <li key={cat.id} style={{ width: '42%', height: '40%', marginBottom: '25px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
                        <Link to={{ 
                          pathname: `/playlists/${cat.id}`,
                          search: `?name=${cat.name}`,
                          // state: {
                          //   id: cat.id,
                          //   name: cat.name,
                          // }
                          }} style={{position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', width: '100%' }}>
                          
                          {/* <img src={cat.icons[0].url} style={{ width: '100%' }} decoding='async' loading='lazy' /> */}

                          <Image 
                            src={cat.icons[0].url} 
                            style={{ backgroundSize: 'cover',backgroundPosition: 'center top' }} 
                            width='100%'
                            height='100%'
                            isResponsive 
                            lazyLoad 
                          />
                          
                          <p style={{ fontWeight: '600', color: 'white', fontSize: '1rem', margin: '10px 0px 0px 0px'}}>{cat.name}</p>
                        </Link>  
                      </li>
                  ) 
                    })}
                </ul>

              </ScrollDiv>

          </SwitchDiv>

      );
    }else{
      return(
        <h1 style={{ zIndex: '0'}}>Loading...</h1>
      );
    }
}

export default Categories;