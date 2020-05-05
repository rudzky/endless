import React, { useState, useEffect } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TestDiv, TestHeader, TestContent, TestList } from './styles/TestStyles';
import { RandButton } from './styles/mainStyles';

const Test = () => {
    let location = useLocation();

    const [error, setError] = useState(false);
    const [tracks, setTracks] = useState();
    const nums = [0,1,2,3,4];

    useEffect(()=>{
        setTracks(shuffle(nums));
        if(location.state === undefined){
            setError(true);
        }
    },[]);

    const shuffle = array => {
        return array.sort(() => Math.random() - 0.5);
    };
    
    return(
        <TestDiv
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
        >

        {
            (error===null) && <Redirect to="/categories" />
        }

        <TestHeader>
            <h1>Track /5</h1>
            <h3>Choose the right song title</h3>
            <motion.div 
                whileTap={{ scale: 0.8 }}
                style={{ width: '50%', display: 'flex', justifyContent: 'center' }}
              >
                <RandButton>Pause</RandButton>
              </motion.div>
        </TestHeader>

        <TestContent>
            <TestList>
            {
                location.state.map((el)=>{
                    return(
                        <li>
                            <img src={el.cover} alt="cover"/>
                            {el.name}
                        </li>
                    )
                })
            }
            </TestList>
        </TestContent>

        
        </TestDiv>
    );
}

export default Test;