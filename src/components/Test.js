import React, { useState, useEffect } from 'react';
import { useLocation, Redirect} from 'react-router-dom';
import { motion } from 'framer-motion';
import { TestDiv, TestHeader, TestContent, TestList, TestListItem, TestListImg, TestH3, H3, TestH5, TestH6, TestListDescribe, Choosen } from './styles/TestStyles';
import { RandButton } from './styles/mainStyles';

import ProgressBar from './ProgressBar';

const Test = () => {
    let location = useLocation();

    console.log('KOMPONENT TEST WYRENDEROWANY');

    const shuffle = array => {
        return array.sort(() => Math.random() - 0.5);
    };

    const [error, setError] = useState(false);
    const [tracks, setTracks] = useState(shuffle([0,1,2,3,4]));
    const [kol, setKol] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [bar, setBar] = useState(0);

    const [play, setPlay] = useState(true);

    useEffect(()=>{
        if(location.state === undefined){
            setError(true);
        }
    },[location.state]);

    const updateAnswers = (idx,event) => {
        event.persist();
        if(kol === answers.length){
            if(kol < 4){
            setKol((kol) => kol+1);  
            }
            console.log(kol+1);
            setAnswers([...answers,idx]);
        }
    };

    const updateBar = (e) => {
        setBar(parseFloat(e.target.currentTime / e.target.duration).toFixed(2));
    };

    const checkedTracks = (idx) => {
        let count = answers.filter(x => x === idx);
        return count;
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

        {
            (answers.length === 5) && 
            <Redirect to={{ 
                pathname: "/summary/", 
                state: { 
                    order: tracks,
                    answers: answers
                } 
            }} />
        }

        <TestHeader>
        <h1 style={{fontSize: '2.4rem'}}>Track {kol+1}/5</h1>
            <H3>Choose the right song title</H3>

            <audio src={location.state[tracks[kol]].preview} autoPlay onPlay={()=>setPlay(true)} onPause={()=>setPlay(false)} onTimeUpdate={(e)=>updateBar(e)} />

            <motion.div 
                style={{ width: '50%', display: 'flex', justifyContent: 'center' }}
            >
                <progress id="seekbar" value={bar} max="1" style={{width: "400px"}}></progress>
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
                                {/* { answers.includes(index) && (<Choosen>Choosen</Choosen>) } */}
                                { 
                                    checkedTracks(index).map((el,idx) => {
                                        return <Choosen key={idx} />
                                    }) 
                                }
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