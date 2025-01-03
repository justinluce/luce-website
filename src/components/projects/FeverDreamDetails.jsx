import React from 'react';
import { Typography } from '@mui/material';

export const FeverDreamDetails = () => {

    return (
        <div>
            <Typography 
                variant='h4'
                textAlign={'center'}
                style={{ marginBottom: '30px' }}
            >
            <h4>Fever Dream 1999</h4>
            </Typography>
            <p style={{ textAlign: 'center', marginRight: '20px' }}>
            Justin Luce's Fever Dream 1999 is a collection of parody games about the creative process. 
            Justin will create games for you to play, and you will provide feedback for him.
            <br /><br />
            Currently version 0.1.5.
            </p>
            <br />
            <div className='downloadLinks'>
                <h4>Download Links</h4>
                Direct Download (coming soon)
                <a href='https://2x4printerpaper.itch.io'>Itch.io</a>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px', marginBottom: '50px'}}>
                <img height={400} src='images/feverDreamDetails.webp' alt='A small, square house with a mountain in the background' title='Fever Dream'/>
            </div>
        </div>
    );
}