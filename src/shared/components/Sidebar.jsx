import { useState } from "react";
import { NavLink } from "react-router-dom";
import '../styled/Sidebar.css';

const HomeIcon = () => (
    <svg viewBox='0 0 24 24' aria-hidden='true'>
        <path d='M3 10.8 12 3l9 7.8' />
        <path d='M5.5 9.5V21h13V9.5' />
        <path d='M9.5 21v-6h5v6' />
    </svg>
);

const CodeIcon = () => (
    <svg viewBox='0 0 24 24' aria-hidden='true'>
        <path d='m8 8-4 4 4 4' />
        <path d='m16 8 4 4-4 4' />
        <path d='m14 4-4 16' />
    </svg>
);

const MusicIcon = () => (
    <svg viewBox='0 0 24 24' aria-hidden='true'>
        <path d='M9 18V5l11-2v13' />
        <circle cx='6' cy='18' r='3' />
        <circle cx='17' cy='16' r='3' />
    </svg>
);

const navItems = [
    { to: '/', label: 'Home', Icon: HomeIcon },
    { to: '/projects', label: 'Dev', Icon: CodeIcon },
    { to: '/music', label: 'Music', Icon: MusicIcon }
];

export const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(prev => !prev);
    }

    return (
        <div id='sidebar-container' className={sidebarOpen ? 'sidebar-open' : ''}>
            <aside
                id='sidebar-main'
                className={sidebarOpen ? 'sidebar-open' : ''}
                aria-label='Primary navigation'
            >
                <button
                    id='hamburger'
                    type='button'
                    onClick={toggleSidebar}
                    aria-label={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
                    aria-expanded={sidebarOpen}
                >
                    <span className='hamburger-icon' aria-hidden='true'>
                        {sidebarOpen ? '\u00d7' : '\u2630'}
                    </span>
                </button>
                <nav id='link-container'>
                    {navItems.map(({ to, label, Icon }) => (
                        <NavLink
                            key={to}
                            onClick={() => setSidebarOpen(false)}
                            className='link-item'
                            to={to}
                            aria-label={label}
                            title={!sidebarOpen ? label : undefined}
                        >
                            <span className='link-icon'>
                                <Icon />
                            </span>
                            <span className='link-label'>{label}</span>
                        </NavLink>
                    ))}
                </nav>
            </aside>
        </div>
    )
}
