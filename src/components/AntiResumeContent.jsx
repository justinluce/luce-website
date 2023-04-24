import React, { useState } from 'react';

export const AntiResumeContent = () => {
    const [number, setNumber] = useState(0);

    const handleNumber = (e) => {
        setNumber(e.target.value);
    }

    const formatNumber = (number) => {
        const numberString = String(number).padStart(10, '0');
        return `${numberString.slice(0, 3)}-${numberString.slice(3, 6)}-${numberString.slice(6, 10)}`;
    }

    return (
        <div>
        <h2>
            You are required to sign up to access the rest of this page. 
            Don't worry, your information will not be used maliciously. 
            In fact, it won't even be saved at all. If you're paranoid,
            you can use fake information or check the&nbsp;
            <a href="https://github.com/justinluce/luce-website">source code.</a>
        </h2>
        <h6>
            <s>Please give me your data anyway.</s>
        </h6>
            <form>
                <label>
                    Name:
                    <input readOnly type="text" name="name" />
                </label>
                <label>
                    Email:
                    <input readOnly type="text" name="email" />
                </label>
                <label>
                    Phone Number:
                    <input 
                        type="range"
                        min="0"
                        max="9999999999"
                        step="1"
                        value={number}
                        onChange={handleNumber}
                    />
                    {formatNumber(number)}
                </label>
            </form>
        </div>
    )
}