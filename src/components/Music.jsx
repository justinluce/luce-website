export const Music = () => {
    return (
        <div>
            <h1>Music</h1>
                <p>
                    I started making music 5 years ago for my video games.
                    Eventually, even if I wasn't making a game, I would keep producing music.
                    I mainly do it as a hobby now separately from my game development,
                    however the genre of these songs I would still describe as "video game sountrack" style.
                    Some of these songs will probably be used in my games in the future.
                </p>
            <h2>Music platforms</h2>
                <h3>
                    <a href="https://justinluce.bandcamp.com/">Bandcamp</a>
                    <a href="https://open.spotify.com/artist/573dtuK21aJkt06VtA2hB1?si=x9cBXYPlSFGNylB-DcsodQ">Spotify</a>
                    <a href="https://music.apple.com/us/artist/justin-luce/1615409470">Apple Music</a>
                </h3>
            <h3>
                Personal Favorites:
            </h3>
            <h4>
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
            </h4>
        </div>
    );
}