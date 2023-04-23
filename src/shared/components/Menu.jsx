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
        component="a"
        onClick={(event) => {
            event.preventDefault();
            const href = event.currentTarget.getAttribute('href');
            const value = parseInt(event.currentTarget.getAttribute('data-value', 10));
            navigate(href);
            setValue(value);
            console.log(value);
        }}
        {...props}
      />
    );
  }
  
export const Menu = () => {
    const { value, handleChange } = useMenuContext();
    return (
        <Tabs value={value} onChange={handleChange}>
            <LinkTab label="Home" href="/home" data-value={0}/>
            <LinkTab label="Projects" href="projects" data-value={1}/>
            <LinkTab label="Music" href="music" data-value={2}/>
            <LinkTab label="Anti-Resume" href="antiresume" data-value={3}/>
            <LinkTab label="Minesweeper" href="minesweeper" data-value={4}/>
        </Tabs>
    );
}