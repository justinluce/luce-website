import React from 'react';
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
              height: '3rem', 
              marginTop: '1rem',
              width: '100vw',
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
    const { value, handleChange } = useMenuContext();

    return (
        <Tabs 
        value={value} 
        onChange={handleChange} 
        variant="scrollable"
        scrollButtons="auto"
        className='main'
        sx={{
            '.MuiTabs-indicator': {
                backgroundColor: 'black',
            }
        }}
        >
            <LinkTab label="Home" href="/home" data-value={0}/>
            <LinkTab label="Projects" href="projects" data-value={1}/>
            <LinkTab label="Music" href="music" data-value={2}/>
            <LinkTab label="Chatroom" href="chatroom" data-value={3} />
            <LinkTab label="Anti-Resume" href="antiresume" data-value={4}/>
            <LinkTab label="Minesweeper" href="minesweeper" data-value={5}/>
            <LinkTab label="Cat" href="cat" data-value={6}/>
        </Tabs>
    );
}