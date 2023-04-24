import { P } from '../shared/styled/P';
import { H1, H2, H3, H4 } from '../shared/styled/Heading';


export const Music = () => {
    return (
        <div>
            <H1 color="primary">Music</H1>
                <p>
                    I started making music 5 years ago for my video games.
                    Eventually, even if I wasn't making a game, I would keep producing music.
                    I mainly do it as a hobby now separately from game development,
                    however I would still describe the genre of these songs as "video game sountrack".
                    Some of these songs will probably be used in my games in the future.
                </p>
            <H2>Music platforms</H2>
                <H3>
                    <a href="https://justinluce.bandcamp.com/">Bandcamp</a>
                    <a href="https://open.spotify.com/artist/573dtuK21aJkt06VtA2hB1?si=x9cBXYPlSFGNylB-DcsodQ">Spotify</a>
                    <a href="https://music.apple.com/us/artist/justin-luce/1615409470">Apple Music</a>
                </H3>
            <H3>
                Personal Favorites:
            </H3>
            <H4>
                Trance Is Dead:
                <audio controls>
                    <source src="/music/TranceIsDead.wav"></source>
                </audio>
                You're really icing my bread, man:
                <audio controls>
                    <source src="/music/You'reReallyIcingMyBreadMan.wav"></source>
                </audio>
                Spontaneous Combustion:
                <audio controls>
                    <source src="/music/SpontaneousCombustion.wav"></source>
                </audio>
            </H4>
        </div>
    );
}