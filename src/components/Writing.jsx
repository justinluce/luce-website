import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';
import '../shared/styled/Writing.css';

export const Writing = () => {
    return (
        <div className='writingContainer'>
            <Typography variant='h1' textAlign={'center'}>
                Writing
            </Typography>
            <div className='writing-list'>
                <NavLink className='writing-link' to={'/writing/beyond-the-realm'}>
                    <span className='writing-type'>Poem</span>
                    Beyond the Realm
                </NavLink>
                <span className='writing-link writing-wip'>
                    <span className='writing-type'>Novella</span>
                    Aetherial Realms: Sideria
                    <span className='wip-badge'>Coming Next</span>
                </span>
            </div>
        </div>
    );
}
