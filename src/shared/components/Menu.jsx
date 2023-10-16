import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';
import { useMenuContext } from '../../context/MenuContext';

function LinkTab(props) {
  const { setValue } = useMenuContext();
  const navigate = useNavigate();
  return (
      <Tab
          style={{ 
              fontSize: '2rem', 
              height: '3rem', 
              marginTop: '1rem',
              width: '100vw',
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

    {/*//TODO: Put this in a CSS file*/}
    const tabStyle = {
      display: 'flex',
      flexWrap: 'nowrap',
      overflowX: 'auto',
      width: '100%',
      justifyContent: 'center',
      '@media (maxWidth: 600px)': {
        justifyContent: 'space-between',
      }
    };
    return (
        <Tabs 
        value={value} 
        onChange={handleChange} 
        variant="scrollable"
        scrollButtons="auto"
        style={tabStyle}
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