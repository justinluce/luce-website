import { useState } from "react";
import { NavLink } from "react-router-dom";
import '../styled/Sidebar.css';

export const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(prev => !prev);
    }

    return (
        <div id='sidebar-container' className={sidebarOpen ? 'sidebar-open' : ''}>
            <div id='sidebar-main' className={sidebarOpen ? 'sidebar-open' : ''}>
                <div id='link-container'>
                    <NavLink onClick={toggleSidebar} className='link-item' to={'/'}>Home</NavLink>
                    <NavLink onClick={toggleSidebar} className='link-item' to={'/projects'}>Projects</NavLink>
                    <NavLink onClick={toggleSidebar} className='link-item' to={'/music'}>Music</NavLink>
                </div>
            </div>
            <button className='bubble-hover' id='hamburger' onClick={toggleSidebar}>{sidebarOpen ? '\u2716' : '\u2630'}</button>
        </div>
    )
}