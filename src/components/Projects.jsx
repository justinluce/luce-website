import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { FlexContainer } from '../shared/styled/FlexContainer';
import { Img } from '../shared/styled/Img';
import { MinesweeperDetails } from './projects/MinesweeperDetails';
import { WebsiteDetails } from './projects/WebsiteDetails';
import { PennyBotDetails } from './projects/PennyBotDetails';


export const Projects = () => {
    const [projectOpen, setProjectOpen] = useState(null);

    const handleClick = (path) => {
        switch (path) {
            case 'minesweeper':
                setProjectOpen('minesweeper');
                break;
            case 'website':
                setProjectOpen('website');
                break;
            case 'penny':
                setProjectOpen('penny');
                break;
        }
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
                <div onClick={() => handleClick('minesweeper')}
                    style={{border: '2px solid black', width: '30%', height: '25%'}}>
                    <div style={{borderBottom: '2px solid black'}}>Minesweeper</div>
                    <Img src='/images/minesweeper.png' />
                </div>
                <div onClick={() => handleClick('website')}
                    style={{border: '2px solid black', width: '30%', height: '25%'}}>
                    <div style={{borderBottom: '2px solid black'}}>Portfolio Website</div>
                    <Img src='/images/website.png' />
                </div>
                <div onClick={() => handleClick('penny')}
                    style={{border: '2px solid black', width: '30%', height: '25%'}}>
                    <div style={{borderBottom: '2px solid black'}}>Penny Bot</div>
                    <Img src='/images/website.png' />
                </div>
            </FlexContainer>
            {projectOpen === 'minesweeper' && <MinesweeperDetails />}
            {projectOpen === 'website' && <WebsiteDetails />}
            {projectOpen === 'penny' && <PennyBotDetails />}
        </div>
    );
}