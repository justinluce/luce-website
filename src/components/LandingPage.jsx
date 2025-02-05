import { useEffect, useRef, useState } from 'react';
import '../shared/styled/LandingPage.css';
import { Link } from 'react-router-dom';

export const LandingPage = () =>  {
    const [pHeight, setPheight] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
    const pRef = useRef(null);
    const catRef= useRef(null);

    // Couldn't figure out how to do this with CSS so whatever fml
    useEffect(() => {
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
            <div id="menu">
                <div id="menu-items">
                    <Link className="menu-item" to='/projects'>Projects</Link>
                    <Link className="menu-item" to='/music'>Music</Link>
                    <Link className="menu-item" to='/antiresume'>Anti-Resume</Link>
                </div>
                <div id='about-paragraph' ref={pRef}>
                    <h1>Justin Luce</h1>
                    <img src='/images/luceHeadshot.webp' id='headshot' />  
                    <a href="https://github.com/justinluce" id='github-logo'>
                        <img
                            title="Justin Luce's GitHub"
                            alt="Justin Luce's GitHub"
                            src="/images/github-mark-white.png"
                        />
                    </a>
                    <p>
                        Hello! I'm Justin Luce. I am currently the director for Midland University's Code Academy 
                        that is focused on full-stack web development. I teach the Re-Entry Program, 
                        a coding bootcamp designed for incarcerated individuals.
                        I have created multiple video games using Unity and Gamemaker Studio. 
                        I also have extensive experience working with JavaScript/TypeScript, Java, and C#.
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
                ref={catRef}
                style={isMobile ? { marginBottom: `-${pHeight / 1.5}px` } : {}}
            >
                <span>Cat</span>
            </Link>
        </>
    )
}