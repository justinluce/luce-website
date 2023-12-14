import React from 'react';
import { Typography } from '@mui/material';

export const WebsiteDetails = () => {

    return (
        <div style={{marginLeft: '10px', marginRight: '10px', marginTop: '10px', fontSize: '30px'}}>
            <Typography 
            variant='h4'
            textAlign={'center'}
            >
            Website Details
            </Typography>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
                <img height={400} src='images/underConstruction2.png' alt='Page is under construction'/>
            </div>
        </div>
    );
}