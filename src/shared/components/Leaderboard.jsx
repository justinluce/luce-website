import React from 'react';

    
const getRandomUsers = (userList, numUsers) => {
    const shuffled = userList.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numUsers);
};

const formatUserTime = (time) => {
    const randomDecimal = (Math.random() * 0.999).toFixed(3).substr(2);
    return `${time}.${randomDecimal}`;
};

const generateFakeUsers = (userTime, numUsers = 10) => {
    const fakeUsers = [
        "xyoloswaglordx",
        "PrinterPaper",
        "NuclearChocolate",
        "Xx_Giga_Blaster20_xX",
        "i_PwNeD_u",
        "Extra_Albatross52",
        "Hexic211",
        "Wristrest",
        "Waterjug",
        "_Gandalf_",
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
        "ShadowAssassin_07"
    ];
    
    const selectedUsernames = getRandomUsers(fakeUsers, numUsers);
    const selectedUsers = selectedUsernames.map(username => ({
        name: username,
        time: (Math.random() * userTime).toFixed(3),
    }));

    return selectedUsers.sort((a, b) => parseFloat(a.time) - parseFloat(b.time));
};

const Leaderboard = ({ userTime }) => {
    const fakeUsers = generateFakeUsers(userTime);
    const formattedUserTime = formatUserTime(userTime);

    return (
        <div>
            <h3>Leaderboard</h3>
            <ul>
                {fakeUsers.map((user, index) => (
                    <li key={index}>
                        {user.name}: {user.time} seconds
                    </li>
                ))}
                <li><strong>You:</strong> {formattedUserTime} seconds</li>
            </ul>
        </div>
    );
};

export default Leaderboard;
