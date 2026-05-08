import { useEffect } from 'react';
import "../shared/styled/Music.css";

const favoriteTracks = [
    { title: 'ShadowBoxing', src: '/music/ShadowBoxing.mp3' },
    { title: 'Parallelism', src: '/music/Parallelism.mp3' },
    { title: "Luce's Dream", src: "/music/Luce'sDream.mp3" }
];

const albums = [
    {
        title: 'Fever Dream 1999 OST',
        href: 'https://justinluce.bandcamp.com/album/fever-dream-1999-ost',
        src: '/images/feverDream.webp',
        alt: 'Fever Dream 1999 OST'
    },
    {
        title: 'REMLESS',
        href: 'https://justinluce.bandcamp.com/album/remless',
        src: '/images/remless.webp',
        alt: 'REMLESS EP'
    },
    {
        title: 'Lethological',
        href: 'https://justinluce.bandcamp.com/album/lethological',
        src: '/images/lethological.webp',
        alt: 'Lethological EP'
    },
    {
        title: 'Welcome to the Aether',
        href: 'https://justinluce.bandcamp.com/album/welcome-to-the-aether',
        src: '/images/welcomeToTheAether.webp',
        alt: 'Welcome to the Aether EP'
    }
];

export const Music = () => {
    useEffect(() => {
        [
            '/images/bandcampLogoWhite.png',
            ...albums.map((album) => album.src)
        ].forEach((src) => {
            const image = new Image();
            image.src = src;
        });
    }, []);

    return (
        <div className='musicContainer'>
            <header className='musicHeader pageHeader'>
                <h1 className='pageTitle'>Music</h1>
                <a className='musicLogoLink' href='https://justinluce.bandcamp.com/'>
                    <img src='/images/bandcampLogoWhite.png' alt='Bandcamp' decoding='async' />
                </a>
            </header>

            <section className='musicSection'>
                <h2>Personal Favorite Tracks</h2>
                <div className='trackList'>
                    {favoriteTracks.map((track) => (
                        <article className='trackItem' key={track.src}>
                            <h3>{track.title}</h3>
                            <audio controls>
                                <source src={track.src} />
                            </audio>
                        </article>
                    ))}
                </div>
            </section>

            <section className='musicSection'>
                <h2>Albums and EPs</h2>
                <div className='albumGrid'>
                    {albums.map((album) => (
                        <a className='albumCard' href={album.href} target='_blank' rel='noopener noreferrer' key={album.href}>
                            <img src={album.src} title={album.title} alt={album.alt} decoding='async' />
                            <span>{album.title}</span>
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
};
