import React from 'react';

const getRandomUsers = (userList, numUsers) => {
    const shuffled = userList.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numUsers);
};

const formatUserTime = (time) => {
    const randomDecimal = (Math.random() * 0.999).toFixed(3).substr(2);
    return `${time}.${randomDecimal}`;
};

const generateFakeUsers = (userTime, numUsers = 9) => {
    const fakeUsers = [
        "PrinterPaper",
        "NuclearChocolate",
        "xX_Giga_Blaster20_Xx",
        "i_PwNeD_u",
        "Extra_Albatross52",
        "Hexic211",
        "Wristrest",
        "Waterjug",
        "Ub3r_Gandalf_",
        "EverquestLegend",
        "02SpeedTyper20",
        "69xMemeMasterx420",
        "HydratedMonkey",
        "_n00b_d35tr0y3r",
        "Xx_DarkN1nja_xX",
        "VenomousViper",
        "OmegaLaserBlast",
        "GalacticDestroyer",
        "FatalDestiny",
        "FaZe_Quickscope_G0d",
        "ShadowAssassin_07",
        "[BANNED USER]",
        "Lvl70FeralDruid",
        "Cycl0n3 Sw0rd",
    ];
    
    const selectedUsernames = getRandomUsers(fakeUsers, numUsers);
    const selectedUsers = selectedUsernames.map(username => ({
        name: username,
        time: (Math.random() * userTime).toFixed(3),
    }));

    return selectedUsers.sort((a, b) => parseFloat(a.time) - parseFloat(b.time));
};

const Leaderboard = React.memo(({ userTime, inputName }) => {
    const fakeUsers = generateFakeUsers(userTime);
    const formattedUserTime = formatUserTime(userTime);

    return (
        <div>
            <h3>Leaderboard</h3>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Username</th>
                        <th>Time (seconds)</th>
                    </tr>
                </thead>
                <tbody>
                    {fakeUsers.map((user, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td style={{ color: user.name === '[BANNED USER]' ? 'red' : 'inherit'}}>
                                {user.name}
                            </td>
                            <td>{user.time}</td>
                        </tr>
                    ))}
                    <tr>
                        <td>{fakeUsers.length + 1}</td>
                        <td>{inputName} (you)</td>
                        <td>{formattedUserTime}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
});

export default Leaderboard;
