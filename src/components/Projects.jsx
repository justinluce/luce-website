import React from 'react';
import { Typography } from '@mui/material';

export const Projects = () => {
    return (
        <div>
            <Typography 
            variant='h2'
            textAlign={'center'}
            >
            Projects
            </Typography>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
                <img height={400} src='images/underConstruction2.png' />
            </div>
        </div>
    );
}