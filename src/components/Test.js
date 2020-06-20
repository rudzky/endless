import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Redirect} from 'react-router-dom';
import { 
    TestDiv, 
    TestHeader, 
    TestContent, 
    TestList, 
    TestListItem, 
    H3, 
    TestH5, 
    TestH6, 
    TestListDescribe, 
    Choosen, 
    TrackNumber,
    Progress,
    ItemDiv,
    ProgressDiv,
    CheckedWrapper,
    Img,
    HeadWrap
 } from './styles/TestStyles';

const Test = () => {
    let location = useLocation();
    const audioRef = useRef(null);
    const shuffle = array => {
        return array.sort(() => Math.random() - 0.5);
    };

    const [error, setError] = useState();
    const [tracks, setTracks] = useState(shuffle([0,1,2,3,4]));
    const [kol, setKol] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [bar, setBar] = useState(0);

    const [play, setPlay] = useState(true);

    const updateAnswers = (idx,event) => {
        event.persist();

        if(kol === answers.length){
            if(kol < 4){
                setKol((kol) => kol+1);  
            }
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

    useEffect(()=>{
        
        if(location.state === undefined){
            setError(true);
        }else{
            setError(false);
            if(!setError) audioRef.current.play();
        }
    },[location.state]);
    
    return(

        <TestDiv
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
        >

        {
            (error === true) && <Redirect to="/categories" />
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

        {   (error === false) && (

            <>

            <TestHeader>
                <HeadWrap>
                    <TrackNumber>Track {kol+1}/5</TrackNumber>
                    <H3>Choose the right song title</H3>
                </HeadWrap>

                <audio 
                    src={location.state[tracks[kol]].preview} 
                    autoPlay 
                    onPlay={()=>setPlay(true)} 
                    onPause={()=>setPlay(false)} 
                    onTimeUpdate={(e)=>updateBar(e)} 
                    ref={audioRef}
                />

                <ProgressDiv>
                    <Progress id="seekbar" value={bar} max="1"></Progress>
                </ProgressDiv>
            </TestHeader>

            <TestContent>
                <TestList>
            {
                location.state.map((el,index)=>{
                    return(
                        <TestListItem key={index}>
                            <ItemDiv
                                onClick={(event) => updateAnswers(index, event) } 
                            >
                                <Img src={el.cover} />
                                <TestListDescribe>
                                    <TestH5>{el.name}</TestH5>
                                    <TestH6>{el.artist}</TestH6>
                                </TestListDescribe>
                                <CheckedWrapper>
                                    { 
                                        checkedTracks(index).map((el,idx) => {
                                            return <Choosen key={idx} />
                                        }) 
                                    }
                                </CheckedWrapper>
                            </ItemDiv>
                        </TestListItem>
                    )
                })
            }
            </TestList>
            </TestContent>
            
            </>
            )
        }

        </TestDiv>
    );
}

export default Test;