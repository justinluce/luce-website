import React from 'react';
import { Typography } from '@mui/material';

export const WebsiteDetails = () => {

    return (
        <div className='mainProjectContainer'>
            <Typography 
                variant='h4'
                textAlign={'center'}
                style={{ marginBottom: '10px' }}
            >
            <h4>Portfolio Website</h4>
            </Typography>
            <div className='downloadLinks'>
                <a href='https://github.com/justinluce/luce-website'>Github Repository</a>
            </div>
        </div>
    );
}