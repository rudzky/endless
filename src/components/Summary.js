import React, {useState, useEffect} from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TestDiv, TestHeader, TestContent, H3 } from './styles/TestStyles';

const Summary = () => {
    let location = useLocation();
    const [noData, setNoData] = useState(null); 
    const [data, setData] = useState([]);

    useEffect(() => {
        if(location.state === undefined){
            setNoData(true);
        }else{
            setNoData(false);
            let passingData = [];
            location.state.order.forEach((e,i) => {
                if(e === location.state.answers[i]){
                    passingData.push(i);
                }
            });
            setData(passingData);
        }
    },[]);

    return(
        <TestDiv
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
        >
            <TestHeader>
                <H3>You guessed {data.length} of 5 tracks</H3>
            </TestHeader>
            <TestContent>
                <ul>
                    <li>D</li>
                    <li>U</li>
                    <li>P</li>
                    <li>A</li>
                    <li>!</li>
                </ul>
            </TestContent>
        </TestDiv>
    )
};

export default Summary;