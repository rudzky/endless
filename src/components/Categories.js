import React, { useState, useEffect } from 'react';
import '../App.css';
import { motion } from "framer-motion";
import { Link, Redirect } from 'react-router-dom';
import backTo from '../img/backTo.svg';
import roll from '../img/roll.svg';
import { useMediaQuery } from 'react-responsive';
//stylesy
import { ScrollDiv, SwitchDiv, RandButton, CategoriesHeader, BackToButton } from './styles/mainStyles';
import { H1, H5, UL, LI, PlaylistLink, P, RollImg, ImageLoader, BackPara, Loading } from './styles/CategoriesStyles';
import { Image } from "react-image-and-background-image-fade";

const Categories = ({ authKey }) => {

    const [cats, setCats] = useState([]);
    const [error, setError] = useState();
    const [red, setRed] = useState(false);
    const [randomNumb, setRandomNumb] = useState(null);

    const getRandomCategory = () => {
      let min = Math.ceil(0);
      let max = Math.floor(cats.length-1);
      setRandomNumb(Math.floor(Math.random() * (max - min + 1)) + min);
    };

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

    },[]);

    const isLaptop = useMediaQuery({
      query: '(min-width: 1024px)'
    });

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

          <CategoriesHeader>

            <BackToButton to='/'>
              {
                isLaptop ? <BackPara>Back</BackPara> : <img src={backTo} alt="Back" />
              }
            </BackToButton> 

            <span>
              <H1>Browse</H1>
              <H5>Choose or get random</H5>
            </span>

            <motion.div 
              whileTap={{ scale: 0.8 }}
              onClick={() => getRandomCategory()}
            >
              <RollImg src={roll} alt="roll"/>
            </motion.div>

          </CategoriesHeader>
            

              <ScrollDiv
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >

                <UL>
                  {cats.map((cat,idx) => { 
                  
                  return(
                      <LI key={idx}>

                        <PlaylistLink to={{ 
                          pathname: `/playlists/${cat.id}`,
                          search: `?name=${cat.name}`,
                        }}>
                          
                          <ImageLoader 
                            src={cat.icons[0].url} 
                            style={{ backgroundSize: 'cover',backgroundPosition: 'center top' }} 
                            width='100%'
                            height='100%'
                            isResponsive 
                            lazyLoad 
                          />
                          
                          <P>{cat.name}</P>

                        </PlaylistLink>  

                      </LI>
                  ) 
                  })}
                </UL>

              </ScrollDiv>

          </SwitchDiv>

      );
    }else{
      return(
        <Loading>Loading...</Loading>
      );
    }
}

export default Categories;