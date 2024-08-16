import React from 'react';
import { Typography } from '@mui/material';

export const ChessDetails = () => {

    return (
        <div className='mainProjectContainer'>
            <Typography 
                variant='h4'
                textAlign={'center'}
                style={{ marginBottom: '10px' }}
            >
            <h4>Chess</h4>
            </Typography>
            <div className='downloadLinks'>
                <a href='https://www.justinlucedev.com/chessSingle'>Hosted on this site</a>
            </div>
        </div>
    );
}