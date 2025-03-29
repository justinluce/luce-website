import { FlexContainer } from '../shared/styled/FlexContainer';
import { Typography } from '@mui/material';
import { Img } from '../shared/styled/Img';
import "../shared/styled/Music.css";

export const Music = () => {

    //!TODO: Put all styling in a CSS file
    return (
        <div className='musicContainer'>
            <Typography 
            variant='h1'
            textAlign={'center'}
            >
            Music
                <Typography 
                display={'flex'}
                gap={5}
                justifyContent={'center'}
                className='logos'
                >
                    <a href="https://justinluce.bandcamp.com/">
                        <img src='/images/bandcampLogoWhite.png' alt='Bandcamp Logo'/>
                    </a>
                    <a href="https://open.spotify.com/artist/573dtuK21aJkt06VtA2hB1?si=x9cBXYPlSFGNylB-DcsodQ">
                        <img src='/images/spotifyLogoWhite.png' alt='Spotify Logo' />
                    </a>
                    <a href="https://music.apple.com/us/artist/justin-luce/1615409470">
                        <img src='/images/appleMusicLogoWhite.png' alt='Apple Music Logo' />
                    </a>
                </Typography>
            </Typography>
            <Typography variant='h3' textAlign={'center'}>
                Personal Favorite Tracks
            </Typography>
            <Typography variant='h5'>
                <FlexContainer>
                    Luce's Dream
                    <div className='faves'>
                    <audio controls>
                        <source src="/music/Luce'sDream.mp3"></source>
                    </audio>
                    </div>
                </FlexContainer>
                <FlexContainer>
                    Paralellism
                    <div className='faves'>
                    <audio controls>
                        <source src="/music/Parallelism.mp3"></source>
                    </audio>
                    </div>
                </FlexContainer>
                <FlexContainer>
                    ShadowBoxing
                    <div className='faves'>
                    <audio controls>
                        <source src="/music/ShadowBoxing.mp3"></source>
                    </audio>
                    </div>
                </FlexContainer>
                <FlexContainer flexDirection={'row'} justifyContent={'center'}>
                <FlexContainer>
                    <Typography variant='h5' textAlign={'center'}>
                        Fever Dream 1990 OST
                    </Typography>
                    <a href='https://justinluce.bandcamp.com/album/fever-dream-1999-ost' target='_blank'>
                        <Img 
                            src="/images/feverDream.webp"
                            title="Fever Dream 1999 OST"
                            alt="Fever Dream 1999 OST"
                            width="400"
                            height="400"
                        />
                    </a>
                    </FlexContainer>
                <FlexContainer>
                    <Typography variant='h5' textAlign={'center'}>
                        REMLESS
                    </Typography>
                    <a href='https://justinluce.bandcamp.com/album/remless' target='_blank'>
                        <Img 
                            src="/images/remless.webp"
                            title="REMLESS"
                            alt="REMLESS EP"
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
                            alt="Lethological EP"
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
                            alt="Welcome to the Aether EP"
                            width="400"
                        />
                    </a>
                    </FlexContainer>
                </FlexContainer>
            </Typography>
        </div>
    );
}