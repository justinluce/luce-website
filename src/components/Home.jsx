import React from 'react';
import { Img } from '../shared/styled/Img';
import { FlexContainer } from '../shared/styled/FlexContainer';

export const Home = () => {
    return (
        <div>
        <FlexContainer flexDirection='column' alignItems="flex-start" justifyContent='flex-start' width='auto'>
            <h1>
                Justin Luce
                <a href='https://github.com/justinluce'>
                    <img 
                        alt="GitHub Logo"
                        width={25}
                        height={25}
                        src="/images/github-mark.png"
                    />
                </a>
            </h1>
            <Img 
                src="/images/Headshot.jpg"
                alt="Justin Luce"
                width="200"
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
                (including this website!), and video game development.&nbsp;
                <strong>This site is currently a work-in-progress</strong>, so it's mostly just for music currently.
            </p>
            <footer>
                To contact me, please do so at&nbsp;
                <a href="mailto: jpluce99@gmail.com">
                jpluce99@gmail.com
                </a>
            </footer>
        </FlexContainer>
        </div>
    );
}