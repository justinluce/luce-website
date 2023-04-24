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