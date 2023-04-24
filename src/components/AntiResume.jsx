import React, {useState} from 'react';
import {AntiResumeContent} from './AntiResumeContent';

const StartButton = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
    }

    return (
        <div>
            {!isClicked && (
                <button onClick={handleClick}>Click to start</button>
            )}
            {isClicked && <AntiResumeContent />}
        </div>
    )
}

export const AntiResume = () => {
    return (
        <div>
            <h1>Anti-Resume</h1>
            <p>
                Welcome to the Anti-Resume. This is a page designed to showcase
                web design practices that you SHOULD NOT do.
                If this page annoys you, that means it's working as intended.
            </p>
            <p>
                If you're looking for an actual resume, I would recommend my&nbsp;
                <a href="https://www.linkedin.com/in/justin-luce-77260419a">LinkedIn Page</a>.
            </p>
            <StartButton />
        </div>
    );
}