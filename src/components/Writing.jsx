import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';
import '../shared/styled/Writing.css';

export const Writing = () => {
    return (
        <div className='writingContainer'>
            <Typography variant='h1' textAlign={'center'} className='pageTitle'>
                Writing
            </Typography>
            <div className='writing-list'>
                <NavLink className='writing-link' to={'/writing/beyond-the-realm'}>
                    <span className='writing-type'>Poem</span>
                    Beyond the Realm
                </NavLink>
                <NavLink className='writing-link' to={'/writing/sombress'}>
                    <span className='writing-type'>Novella</span>
                    SOMbress: Sideria
                </NavLink>
            </div>
        </div>
    );
}
