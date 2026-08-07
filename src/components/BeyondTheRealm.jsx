import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import BeyondTheRealmDoc from '/writing/BeyondTheRealm.md?url&raw';
import '../shared/styled/Writing.css';

export const BeyondTheRealm = () => {
    const [poemTheme, setPoemTheme] = useState('dark');
    const isLightMode = poemTheme === 'light';

    return (
        <div className={`writingContainer poem-theme-${poemTheme}`}>
            <div className='poem-theme-controls'>
                <NavLink className='poem-theme-toggle' to={'/writing'}>
                    ← Writing
                </NavLink>
                <button
                    type='button'
                    className='poem-theme-toggle'
                    aria-pressed={isLightMode}
                    onClick={() => setPoemTheme(isLightMode ? 'dark' : 'light')}
                >
                    {isLightMode ? 'Dark mode' : 'Light mode'}
                </button>
            </div>
            <div className='markdown-body writing-content poem-bordered'>
                <p className='poem-author'>By: Justin Luce</p>
                <h1>Beyond the Realm</h1>
                <ReactMarkdown remarkPlugins={[remarkBreaks]}>{BeyondTheRealmDoc}</ReactMarkdown>
            </div>
        </div>
    );
}
