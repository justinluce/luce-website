import React, { useEffect } from 'react';
import { Img } from '../shared/styled/Img';
import { FlexContainer } from '../shared/styled/FlexContainer';
import { Typography } from '@mui/material';

export const Home = () => {

    // Preloading slows down the loading of the home page,
    // but its effects are probably negligable.
    useEffect(() => {
        const constructionPreload = new Image();
        constructionPreload.src = 'images/underConstruction2.png';
        const bandcampPreload = new Image();
        bandcampPreload.src = '/images/bandcampLogo.png';
        const spotifyPreload = new Image();
        spotifyPreload.src = '/images/spotifyLogo.png';
        const applePreload = new Image();
        applePreload.src = `/images/appleMusicLogo.png`;
        const catPreload = new Image();
        catPreload.src = '/images/georgeBehindPlant.jpg';
        const outOfMyMind = new Image();
        outOfMyMind.src = '/images/outOfMyMind.jpg';
        const spontaneousRecovery = new Image();
        spontaneousRecovery.src = '/images/spontaneousRecovery.jpg';
        const lethological = new Image();
        lethological.src = '/images/lethological.jpg';
        const welcomeToTheAether = new Image();
        welcomeToTheAether.src = '/images/welcomeToTheAether.jpg';
    }, []);

    return (
        <div style={{fontSize: '30px', display: 'flex', flexDirection: 'column'}}>
        {/*//!TODO: Put styling elsewhere*/}
        <FlexContainer style={{marginTop: '0'}} flexDirection='column' alignItems="flex-start" justifyContent='flex-start' width='auto'>
            <Typography variant='h1'>
                Justin Luce
                <a href='https://github.com/justinluce'>
                    <img 
                        title="GitHub Logo"
                        alt="GitHub Logo"
                        width={50}
                        height={50}
                        src="/images/github-mark.png"
                    />
                </a>
            </Typography>
            <Img 
                src="/images/luceHeadshot.jpg"
                title="Justin Luce"
                alt="Justin Luce Headshot."
                width="400"
                clipPath="circle()"
            />
            <p>
                Hello! I'm Justin Luce. I am currently an instructor for Midland's Code Academy 
                that is focused on full-stack web development. I teach the Re-Entry Program, 
                a coding bootcamp designed for incarcerated individuals, 
                as well as an online course. I have created multiple video games 
                using Unity, Godot, and Gamemaker Studio. 
                I also have extensive experience working with JavaScript, Java, and C#.
            </p>
            <p>
                This is my website, where you can find a collection of things I've made.
                This ranges from coding projects, to music, to web development 
                (including this website!), and video game development. There is also Cat.&nbsp;
                <strong>This site is currently a work-in-progress</strong>, so it's mostly just for music right now.
            </p>
        </FlexContainer>
            <footer style={{marginTop: '50px', textAlign: 'center'}}>
                To contact me, please do so at&nbsp;
                <a href="mailto: justinlucedev@gmail.com">
                justinlucedev@gmail.com
                </a>
            </footer>
        </div>
    );
}