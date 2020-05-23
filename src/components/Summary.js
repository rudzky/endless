import React, {useState, useEffect} from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TestDiv, TestHeader, TestContent, H3 } from './styles/TestStyles';
import { AnswerBlock, List } from './styles/SummaryStyles';

const Summary = () => {
    let location = useLocation();
    const [noData, setNoData] = useState(null); 
    const [data, setData] = useState([]);

    useEffect(() => {
        if(location.state === undefined){
            setNoData(true);
        }else{
            setNoData(false);
            let passingData = Array(5).fill(false);
            location.state.order.forEach((e,i) => {
                if(e === location.state.answers[i]){
                    passingData[i] = true;
                }
            });
            setData(passingData);
        }
    },[]);

    return(
        <TestDiv
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            transition={{ duration: 0.3 }}
        >
            <TestHeader>
                <H3>You guessed {data.length} of 5 tracks</H3>
            </TestHeader>
            <TestContent>
                <List>
                    {
                        data.map((e) => {
                            if(e){
                                return <Answer correct />;
                            }else{
                                return <Answer />;
                            }
                        })
                    }
                </List>
            </TestContent>
        </TestDiv>
    )
};

export default Summary;

const Answer = ({correct}) => {
    return(
        <AnswerBlock>
            <h2>
                {
                    correct ? "GOOD" : "Bad" 
                }
            </h2>
        </AnswerBlock>
    );
};