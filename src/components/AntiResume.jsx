import React, {useState} from 'react';
import {AntiResumeContent} from './AntiResumeContent';
import { Typography } from '@mui/material';

const StartButton = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
    }

    return (
        <div style={{fontSize: '30px'}}>
            {!isClicked && (
                <button style={{width: '125px', height: '40px', }} onClick={handleClick}>Click to start</button>
            )}
            {isClicked && <AntiResumeContent />}
        </div>
    )
}

export const AntiResume = () => {
    return (
        <div style={{marginLeft: '10px', marginRight: '10px', marginTop: '10px', fontSize: '30px'}}>
            <Typography 
            variant='h1'
            textAlign={'center'}
            >
            Anti-Resume
            </Typography>
            <p style={{marginLeft: '10px', marginRight: '10px'}}>
                Welcome to the Anti-Resume. This is a page designed to showcase
                web design practices that you SHOULD NOT do.
                <br />
                <br />
                If this page annoys you, that means it's working as intended.
                If you're looking for an actual resume, I would recommend my&nbsp;
                <a href="https://www.linkedin.com/in/justin-luce-77260419a">LinkedIn Page</a>.
                <br />
                <br />
            <StartButton />
            </p>
        </div>
    );
}