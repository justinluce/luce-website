import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';
import { sombressChapters } from '../data/sombressChapters';
import '../shared/styled/Writing.css';

export const Sombress = () => {
    return (
        <div className='writingContainer'>
            <div className='writing-back-row'>
                <NavLink className='writing-back' to={'/writing'}>
                    ← Writing
                </NavLink>
            </div>
            <Typography variant='h1' textAlign={'center'} className='pageTitle'>
                SOMbress: Sideria
            </Typography>
            <div className='writing-list'>
                {sombressChapters.map((chapter) =>
                    chapter.doc ? (
                        <NavLink
                            key={chapter.slug}
                            className='writing-link'
                            to={`/writing/sombress/${chapter.slug}`}
                        >
                            <span className='writing-type'>{`Chapter ${chapter.number}`}</span>
                            {chapter.title}
                        </NavLink>
                    ) : (
                        <span key={chapter.slug} className='writing-link writing-wip'>
                            <span className='writing-type'>{`Chapter ${chapter.number}`}</span>
                            {chapter.title}
                            <span className='wip-badge'>Coming Next</span>
                        </span>
                    )
                )}
            </div>
        </div>
    );
}
