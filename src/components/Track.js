import React, { useState, useRef, useEffect } from 'react';
import { pageTransition } from '../App';
import { motion, useAnimation  } from "framer-motion";
import { Cover, ArtTitle, Title, Artist, PlayButton, Controls, HeaderPlaylist, PlaylistName, ControlBar } from '../styles';
import pauseBut from '../img/pause.svg';
import playBut from '../img/play.svg';
import nextBut from '../img/next.svg';

import { Palette } from 'react-palette';


//import Marquee from 'react-css-marquee';

const Track = ({source, playName}) => {

    console.log(source);
    //console.log(playName);

    const [play, setPlay] = useState(true);
    const [trackNumber, setTrackNumber] = useState(0);

    // const [{data}, setURL] = usePalette(source[0].cover);

    // useEffect(() => {
    //     console.log(data);
    // },[data]);

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

    const handlePlayPause = () => {
        setPlay(play => !play);
        if(play){
            audioRef.current.pause();
        }else{
            audioRef.current.play();
        }
    };

    const wowUp = () => {
        if(trackNumber < 4){
          setTrackNumber(trackNumber => trackNumber + 1);
          setPlay(true);
        }
        controls.start();
      }

    const TrackStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '85vh',
        opacity: '1',
        transform: 'none',
        paddingBottom: '20px'
    };

    const titleStyle = {
        fontSize: '1.4rem',
        fontWeight: '500',
        color: '#000',
        textAlign: 'center',
        letterSpacing: '-1.23px',
        margin: '0px',
    }

    const controls = useAnimation();
    const variants = {
        
    };
    controls.start({
        opacity: 1,
        transition: { duration: 3 },
    });

    return(
        <motion.div
            style={TrackStyle}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
        >
            <div>
                <HeaderPlaylist>playing from playlist</HeaderPlaylist>
                <PlaylistName>{playName}</PlaylistName>
            </div>
            

            <audio src={source[trackNumber].preview} type="audio/mpeg" onCanPlay={fadeAudio} ref={audioRef} onEnded={wowUp}/>


            <motion.div
                style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
                animate={controls}
                exit={{ opacity: 0 }}
            >

                <Cover src={source[trackNumber].cover} alt='cover' />

                <Palette image={source[trackNumber].cover}>
                    {palette => {
                        console.log(palette);
                    }}
                </Palette>

            </motion.div>

            <ControlBar>

                <ArtTitle>
                    <Title key={source[trackNumber].name}>{source[trackNumber].name}</Title>
                    <Artist key={source[trackNumber].artist}>by {source[trackNumber].artist}</Artist>
                </ArtTitle>
                
                <div style={{ background: 'white', width: '0px', height: '2px', alignSelf: 'flex-start' }}></div>

                <Controls>
                    <motion.div whileTap={{ scale: 0.8 }} >
                        {play ? <img src={pauseBut} onClick={handlePlayPause} /> : <img src={playBut} onClick={handlePlayPause} />}
                    </motion.div>
                    
                    <motion.div whileTap={{ scale: 0.8 }} style={{position: 'absolute', right: '0', padding: '20px'}}>
                        <img src={nextBut} onClick={() => {wowUp(); controls.start();}} />
                    </motion.div>
                </Controls>

            </ControlBar>
            
        </motion.div>
    );
}

export default Track;