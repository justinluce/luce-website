import { FlexContainer } from '../shared/styled/FlexContainer';
import { Typography } from '@mui/material';
import { Img } from '../shared/styled/Img';
import "../shared/styled/Music.css";

export const Music = () => {

    //!TODO: Put all styling in a CSS file
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
            <Typography variant='h3' textAlign={'center'}>
                Personal Favorites
            </Typography>
            <Typography variant='h5'>
                <FlexContainer>
                    Luce's Dream
                    <div style={{ transform: 'scale(1.5)', marginTop: '30px' }}>
                    <audio controls>
                        <source src="/music/Luce'sDream.mp3"></source>
                    </audio>
                    </div>
                </FlexContainer>
                <FlexContainer>
                    Spontaneous Recovery
                    <div style={{ transform: 'scale(1.5)', marginTop: '30px'}}>
                    <audio controls>
                        <source src="/music/SpontaneousRecovery.mp3"></source>
                    </audio>
                    </div>
                </FlexContainer>
                <FlexContainer>
                    Paralellism
                    <div style={{ transform: 'scale(1.5)', marginTop: '30px' }}>
                    <audio controls>
                        <source src="/music/Parallelism.mp3"></source>
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
                            src="/images/remless.webp"
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
                            src="/images/lethological.webp"
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
                            src="/images/welcomeToTheAether.webp"
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
                            Parallelism
                        </Typography>
                        <a href='https://justinluce.bandcamp.com/track/parallelism-2' target='_blank'>
                            <Img 
                                src="/images/parallelism.webp"
                                title="Paralellism"
                                alt="Single titled Parallelism"
                                width="400"
                            />
                        </a>
                    </FlexContainer>
                    <FlexContainer>
                    <Typography variant='h5' textAlign={'center'}>
                        Out Of My Mind
                    </Typography>
                    <a href='https://justinluce.bandcamp.com/track/out-of-my-mind' target='_blank'>
                        <Img 
                            src="/images/outOfMyMind.webp"
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
                                src="/images/spontaneousRecovery.webp"
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