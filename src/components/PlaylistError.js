import React from 'react';
import { motion } from "framer-motion";
import { useLocation } from 'react-router-dom';
import { Button } from './styles/mainStyles'; 

const PlaylistError = () => {

    document.body.style="background: #f30909";

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    };
    let x = useQuery();
    x = x.get("name");

    return(
        <motion.div
          style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
          }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
        >
            <h1>ERROR</h1>
            <h3>"{x}" has no tracks now.
            <br />That's probably server issue</h3>
            <Button
                style={{marginTop: '12%'}}
                to='/categories'
            >
                Go Back
            </Button>

        </motion.div>
    )
};

export default PlaylistError;