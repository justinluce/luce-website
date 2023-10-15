import React, { useState, useRef, useEffect } from 'react';
import styles from '../shared/styled/Keyboard.module.css';
import Modal from '../shared/components/Modal.jsx';
import Leaderboard from '../shared/components/Leaderboard.jsx';
import '../shared/styled/AntiResume.css';

const initialKeys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@.-_'.split('');
const backspaceIndex = Math.floor(Math.random() * (initialKeys.length + 1));
initialKeys.splice(backspaceIndex, 0, { char: 'Backspace', isBackspace: true });

const spaceIndex = Math.floor(Math.random() * (initialKeys.length + 1));
initialKeys.splice(spaceIndex, 0, { char: 'Space', isBackspace: false });

const Keyboard = ({ setTargetInput }) => {
    const shuffleKeys = (keysArray) => {
        return keysArray.sort(() => Math.random() - 0.5);
    };

    const [keys, setKeys] = useState(
        shuffleKeys([...initialKeys])
    );


    const handleClick = (char) => {
        if (char === 'Space') {
            setTargetInput((prev) => prev + ' ');
        } else {
            setTargetInput((prev) => prev + char);
        }

        setKeys(shuffleKeys([...keys]));
    };

    const handleBackspace = () => {
        setTargetInput((prev) => prev.slice(0, -1));
        setKeys(shuffleKeys([...keys]));
    };

    return (
        <div className={styles.Keyboard}>
            {keys.map((item, index) => {
                if (typeof item === 'string') {
                    return (
                        <button
                            type='button'
                            key={index}
                            onClick={() => handleClick(item)}
                            className={styles.key}
                        >
                            {item}
                        </button>
                    );
                }

                return item.isBackspace ? (
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
                        className={`${styles.key} ${styles.space}`}
                    >
                        {item.char}
                    </button>
                );
            })}
        </div>
    );  
}  


const Captcha = () => {
    const [isSolved, setIsSolved] = useState(false);
    return (
        <div style={{ marginTop: '20px' }}>
            <p><strong>Are you human?</strong></p>
            <img height={200} width={500}
            src="/images/mathProblem.png" />
            <br></br>
            Answer:
            <br></br>
            <textarea style={{width: '500px', height: '200px', marginTop: '20px', fontSize: '24px'}}></textarea>
        </div>
    );
};

export const AntiResumeContent = () => {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [time, setTime] = useState(0);
    const [activeInput, setActiveInput] = useState(null);
    const [preventHide, setPreventHide] = useState(false);
    const [intervalID, setIntervalID] = useState(null);
    const [clicked, setClicked] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [done, setDone] = useState(false);
    const focusedInput = useRef(null);
    const nameRef = useRef(null);
    const emailRef = useRef(null);

    const handleNumber = (e) => {
        setNumber(e.target.value);
    }

    const formatNumber = (number) => {
        const numberString = String(number).padStart(10, '0');
        return `${numberString.slice(0, 3)}-${numberString.slice(3, 6)}-${numberString.slice(6, 10)}`;
    }

    const handleInputFocus = (input) => {
        if (!showModal && !clicked) {
            setShowModal(true);
            console.log("showmodal is true");
        } else {
            setActiveInput(input);
        }
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

    const handleDone = (e) => {
        e.preventDefault();
        setDone(true);
        clearInterval(intervalID);
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        //TODO: Sign the user up to access the rest of the page
    }

    const handleModalClose = () => {
        setShowModal(false);
        setClicked(true);
        setActiveInput('name');
        focusedInput.current === 'name' ? nameRef.current.focus() : emailRef.current.focus();
    }

    useEffect(() => {
        console.log(activeInput);
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

    useEffect(() => {
        if (!showModal && clicked) {
            const id = setInterval(() => setTime(prevTime => prevTime + 1), 1000);
            setIntervalID(id);
            return () => {
                clearInterval(id);
            }
        }
    }, [showModal, clicked]);

    useEffect(() => {
        return () => {
            clearInterval(intervalID);
        };
    }, []);

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
            <strong>Currently, this is all of the content for this page.</strong> 
            In the future, I plan on adding a pop quiz, extra captchas,
            a 'rate your experience' survey, and mock sign up functionality. 
        </p>
        {(showModal && !clicked) &&
            <Modal 
                isOpen={showModal} 
                onClose={() => {
                    handleModalClose();
                }}>
                <h2>Are You Ready?</h2>
                <p>
                    Once you click the button below, a timer will start. 
                    You must enter your name and email as fast as possible.
                    You will be put on a leaderboard with other real* users according to your time.
                    <span className='small'>*the users are not real</span>
                </p>
            </Modal>
        }
            <form>
                <label style={{marginRight: '10px'}}>
                    Name:
                    <input
                        ref={nameRef}
                        readOnly 
                        type="text" 
                        name="name" 
                        value={name} 
                        onMouseDown={() => handleInputMouseDown('name')}
                        onBlur={handleInputBlur}
                        onFocus={() => {
                            if (showModal === false) {
                                handleInputFocus('name')
                            }
                        }}
                        style={{width: '200px', height: '30px', marginLeft: '10px'}}
                        />
                </label>
                <label style={{marginRight: '10px'}}>
                    Email:
                    <input
                        ref={emailRef}
                        readOnly 
                        type="text" 
                        name="email" 
                        value={email} 
                        onMouseDown={() => handleInputMouseDown('email')}
                        onBlur={handleInputBlur}
                        onFocus={() => {
                            if (showModal === false) {
                                handleInputFocus('email')
                            }
                        }}
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
            {clicked && !done ? (
                <>
                <div>
                    <p><strong>How fast can you write your name and email?</strong>
                    <br></br>
                    Time: {time}</p>
                </div>
                <div onMouseDown={(e) => e.preventDefault()}>
                    <Keyboard 
                        targetInput={focusedInput.current === 'name' ? name : email} 
                        setTargetInput={handleKeyboardInput} />
                </div>
                <div className='center'>
                    <button
                        onClick={handleDone}
                        className='doneButton'
                    >
                        Done
                    </button>
                </div>
                </>
            ) : (
                done && <Leaderboard inputName={name} userTime={time} />
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
                    onClick={(e) => handleSignUp(e)}
                    >
                    Sign Up
                </button>
            </form>
        </div>
    )
}