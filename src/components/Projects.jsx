import React from 'react';
import { Typography } from '@mui/material';
import { FlexContainer } from '../shared/styled/FlexContainer';
import { Img } from '../shared/styled/Img';
import { useNavigate } from 'react-router-dom';

export const Projects = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/minesweeper');
    }

    return (
        <div style={{marginLeft: '10px', marginRight: '10px', marginTop: '10px', fontSize: '30px'}}>
            <Typography 
            variant='h1'
            textAlign={'center'}
            >
            Projects
            </Typography>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
                <img height={400} src='images/underConstruction2.png' alt='Page is under construction'/>
            </div>

            <FlexContainer flexDirection='row'>
                <div onClick={() => handleClick()}
                    style={{border: '2px solid black', width: '30%', height: '25%'}}>
                    Minesweeper
                    <Img src='/images/minesweeper.png' />
                </div>
            </FlexContainer>
        </div>
    );
}