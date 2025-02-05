import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';
import { useMenuContext } from '../../context/MenuContext';
import './Menu.css';

//TODO Put CSS in CSS file

function LinkTab(props) {
    const { setValue } = useMenuContext();
    const navigate = useNavigate();

    return (
        <Tab
            sx={{
                fontSize: '2rem', 
                height: '4rem', 
                marginTop: '1rem',
                color: 'default',
                '&.Mui-selected': { 
                    color: 'black',
                }
            }}
            component="a"
            onClick={(event) => {
                event.preventDefault();
                const href = event.currentTarget.getAttribute('href');
                const value = parseInt(event.currentTarget.getAttribute('data-value', 10));
                navigate(href);
                setValue(value);
            }}
            {...props}
        />
    );
}

  
export const Menu = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const { value, handleChange } = useMenuContext();

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const variant = windowWidth >= 1200 ? 'fullWidth' : 'scrollable';

    return (
        <Tabs 
            value={value} 
            onChange={handleChange} 
            // scrollButtons="auto"
            className='main'
            centered
            variant={variant}
            scrollButtons
            allowScrollButtonsMobile
            sx={{
                '.MuiTabs-scrollButtons': {
                    '& .MuiSvgIcon-root': {
                        fontSize: '2rem',
                    }
                },
                '.MuiTabs-indicator': {
                    backgroundColor: 'black',
                },
                flexGrow: 1,
            }}
        >
            <LinkTab label="Home" href="/" data-value={0}/>
            <LinkTab label="Projects" href="projects" data-value={1}/>
            <LinkTab label="Music" href="music" data-value={2}/>
            <LinkTab label="Chatroom" href="chatroom" data-value={3} />
            <LinkTab label="Anti-Resume" href="antiresume" data-value={4}/>
            <LinkTab label="Cat" href="cat" data-value={5}/>
        </Tabs>
    );
}