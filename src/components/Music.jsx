import { FlexContainer } from '../shared/styled/FlexContainer';
import { Typography } from '@mui/material';
import { Img } from '../shared/styled/Img';
import "../shared/styled/Music.css"

export const Music = () => {

    return (
        <div style={{marginLeft: '10px', marginRight: '10px', marginTop: '10px', fontSize: '30px'}}>
            <Typography 
            variant='h1'
            textAlign={'center'}
            >
            Music
                <Typography 
                display={'flex'}
                gap={5}
                justifyContent={'center'}>
                    <a href="https://justinluce.bandcamp.com/">
                        <img height={'50px'} width={'50px'} src='/images/bandcampLogo.png' alt='Bandcamp Logo'/>
                    </a>
                    <a href="https://open.spotify.com/artist/573dtuK21aJkt06VtA2hB1?si=x9cBXYPlSFGNylB-DcsodQ">
                        <img height={'50px'} width={'50px'} src='/images/spotifyLogo.png' alt='Spotify Logo' />
                    </a>
                    <a href="https://music.apple.com/us/artist/justin-luce/1615409470">
                        <img height={'50px'} width={'50px'} src='/images/appleMusicLogo.png' alt='Apple Music Logo' />
                    </a>
                </Typography>
            </Typography>
                <p style={{marginTop: '0px',
                 marginLeft: '10px', 
                 marginRight: '10px'}}>
                    I started making music 5 years ago for my video games.
                    Eventually, even if I wasn't making a game, I would keep producing music.
                    I mainly do it as a hobby now separately from game development,
                    however I would still describe the genre of these songs as "video game soundtrack".
                    Some of these songs will probably be used in my games in the future.
                </p>
            <Typography variant='h3' textAlign={'center'}>
                Personal Favorites
            </Typography>
            <Typography variant='h5'>
                <FlexContainer>
                    Spontaneous Recovery
                    <div style={{ transform: 'scale(1.5)', marginTop: '30px'}}>
                    <audio controls>
                        <source src="/music/SpontaneousRecovery.mp3"></source>
                    </audio>
                    </div>
                </FlexContainer>
                <FlexContainer>
                    Housekeeping
                    <div style={{ transform: 'scale(1.5)', marginTop: '30px' }}>
                    <audio controls>
                        <source src="/music/Housekeeping.mp3"></source>
                    </audio>
                    </div>
                </FlexContainer>
                <FlexContainer>
                    Spontaneous Combustion
                    <div style={{ transform: 'scale(1.5)', marginTop: '30px' }}>
                    <audio controls>
                        <source src="/music/SpontaneousCombustion.mp3"></source>
                    </audio>
                    </div>
                </FlexContainer>
                <Typography variant='h3' textAlign={'center'}>
                    EPs
                </Typography>   
                <FlexContainer flexDirection={'row'} justifyContent={'center'}>
                <FlexContainer>
                    <Typography variant='h5' textAlign={'center'}>
                        REMLESS
                    </Typography>
                    <a href='https://justinluce.bandcamp.com/album/remless' target='_blank'>
                        <Img 
                            src="/images/remless.jpg"
                            title="REMLESS"
                            alt="EP titled REMLESS"
                            width="400"
                        />
                    </a>
                    </FlexContainer>
                    <FlexContainer>
                    <Typography variant='h5' textAlign={'center'}>
                        Lethological
                    </Typography>
                    <a href='https://justinluce.bandcamp.com/album/lethological' target='_blank'>
                        <Img 
                            src="/images/lethological.jpg"
                            title="Lethological"
                            alt="EP titled Lethological"
                            width="400"
                        />
                    </a>
                    </FlexContainer>
                    <FlexContainer>
                    <Typography variant='h5' textAlign={'center'}>
                        Welcome to the Aether
                    </Typography> 
                    <a href='https://justinluce.bandcamp.com/album/welcome-to-the-aether' target='_blank'>
                        <Img 
                            src="/images/welcomeToTheAether.jpg"
                            title="Welcome to the Aether"
                            alt="EP titled Welcome to the Aether"
                            width="400"
                        />
                    </a>
                    </FlexContainer>
                </FlexContainer>
                <Typography variant='h3' textAlign={'center'}>
                    Singles
                </Typography> 
                <FlexContainer flexDirection={'row'} justifyContent={'center'}>
                    <FlexContainer>
                    <Typography variant='h5' textAlign={'center'}>
                        Out Of My Mind
                    </Typography>
                    <a href='https://justinluce.bandcamp.com/track/out-of-my-mind' target='_blank'>
                        <Img 
                            src="/images/outOfMyMind.jpg"
                            title="Out Of My Mind"
                            alt="Single titled Out Of My Mind"
                            width="400"
                        />
                    </a>
                    </FlexContainer>
                    <FlexContainer>
                    <Typography variant='h5' textAlign={'center'}>
                        Spontaneous Recovery
                    </Typography>
                    <a href='https://justinluce.bandcamp.com/track/spontaneous-recovery-2' target='_blank'>
                        <Img 
                            src="/images/spontaneousRecovery.jpg"
                            title="Spontaneous Recovery"
                            alt="Single titled Spontaneous Recovery"
                            width="400"
                        />
                    </a>
                    </FlexContainer>
                </FlexContainer>
            </Typography>
        </div>
    );
}