import React, { useState, useEffect } from 'react';

const Timer = () => {
    
    const secs = [3,2,1,'Go!'];
    const [sc, setSc] = useState('');

    console.log('dupa');


    
    const int = function(){
        for(let i=0; i<secs.length+4; i++){
            setTimeout(() => {
                console.log(secs[i]);
            },1000);
        }
    };

    useEffect(() => {
        int();
    },[]);

    return(
        <div>
            <h1>{ sc }</h1>
        </div>
    );
}

export default Timer;

