import React, { useState, useRef, useEffect } from 'react';
import { pageTransition } from '../App';
import { withRouter, Redirect, useLocation } from 'react-router-dom';
import { motion, useAnimation  } from "framer-motion";
import pauseBut from '../img/pause.svg';
import playBut from '../img/play.svg';
import nextBut from '../img/next.svg';
import tickBut from '../img/tick.svg';

//stylesy
import { Cover, ArtTitle, Title, Artist, PlayButton, Controls, HeaderPlaylist, PlaylistName, ControlBar } from './styles/TrackStyles';
import { BackToButton } from './styles/mainStyles';
import backTo from '../img/backTo.svg';

import { Image } from "react-image-and-background-image-fade";

import { Palette } from 'react-palette';




//import Marquee from 'react-css-marquee';

const Track = ({ source, playName, p1, p2 }) => {

    //const {p1, p2} = linkBack;

    const [play, setPlay] = useState(true);
    const [trackNumber, setTrackNumber] = useState(0);
    const [doTest, setDoTest] = useState(false);
    const [bar, setBar] = useState(0);
    const [back, setBack] = useState(false);
    

    const fadeAudio = (e) => {

        //console.log(e);
        e.target.play();

        const sound = e.target;

        sound.volume = 0;
    
        let fadePoint = sound.duration - 4; 
        let fadePointIn = 4; 

        const fadeAudioIn = setInterval(function () {
    
          if ((sound.currentTime < fadePointIn) && (sound.volume < 0.9)) {
              sound.volume += 0.1;
          }
          if (sound.volume === 1) {
              clearInterval(fadeAudioIn);
          }
        }, 400);
    
        const fadeAudioOut = setInterval(function () {
    
            if ((sound.currentTime >= fadePoint) && (sound.volume > 0.1)) {
                sound.volume -= 0.1;
            }
            if (sound.volume === 0.1) {
                clearInterval(fadeAudioOut);
            }
        }, 500);
    
    };

    const audioRef = useRef(null);

    //if(unMount) audioRef.current.pause();

    const handlePlayPause = () => {
        setPlay(play => !play);
        if(play){
            audioRef.current.pause();
        }else{
            audioRef.current.play();
        }
    };

    const wowUp = () => {
        if(trackNumber === 4){
            audioRef.current.addEventListener('pause',function() {
                setDoTest(true);
            });
            audioRef.current.pause();
        }else{
          setTrackNumber(trackNumber => trackNumber + 1);
          setPlay(true);
          controls.start();
        }
      }

    const TrackStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '100vh',
        opacity: '1',
        transform: 'none',
        padding: '5% 0px'
    };

    const controls = useAnimation();
    const variants = {
        
    };
    controls.start({
        opacity: 1,
        transition: { duration: 3 },
    });

    const updateBar = (e) => {
        setBar(parseFloat(e.target.currentTime / e.target.duration).toFixed(2));
    };

    return(
        <motion.div
            style={TrackStyle}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
        >

            <div
                style={{
                    position: 'absolute',
                    top: '5%',
                    left: '10%'
                }}
                // to={{
                //     pathname: p1 || "/categories",
                //     search: p2
                // }}
                onClick={() => {
                    // audioRef.onpause = (event) => {
                    //     setBack(true);
                    // };
                    if(!play){
                        setBack(true);
                    }
                    audioRef.current.addEventListener('pause',function() {
                        setBack(true);
                    });
                    audioRef.current.pause();
                }}
            >
                <img src={backTo} alt="Back" />
            </div>

            {
                back && <Redirect to={{ pathname: p1 || "/categories", search: p2 }} />
            }

            {
                doTest && <Redirect to={{ pathname: "/check", state: source }} />
            }

            <div>
                <HeaderPlaylist>playing from playlist</HeaderPlaylist>
                <PlaylistName>{playName}</PlaylistName>
            </div>
            
            <audio 
                src={source[trackNumber].preview} 
                type="audio/mpeg" 
                onCanPlay={fadeAudio} 
                ref={audioRef} 
                onPause={()=>setPlay(false)} 
                onPlay={()=>setPlay(true)} 
                onTimeUpdate={(e)=>updateBar(e)} 
                onEnded={() => wowUp()} 
            />

            <motion.div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%'
                }}
                animate={controls}
                exit={{ opacity: 0 }}
            >

                <Image 
                    src={source[trackNumber].cover} 
                    style={{ backgroundSize: 'cover',backgroundPosition: 'center top' }} 
                    width='100%'
                    height='100%'
                    isResponsive 
                    lazyLoad 
                />

                <Palette src={source[trackNumber].cover}>
                    {palette => {
                        document.body.style=`background: ${palette.data.darkVibrant}`;
                    }}
                </Palette>

            </motion.div>

            <ControlBar>

                <ArtTitle>
                    <Title key={source[trackNumber].name}>{source[trackNumber].name}</Title>
                    <Artist key={'@' + source[trackNumber].artist}>by {source[trackNumber].artist}</Artist>
                </ArtTitle>
                
                <div style={{ background: 'white', width: '0px', height: '2px', alignSelf: 'flex-start' }}></div>

                <progress id="seekbar" value={bar} max="1" style={{width: "400px"}}></progress>

                <Controls>
                    <motion.div onPan={{ scale: 0.8 }} onClick={handlePlayPause} >
                        {play ? <img src={pauseBut} /> : <img src={playBut} />}
                    </motion.div>
                    
                    <motion.div onClick={wowUp} whileTap={{ scale: 0.8 }} style={{position: 'absolute', right: '0', padding: '20px'}}>
                        {
                            (trackNumber === 4) 
                            ? <img src={tickBut} />
                            : <img src={nextBut} /> 
                        }
                    </motion.div>
                </Controls>

            </ControlBar>
            
        </motion.div>
    );
}

// export default withRouter(Track);
export default withRouter(Track);

