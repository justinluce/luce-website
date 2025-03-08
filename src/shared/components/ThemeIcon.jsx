import { useState } from "react";
import { useTheme } from "../../context";
import './Components.css';

export const ThemeIcon = () => {
    const [rotation, setRotation] = useState(45);
    const { toggleTheme } = useTheme();

    return (
        <span
            className='theme-icon'
            onClick={() => {
                toggleTheme();
                setRotation(prev => prev + 180);
            }}
            style={{
                transform: `rotate(${rotation}deg)`,
                transition: 'transform .5s'
            }}
        ></span>
    )
}