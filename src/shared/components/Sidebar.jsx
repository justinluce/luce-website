import { useState, useEffect } from "react";
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

const WritingIcon = () => (
    <svg viewBox='0 0 24 24' aria-hidden='true'>
        <path d='M4 20h4l11-11a2.8 2.8 0 0 0-4-4L4 16v4Z' />
        <path d='m13.5 6.5 4 4' />
    </svg>
);

const navItems = [
    { to: '/', label: 'Home', Icon: HomeIcon },
    { to: '/projects', label: 'Dev', Icon: CodeIcon },
    { to: '/music', label: 'Music', Icon: MusicIcon },
    { to: '/writing', label: 'Writing', Icon: WritingIcon }
];

const DRAWER_QUERY = '(max-width: 700px)';
const HIDE_AFTER = 96;
const SCROLL_DELTA = 6;

export const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [toggleHidden, setToggleHidden] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(prev => !prev);
    }

    useEffect(() => {
        const drawerMode = window.matchMedia(DRAWER_QUERY);
        let lastY = window.scrollY;
        let frame = null;

        const evaluate = () => {
            frame = null;
            const y = window.scrollY;
            const delta = y - lastY;

            if (Math.abs(delta) < SCROLL_DELTA) return;
            lastY = y;

            if (!drawerMode.matches) {
                setToggleHidden(false);
                return;
            }

            setToggleHidden(delta > 0 && y > HIDE_AFTER);
        };

        const onScroll = () => {
            if (frame !== null) return;
            frame = window.requestAnimationFrame(evaluate);
        };

        const onModeChange = () => {
            lastY = window.scrollY;
            setToggleHidden(false);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        drawerMode.addEventListener('change', onModeChange);

        return () => {
            window.removeEventListener('scroll', onScroll);
            drawerMode.removeEventListener('change', onModeChange);
            if (frame !== null) window.cancelAnimationFrame(frame);
        };
    }, []);

    useEffect(() => {
        if (sidebarOpen) setToggleHidden(false);
    }, [sidebarOpen]);

    useEffect(() => {
        if (!sidebarOpen) return;

        const onKeyDown = event => {
            if (event.key === 'Escape') setSidebarOpen(false);
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [sidebarOpen]);

    const openClass = sidebarOpen ? 'sidebar-open' : '';

    return (
        <div id='sidebar-container' className={openClass}>
            <button
                id='hamburger'
                className={toggleHidden ? 'toggle-hidden' : ''}
                type='button'
                onClick={toggleSidebar}
                aria-label={sidebarOpen ? 'Close navigation' : 'Open navigation'}
                aria-expanded={sidebarOpen}
                aria-controls='sidebar-main'
            >
                <span className='hamburger-icon' aria-hidden='true'>
                    {sidebarOpen ? '×' : '☰'}
                </span>
            </button>
            <div
                id='sidebar-scrim'
                onClick={() => setSidebarOpen(false)}
                aria-hidden='true'
            />
            <aside
                id='sidebar-main'
                className={openClass}
                aria-label='Primary navigation'
            >
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
