import { useEffect, useRef, useState } from 'react';
import '../shared/styled/LandingPage.css';
import { Link } from 'react-router-dom';
import { Headshot } from './Headshot';

export const LandingPage = () =>  {
    const [pHeight, setPheight] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
    const [shouldAnimate, setShouldAnimate] = useState(
        JSON.parse(localStorage.getItem('shouldAnimate')) || {
            value: true,
            timestamp: new Date().getTime()
        }
    );
    const pRef = useRef(null);

    // Couldn't figure out how to update the height with CSS so whatever fml
    useEffect(() => { 
        const time = Date.now();
        const sevenDaysMS = 604800000;
        const hasExpired = time - shouldAnimate.timestamp >= sevenDaysMS;
        // If they've never visited the website, or if they haven't visited in 7 days,
        // play the landing page animation and reset the timer
        if (shouldAnimate.value || hasExpired) {
            const newState = { value: true, timestamp: time };
            setShouldAnimate(newState);
            localStorage.setItem('shouldAnimate', JSON.stringify({ ...newState, value: false }));
        } 
        const updateHeight = () => {
            if (pRef.current) {
                setPheight(pRef.current.clientHeight);
            }
        }

        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 900);
        };

        updateHeight();
        checkScreenSize();

        window.addEventListener('resize', updateHeight);
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', updateHeight);
            window.removeEventListener('resize', checkScreenSize);
        }
    }, []);

    return (
        <>
            <div id="menu" className={shouldAnimate.value === true ? 'animate-landing-text' : ''}>
                {/* <ThemeIcon /> */}
                <div id='about-paragraph' ref={pRef}>
                    <h1>Justin Luce</h1>
                    <Headshot />
                    <div id='logo-container'>
                        <div id='resume-container'>
                            <a href='/images/LuceResume.pdf' target='_blank' rel='noopener noreferrer' className='bubble-hover' id='resume'>
                                <img    
                                    id='resume-img'
                                    title="Justin Luce's Resume"
                                    alt="Justin Luce's Resume"
                                    src='/images/resume.svg'
                                    style={{ filter: 'invert(100%)' }}
                                />
                            </a>
                        </div>
                        <a href='https://github.com/justinluce' target='_blank' rel='noopener noreferrer' className='bubble-hover' id='github-logo'>
                            <img
                                title="Justin Luce's GitHub"
                                alt="Justin Luce's GitHub"
                                src="/images/github-mark-white.png"
                            />
                        </a>
                    </div>
                    <p>
                        Hello! I'm Justin Luce. I am currently the director for Midland University's Code Academy 
                        that is focused on full-stack web development. I teach the Re-Entry Program, 
                        a coding bootcamp designed for incarcerated individuals.
                        I have created multiple video games using Unity and Gamemaker Studio. 
                        I also have extensive experience working with JavaScript/TypeScript, Java, and C#/.NET.
                    </p>
                    <br />
                    <p>
                        This is my website, where you can find a collection of things I've made.
                        This ranges from coding projects, to music, to web development 
                        (including this website!), and video game development. There is also <i>Cat</i>.&nbsp;
                        <strong>This site is perpetually a work-in-progress</strong>, 
                        as I'll continue creating new things over time.
                    </p>
                </div>
                <div id="menu-background-pattern"></div>
                <div id="menu-background-image"></div>
            </div>

            <Link 
                id="cat-link" 
                className="meta-link" 
                to='/cat' 
                style={isMobile ? { marginBottom: `-${pHeight / .95}px` } : {}}
            >
                <span>Cat</span>
            </Link>
        </>
    )
}