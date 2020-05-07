import React, { useState, useEffect } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TestDiv, TestHeader, TestContent, TestList, TestListItem, TestListImg, TestH3, H3, TestH5, TestH6, TestListDescribe, Choosen } from './styles/TestStyles';
import { RandButton } from './styles/mainStyles';

import ProgressBar from './ProgressBar';

const Test = () => {
    let location = useLocation();

    const shuffle = array => {
        return array.sort(() => Math.random() - 0.5);
    };

    const [error, setError] = useState(false);
    const [tracks, setTracks] = useState(shuffle([0,1,2,3,4]));
    const [kol, setKol] = useState(0);
    const [answers, setAnswers] = useState([]);

    const [play, setPlay] = useState(false);

    useEffect(()=>{
        //setTracks(shuffle(nums));
        if(location.state === undefined){
            setError(true);
        }
    },[]);

    const updateAnswers = (idx,event) => {
        //console.log(idx);
        event.persist();
        if(kol < 4){
          setKol((kol) => kol+1);  
        }
        setAnswers([...answers,idx]);
    };

    // console.log(tracks);
    // console.log(kol);
    console.log(location.state);
    
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
        <h1 style={{fontSize: '2.4rem'}}>Track {kol+1}/5</h1>
            <H3>Choose the right song title</H3>

            <audio src={location.state[tracks[kol]].preview} autoPlay onPlay={(play)=>setPlay(play)} onPause={(play)=>setPlay(!play)} />

            <motion.div 
                whileTap={{ scale: 0.8 }}
                style={{ width: '50%', display: 'flex', justifyContent: 'center' }}
              >
                {/* <RandButton style={{ margin: '20px 0px 0px 0px', display: 'none' }}>Pause</RandButton> */}
                
                <ProgressBar wth="100%" str={play} stp={!play} on={kol}/>

              </motion.div>
        </TestHeader>

        <TestContent>
            <TestList>
            <TestH3>Tracks</TestH3>
            {
                location.state.map((el,index)=>{
                    return(
                        <TestListItem key={index}>
                            <motion.div
                                whileTap={{ translateX: 10 }}
                                style={{ display: 'flex' }}
                                onClick={(event) => updateAnswers(index, event) } 
                            >
                                <TestListImg src={el.cover} alt="cover"/>
                                <TestListDescribe>
                                    <TestH5>{el.name}</TestH5>
                                    <TestH6>{el.artist}</TestH6>
                                </TestListDescribe>
                                { answers.includes(index) && (<Choosen>Choosen</Choosen>) }
                            </motion.div>
                        </TestListItem>
                    )
                })
            }
            </TestList>
        </TestContent>

        
        </TestDiv>
    );
}

export default Test;