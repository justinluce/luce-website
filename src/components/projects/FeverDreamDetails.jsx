import React from 'react';
import { Typography } from '@mui/material';

export const FeverDreamDetails = () => {

    return (
        <div className='mainProjectContainer'>
            <Typography 
                variant='h4'
                textAlign={'center'}
                style={{ marginBottom: '30px' }}
            >
            <h4>Justin Luce's Fever Dream 1999</h4>
            </Typography>
            <p style={{ textAlign: 'center' }}>
                A video game comprised of a bunch of small mini-games, each one being a parody of a different genre.
                <br /><br />
                Currently version 0.2.0.
            </p>
            <br />
            <div className='downloadLinks'>
                <h4>Download Links</h4>
                Direct Download (coming soon)
                <a href='https://2x4printerpaper.itch.io'>Itch.io</a>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
                <img height={400} src='images/feverDreamDetails.png' alt='A small, square house with a mountain in the background' title='Fever Dream'/>
            </div>
        </div>
    );
}