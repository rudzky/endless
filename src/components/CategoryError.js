import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from './styles/mainStyles'; 
import {H1, H3, ErrorWrap} from './styles/ErrorStyles';

const CategoryError = () => {

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    };
    let x = useQuery();
    x = x.get("name");

    return(
        <ErrorWrap
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
        >
            <H1>ERROR</H1>
            <H3>"{x}" has no playlists now.
            <br />That's probably server issue</H3>
            <Button
                style={{marginTop: '12%'}}
                to='/categories'
            >
                Go Back
            </Button>

        </ErrorWrap>
    )
};

export default CategoryError;