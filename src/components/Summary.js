import React, {useState, useEffect} from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
//styles
import { 
    ColorizedDiv, 
    H3, 
    H1, 
    Button, 
    AnswersWrapper, 
    AnswerDiv, 
    ButtonWrap,
    TestDiv,
    LapWrap,
    TestHeader
} from './styles/SummaryStyles';

//svgs
import happy from '../img/happy.svg';
import sad from '../img/sad.svg';
import neutral from '../img/neutral.svg';
import love from '../img/love.svg';
import heart from '../img/heart.svg';
import neg from '../img/x.svg';
import pos from '../img/tick.svg';

const Summary = () => {
    let location = useLocation();
    const [noData, setNoData] = useState(null); 
    const [data, setData] = useState([]);
    const [background, setBackground] = useState("#000");
    const [icon, setIcon] = useState('');

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
            let result = passingData.filter(e => e).length;
            setData(passingData);

            switch(result)
            {
                case 0: 
                    setIcon(sad); 
                    setBackground("#DD0710");
                    break;
                case 1:
                    setIcon(neutral);
                    setBackground("#DD0710");
                    break;
                case 2:
                    setIcon(sad);
                    setBackground("#D18710");
                    break;
                case 3:
                    setIcon(happy); 
                    setBackground("#00F5F9");
                    break;
                case 4:
                    setIcon(love);
                    setBackground("#7E97FC");
                    break;
                case 5:
                    setIcon(heart);
                    setBackground("#1DB954");
                    break;
            }

        }
    },[]);

    const isLaptop = useMediaQuery({
        query: '(min-width: 1024px)'
    });

    return(
        <TestDiv
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            transition={{ duration: 0.3 }}
        >

            {   (noData) && (
                <Redirect to="/categories" />
            )}

            <LapWrap>
            
                <TestHeader>
                    <H1>Results</H1>

                    {   !isLaptop && (

                        <ColorizedDiv bg={background}>
                        
                            <img src={icon} alt="icon"/>
                        
                        </ColorizedDiv>

                        )
                    }

                    <H3>You guessed {data.filter(e => e).length} of 5 tracks</H3>
                </TestHeader>

                <AnswersWrapper>

                    {
                        (data.length !== 0) && (
                            data.map((e, i) => e ? <AnswerDiv key={i} col="#1DB954"><img src={pos} alt="tick"/></AnswerDiv> : <AnswerDiv col="#DD0710" key={i}><img src={neg} alt="x"/></AnswerDiv>)
                        )
                    }

                </AnswersWrapper>

                <ButtonWrap>

                    <Button to="/categories">
                        Try again
                    </Button>

                    <Button to="/">
                        Home
                    </Button>

                </ButtonWrap>

            </LapWrap>

            {   isLaptop && (

                <ColorizedDiv bg={background}>

                    <img src={icon} alt="icon"/>

                </ColorizedDiv>

                )
            }

        </TestDiv>
    )
};

export default Summary;
