import React from 'react';
import { Img } from '../shared/styled/Img';
import { FlexContainer } from '../shared/styled/FlexContainer';
import { Typography } from '@mui/material';

export const Home = () => {
    return (
        <div style={{fontSize: '30px', display: 'flex', flexDirection: 'column'}}>
        {/*//!TODO: Put styling elsewhere*/}
        <FlexContainer style={{marginTop: '0'}} flexDirection='column' alignItems="flex-start" justifyContent='flex-start' width='auto'>
            <Typography variant='h1'>
                Justin Luce
                <a href='https://github.com/justinluce'>
                    <img 
                        alt="GitHub Logo"
                        width={50}
                        height={50}
                        src="/images/github-mark.png"
                    />
                </a>
            </Typography>
            <Img 
                src="/images/headshot.jpg"
                alt="Justin Luce"
                width="400"
                clipPath="circle()"
            />
            <p>
                Hello! I'm Justin Luce. I am currently an instructor for Midland's Code Academy 
                that is focused on full-stack web development. I teach the Re-Entry Program, 
                a coding bootcamp designed for incarcerated individuals, 
                as well as an online course. I have created multiple video games 
                using Unity, Godot, and Gamemaker Studio. 
                I also have extensive experience working with Java, JavaScript, and C#.
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
                <a href="mailto: jpluce99@gmail.com">
                jpluce99@gmail.com
                </a>
            </footer>
        </div>
    );
}