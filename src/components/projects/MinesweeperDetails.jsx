import React from 'react';
import { Typography } from '@mui/material';

export const MinesweeperDetails = () => {

    return (
        <div className='mainProjectContainer'>
            <Typography 
                variant='h4'
                textAlign={'center'}
                style={{ marginBottom: '10px' }}
            >
            <h4>Minesweeper</h4>
            </Typography>
            <div className='downloadLinks'>
                <a href='https://www.justinlucedev.com/minesweeper'>Hosted on this site</a>
            </div>
        </div>
    );
}