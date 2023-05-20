import React, { useState, useRef, useEffect } from 'react';
import styles from '../shared/styled/Keyboard.module.css';
import { Typography } from '@mui/material';

const Keyboard = ({ targetInput, setTargetInput }) => {
    const handleClick = (char) => {
        setTargetInput((prev) => prev + char);
    };

    const handleBackspace = () => {
        setTargetInput((prev) => prev.slice(0, -1));
    };

    const initialKeys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@.-_';
    const keys = initialKeys
    .split('')
    .sort(() => Math.random() - 0.5)
    .map((char) => ({ char, isBackspace: false }));

    const backspaceIndex = Math.floor(Math.random() * (keys.length + 1));
    keys.splice(backspaceIndex, 0, { char: 'Backspace', isBackspace: true });


    return (
        <div className={styles.Keyboard}>
            {keys.map((item) => (
                item.isBackspace ? (
                    <button
                        type='button'
                        key={item.char}
                        onClick={handleBackspace}
                        className={`${styles.key} ${styles.backspace}`}
                    >
                        {item.char}
                    </button>
                ) : (
                    <button
                        type='button'
                        key={item.char}
                        onClick={() => handleClick(item.char)}
                        className={styles.key}
                    >
                        {item.char}
                    </button>
                )
            ))}
        </div>
    );    
}

const Captcha = () => {
    {/* TODO: Make the captcha actually work */}
    const [isSolved, setIsSolved] = useState(false);
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
            <img height={900} width={600}
            src="/images/WheresWaldoCaptcha.png" />
        </div>
    );
};

export const AntiResumeContent = () => {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [activeInput, setActiveInput] = useState(null);
    const [preventHide, setPreventHide] = useState(false);
    const focusedInput = useRef(null);

    const handleNumber = (e) => {
        setNumber(e.target.value);
    }

    const formatNumber = (number) => {
        const numberString = String(number).padStart(10, '0');
        return `${numberString.slice(0, 3)}-${numberString.slice(3, 6)}-${numberString.slice(6, 10)}`;
    }

    const handleInputFocus = (input) => {
        setActiveInput(input);
    }

    const handleInputBlur = () => {
        if (!preventHide) {
            setActiveInput(null);
        }
        setPreventHide(false);
    }

    const handleInputMouseDown = (input) => {
        setPreventHide(true);
        setActiveInput(input);
        focusedInput.current = input;
    }

    const handleKeyboardInput = (value) => {
        if (activeInput === 'name') {
            setName(value);
        } else if (activeInput === 'email') {
            setEmail(value);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (
            activeInput &&
            !event.target.closest('input') &&
            !event.target.closest(`.${styles.Keyboard}`) &&
            !event.target.closest('button')
          ) {
            setActiveInput(null);
          }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [activeInput]);

    return (
        <div>
        <h2>
            You are required to sign up to access the rest of this page. 
            Don't worry, your information will not be used maliciously. 
            In fact, it won't even be saved at all. If you're paranoid,
            you can use fake information, or check the&nbsp;
            <a href="https://github.com/justinluce/luce-website">source code.</a>
        </h2>
        <h6>
            <s>Please give me your data anyway.</s>
        </h6>
        <p>
            <strong>Currently, this is all of the content for this page.</strong> In the future,
            I plan on adding a pop quiz, extra (actually functional) captchas,
            and a 'rate your experience' survey. 
        </p>
            <form>
                <label style={{marginRight: '10px'}}>
                    Name:
                    <input
                        readOnly 
                        type="text" 
                        name="name" 
                        value={name} 
                        onMouseDown={() => handleInputMouseDown('name')}
                        onBlur={handleInputBlur}
                        style={{width: '200px', height: '30px', marginLeft: '10px'}}
                        />
                </label>
                <label style={{marginRight: '10px'}}>
                    Email:
                    <input 
                        readOnly 
                        type="text" 
                        name="email" 
                        value={email} 
                        onMouseDown={() => handleInputMouseDown('email')}
                        onBlur={handleInputBlur}
                        style={{width: '200px', height: '30px', marginLeft: '10px'}}
                    />
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
                        style={{width: '200px', height: '30px', marginLeft: '10px', marginRight: '10px'}}
                    />
                    {formatNumber(number)}
                </label>
            {activeInput && (
                <div onMouseDown={(e) => e.preventDefault()}>
                    <Keyboard 
                        targetInput={focusedInput.current === 'name' ? name : email} 
                        setTargetInput={handleKeyboardInput} />
                </div>
            )}
            {/*//TODO: Stop with the brs
            //TODO: Make the captcha appear only after the form is filled out*/}
                <br></br>
                <Captcha />
                <br></br>
                <button disabled={
                    name == '' || 
                    email == '' ||
                    number == 0
                }
                    >
                    Submit
                </button>
            </form>
        </div>
    )
}