import React, { useState, useEffect } from 'react';
import '../App.css';
import { motion } from "framer-motion";
import { Link, Redirect } from 'react-router-dom';
import { switchStyleTrack, ScrollDiv, SwitchDiv, RandButton, CategoriesHeader, BackToButton } from '../styles';
import backTo from '../img/backTo.svg';

import { Image } from "react-image-and-background-image-fade";

const Categories = ({ authKey }) => {

    const [cats, setCats] = useState([]);
    const [error, setError] = useState(false);
    const [red, setRed] = useState(false);
    const [randomNumb, setRandomNumb] = useState(null);

      const getRandomCategory = () => {
          console.log(cats.length);
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

        //https://api.spotify.com/v1/browse/categories?locale=en_US
        //https://api.spotify.com/v1/browse/categories?limit=50&country=US

        await fetch("https://api.spotify.com/v1/browse/categories?limit=50&country=US", requestOptions)
          .then(response => response.text())
          .then(result => setCats(JSON.parse(result).categories.items))
          .catch(setError(true));
      };

      useEffect(() => {
        getCategories();
        setTimeout(()=>{
          document.body.style="background: #4dd453";
        },1000);
      },[]);

      //console.log(cats);

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
            pathname: `/playlists/${cats[randomNumb].id}`,
            search: `?name=${cats[randomNumb].name}`,
            state: {
              id: cats[randomNumb].id,
              name: cats[randomNumb].name
            }}} />
          )
        }

          <BackToButton to='/'>
            <img src={backTo} alt="Back" />
          </BackToButton>
          
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
          

            <ScrollDiv>

              <ul style={{ padding: '0px', margin: '0px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', listStyleType: 'none' }}>
                {cats.map(cat => { 
                
                return(
                    <li key={cat.id} style={{ width: '42%', height: '40%', marginBottom: '25px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
                      <Link to={{ 
                        pathname: `/playlists/${cat.id}`,
                        search: `?name=${cat.name}`,
                        state: {
                          id: cat.id,
                          name: cat.name,
                        }
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

        </motion.div>

    );
}

export default Categories;