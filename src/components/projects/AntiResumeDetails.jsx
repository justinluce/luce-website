import React from 'react';
import { Typography } from '@mui/material';

export const AntiResumeDetails = () => {

    return (
        <div className='mainProjectContainer'>
            <Typography 
                variant='h4'
                textAlign={'center'}
                style={{ marginBottom: '10px' }}
            >
            <h4>Anti-Resume</h4>
            </Typography>
            <p style={{ textAlign: 'center', marginRight: '20px' }}>
                A bunch of (very funny) jokes crammed into one place.
            </p>
            <div className='downloadLinks'>
                <a href='https://www.justinlucedev.com/antiresume'>Hosted on this site</a>
            </div>
        </div>
    );
}