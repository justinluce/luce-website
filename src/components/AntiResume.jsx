import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { AntiResumeContent } from './AntiResumeContent';

const StartButton = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
    };

    return (
        <div className='antiResumeStart'>
            {!isClicked && (
                <div className='antiResumeStartAction'>
                    <button className='antiResumeStartButton' onClick={handleClick}>
                        Click to start
                    </button>
                </div>
            )}
            {isClicked && <AntiResumeContent />}
        </div>
    );
};

export const AntiResume = () => {
    const [isPinkMode, setIsPinkMode] = useState(false);

    return (
        <div className={`antiContainer ${isPinkMode ? 'pinkMode' : ''}`}>
            <div className='antiResumeThemeToggleRow'>
                <label className='antiResumeThemeToggle' htmlFor='anti-resume-pink-mode'>
                    <span className='antiResumeThemeToggleLabel'>Pink Mode</span>
                    <input
                        id='anti-resume-pink-mode'
                        type='checkbox'
                        checked={isPinkMode}
                        onChange={() => setIsPinkMode((currentValue) => !currentValue)}
                    />
                    <span className='antiResumeThemeToggleTrack' aria-hidden='true'>
                        <span className='antiResumeThemeToggleThumb' />
                    </span>
                </label>
            </div>
            <div className='antiResumeHero'>
                {isPinkMode && <p className='antiResumePinkBanner'>PINK MODE ENABLED :)</p>}
                <Typography
                    variant='h1'
                    textAlign={'center'}
                    className='antiResumeTitle'
                >
                    Anti-Resume
                </Typography>
                <p className='antiResumeIntro'>
                    Welcome to the Anti-Resume. This is a page intentionally designed 
                    to showcase web design practices that you SHOULD NOT do.
                </p>
                <p className='antiResumeIntro antiResumeIntroMuted'>
                    If this page annoys you, it is functioning correctly. If you're
                    looking for an actual resume, visit my&nbsp;
                    <a href="https://www.linkedin.com/in/justin-luce-77260419a">LinkedIn page</a>.
                </p>
            </div>
            <StartButton />
        </div>
    );
};
