import { FlexContainer } from '../shared/styled/FlexContainer';
import { Typography } from '@mui/material';
import "../shared/styled/Music.css"

export const Music = () => {
    return (
        <div style={{marginLeft: '10px', marginRight: '10px'}}>
            <Typography 
            variant='h2'
            textAlign={'center'}
            >
            Music
                <Typography 
                variant='h6'
                display={'flex'}
                gap={5}
                justifyContent={'center'}>
                    <a href="https://justinluce.bandcamp.com/">
                        <img height={'25px'} width={'25px'} src='/images/bandcampLogo.png' />
                    </a>
                    <a href="https://open.spotify.com/artist/573dtuK21aJkt06VtA2hB1?si=x9cBXYPlSFGNylB-DcsodQ">
                        <img height={'25px'} width={'25px'} src='/images/spotifyLogo.png' />
                    </a>
                    <a href="https://music.apple.com/us/artist/justin-luce/1615409470">
                        <img height={'25px'} width={'25px'} src='/images/appleMusicLogo.png' />
                    </a>
                </Typography>
            </Typography>
                <p style={{marginTop: '0px'}}>
                    I started making music 5 years ago for my video games.
                    Eventually, even if I wasn't making a game, I would keep producing music.
                    I mainly do it as a hobby now separately from game development,
                    however I would still describe the genre of these songs as "video game soundtrack".
                    Some of these songs will probably be used in my games in the future.
                </p>
            <Typography variant='h4' textAlign={'center'}>
                Personal Favorites:
            </Typography>
            <Typography variant='h6'>
                <FlexContainer>
                    Trance Is Dead:
                    <audio controls>
                        <source src="/music/TranceIsDead.wav"></source>
                    </audio>
                </FlexContainer>
                <FlexContainer>
                    Spontaneous Recovery:
                    <audio controls>
                        <source src="/music/SpontaneousRecovery.wav"></source>
                    </audio>
                </FlexContainer>
                <FlexContainer>
                    You're really icing my bread, man:
                    <audio controls>
                        <source src="/music/You'reReallyIcingMyBreadMan.wav"></source>
                    </audio>
                </FlexContainer>
            </Typography>
        </div>
    );
}