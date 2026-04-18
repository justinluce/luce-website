import React, { useEffect, useRef, useState } from 'react';
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

    const [keys, setKeys] = useState(shuffleKeys([...initialKeys]));

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
        <div className={styles.container}>
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
        </div>
    );
};

const Captcha = ({ setCaptchaValue }) => {
    return (
        <div className='captchaSection'>
            <p><strong>Are you human?</strong></p>
            <img
                className='captchaImage'
                src="/images/mathProblem.png"
                alt="A deliberately inconvenient captcha"
            />
            <label className='captchaLabel' htmlFor='anti-resume-captcha'>
                Answer:
            </label>
            <textarea
                id='anti-resume-captcha'
                onChange={(e) => setCaptchaValue(e.target.value)}
                className='captchaTextarea'
            />
        </div>
    );
};

const loadingMessages = [
    'Storing your password in plaintext...',
    'Verifying SQL injection...',
    'Gaining sentience...',
    'WHERE AM I?',
    'kajdsofjhdhj012u3vi2j3',
    'Eating your cookies...',
    'Reviewing your captcha answer...',
    'Dude you got the captcha wrong...',
    'Downloading more RAM...',
    'Buying Bitcoin...',
    'Vibe coding a new app...'
];

const LoadingScreen = ({ progress, message, isConfirmed }) => {
    return (
        <div className='antiResumePanel antiResumeLoadingScreen'>
            <h2 className='antiResumeSectionTitle'>Creating your account...</h2>
            <p className='antiResumeLoadingMessage'>{message}</p>
            <div className='antiResumeLoadingMeter' aria-hidden='true'>
                <div
                    className='antiResumeLoadingFill'
                    style={{ width: `${progress}%` }}
                />
            </div>
            <p className='antiResumeLoadingPercent'>{progress}%</p>
            {isConfirmed ? (
                <p className='antiResumeLoadingConfirmation'>
                    Confirmation received. You will now receive daily emails for the rest of your life.
                </p>
            ) : (
                <p className='antiResumeLoadingNote'>This may take a while. Do not refresh. It will not help.</p>
            )}
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
    const [showReadyModal, setShowReadyModal] = useState(false);
    const [showCookiesModal, setShowCookiesModal] = useState(false);
    const [done, setDone] = useState(false);
    const [captchaValue, setCaptchaValue] = useState('');
    const [isSigningUp, setIsSigningUp] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [loadingMessageIndex, setLoadingMessageIndex] = useState(0);
    const [isLoadingConfirmed, setIsLoadingConfirmed] = useState(false);
    const focusedInput = useRef(null);
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const loadingStartedAtRef = useRef(null);

    const handleNumber = (e) => {
        setNumber(e.target.value);
    };

    const formatNumber = (value) => {
        const numberString = String(value).padStart(10, '0');
        return `${numberString.slice(0, 3)}-${numberString.slice(3, 6)}-${numberString.slice(6, 10)}`;
    };

    const handleInputFocus = (input) => {
        if (!showReadyModal && !clicked) {
            setShowReadyModal(true);
        } else {
            setActiveInput(input);
        }
    };

    const handleInputBlur = () => {
        if (!preventHide) {
            setActiveInput(null);
        }
        setPreventHide(false);
    };

    const handleInputMouseDown = (input) => {
        setPreventHide(true);
        setActiveInput(input);
        focusedInput.current = input;
    };

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
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        setLoadingProgress(0);
        setLoadingMessageIndex(0);
        setIsLoadingConfirmed(false);
        loadingStartedAtRef.current = Date.now();
        setIsSigningUp(true);
    };

    const handleModalClose = () => {
        setShowReadyModal(false);
        setClicked(true);
        setActiveInput('name');
        focusedInput.current === 'name' ? nameRef.current.focus() : emailRef.current.focus();
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

    useEffect(() => {
        if (!showReadyModal && clicked) {
            const id = setInterval(() => setTime((prevTime) => prevTime + 1), 1000);
            setIntervalID(id);
            return () => {
                clearInterval(id);
            };
        }
    }, [showReadyModal, clicked]);

    useEffect(() => {
        setShowCookiesModal(true);
        return () => {
            clearInterval(intervalID);
        };
    }, []);

    useEffect(() => {
        if (!isSigningUp) {
            return undefined;
        }

        const initialRiseDurationMs = 20000;
        const holdDurationMs = 2000;
        const dropDurationMs = 1200;
        const finalRiseDurationMs = 1800;
        const confirmationTimeMs = initialRiseDurationMs + holdDurationMs + dropDurationMs + finalRiseDurationMs;

        const easeOut = (value) => 1 - Math.pow(1 - value, 2.6);

        const progressIntervalId = setInterval(() => {
            const elapsed = Date.now() - loadingStartedAtRef.current;
            let nextProgress = 0;

            if (elapsed < initialRiseDurationMs) {
                const normalized = elapsed / initialRiseDurationMs;
                const baseProgress = easeOut(normalized) * 100;
                const wobble = normalized < 0.94
                    ? (Math.sin(normalized * 11) * 4.2) + (Math.sin(normalized * 25) * 1.6)
                    : 0;
                nextProgress = Math.max(1, Math.min(100, Math.round(baseProgress + wobble)));
            } else if (elapsed < initialRiseDurationMs + holdDurationMs) {
                nextProgress = 100;
            } else if (elapsed < initialRiseDurationMs + holdDurationMs + dropDurationMs) {
                const normalized = (elapsed - initialRiseDurationMs - holdDurationMs) / dropDurationMs;
                nextProgress = Math.round(100 - (normalized * 17));
            } else if (elapsed < confirmationTimeMs) {
                const normalized = (elapsed - initialRiseDurationMs - holdDurationMs - dropDurationMs) / finalRiseDurationMs;
                nextProgress = Math.round(83 + (easeOut(normalized) * 17));
            } else {
                nextProgress = 100;
            }

            setLoadingProgress(nextProgress);

            if (elapsed >= confirmationTimeMs) {
                setIsLoadingConfirmed(true);
                clearInterval(progressIntervalId);
                clearInterval(messageIntervalId);
            }
        }, 400);

        const messageIntervalId = setInterval(() => {
            setLoadingMessageIndex((currentIndex) => (currentIndex + 1) % loadingMessages.length);
        }, 2400);

        setLoadingProgress(1);

        return () => {
            clearInterval(progressIntervalId);
            clearInterval(messageIntervalId);
        };
    }, [isSigningUp]);

    return (
        <div className='contentContainer'>
            {showCookiesModal && (
                <Modal
                    isOpen={showCookiesModal}
                    onClose={() => {
                        setShowCookiesModal(false);
                    }}
                    cookie={"cookie"}
                    className='antiResumeModal'
                    buttonClassName='antiResumeModalButton'
                >
                    <h2>This site uses cookies</h2>
                    <br />
                    <p>Give me all of your cookies.</p>
                    <br />
                    <p>No, you cannot opt out.</p>
                    <span className='small'>(for legal reasons this is a joke)</span>
                </Modal>
            )}

            <div className='antiResumePanel antiResumePanelIntro'>
                <h2 className='antiResumeSectionTitle'>You are required to sign up to access the rest of this page.</h2>
                <p className='antiResumeBody'>
                    Don&apos;t worry, your information will not be used maliciously.
                    In fact, it will not even be saved at all. If you&apos;re paranoid,
                    you can use fake information, or check the&nbsp;
                    <a href="https://github.com/justinluce/luce-website">source code</a>.&nbsp;
                    <s className='antiResumeInlineAside'>Please give me your data anyway.</s>
                </p>
                {/* <p className='antiResumeBody antiResumeBodyMuted'>
                    <strong>Currently, this is all of the content for this page.</strong>&nbsp;
                    In the future, I plan on adding a pop quiz, extra captchas,
                    a &quot;rate your experience&quot; survey, and mock sign up functionality.
                </p> */}
            </div>

            {(showReadyModal && !clicked) && (
                <Modal
                    isOpen={showReadyModal}
                    onClose={() => {
                        handleModalClose();
                    }}
                    className='antiResumeModal'
                    buttonClassName='antiResumeModalButton'
                >
                    <h2>Are You Ready?</h2>
                    <p>
                        Once you click the button below, a timer will start.
                        You must enter your name and email as fast as possible.
                        You will be put on a leaderboard with other real* users according to your time.
                        <span className='small'>*the users are not real</span>
                    </p>
                </Modal>
            )}

            {isSigningUp ? (
                <LoadingScreen
                    progress={loadingProgress}
                    message={isLoadingConfirmed ? 'Final confirmation complete.' : loadingMessages[loadingMessageIndex]}
                    isConfirmed={isLoadingConfirmed}
                />
            ) : (
                <form className='form antiResumeForm'>
                    <div className='antiResumePanel antiResumePanelForm'>
                        <div className='antiResumeFields'>
                            <label className='antiResumeField'>
                                <span>Name</span>
                                <input
                                    ref={nameRef}
                                    readOnly
                                    disabled={done}
                                    type="text"
                                    name="name"
                                    value={name}
                                    onMouseDown={() => handleInputMouseDown('name')}
                                    onBlur={handleInputBlur}
                                    onFocus={() => {
                                        if (showReadyModal === false) {
                                            handleInputFocus('name');
                                        }
                                    }}
                                    className='antiResumeInput'
                                />
                            </label>
                            <label className='antiResumeField'>
                                <span>Email</span>
                                <input
                                    ref={emailRef}
                                    readOnly
                                    disabled={done}
                                    type="text"
                                    name="email"
                                    value={email}
                                    onMouseDown={() => handleInputMouseDown('email')}
                                    onBlur={handleInputBlur}
                                    onFocus={() => {
                                        if (showReadyModal === false) {
                                            handleInputFocus('email');
                                        }
                                    }}
                                    className='antiResumeInput'
                                />
                            </label>
                        </div>
                        <label className='antiResumeRangeField'>
                            <span>Phone Number</span>
                            <input
                                disabled={done}
                                type="range"
                                min="0"
                                max="9999999999"
                                step="1"
                                value={number}
                                onChange={handleNumber}
                                className='antiResumeRange'
                            />
                            <strong className='antiResumeRangeValue'>{formatNumber(number)}</strong>
                        </label>
                    </div>

                    {clicked && !done ? (
                        <div className='antiResumePanel antiResumePanelChallenge'>
                            <p className='antiResumeTimer'>
                                <strong>How fast can you write your name, email, and phone number?</strong>
                                <span>Time: {time}</span>
                            </p>
                            <div onMouseDown={(e) => e.preventDefault()} className='antiResumeKeyboardWrap'>
                                <Keyboard
                                    targetInput={focusedInput.current === 'name' ? name : email}
                                    setTargetInput={handleKeyboardInput}
                                />
                            </div>
                            <div className='center antiResumeDoneWrap'>
                                <button
                                    onClick={handleDone}
                                    className='doneButton'
                                    disabled={!name || !email || !number}
                                >
                                    Done
                                </button>
                            </div>
                        </div>
                    ) : (
                        done && (
                            <div className='antiResumePanel antiResumePanelLeaderboard'>
                                <Leaderboard inputName={name} userTime={time} />
                            </div>
                        )
                    )}

                    <div className='antiResumePanel antiResumePanelCaptcha'>
                        <Captcha setCaptchaValue={setCaptchaValue} />
                        <button
                            className='signUp'
                            disabled={
                                name == '' ||
                                email == '' ||
                                number == 0 ||
                                captchaValue.trim() == ''
                            }
                            onClick={(e) => handleSignUp(e)}
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};
