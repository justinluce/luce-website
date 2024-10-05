import React, { useEffect, useState, useRef } from 'react';
import { Typography } from '@mui/material';
import { FlexContainer } from '../shared/styled/FlexContainer';
import { Img } from '../shared/styled/Img';
import { MinesweeperDetails } from './projects/MinesweeperDetails';
import { WebsiteDetails } from './projects/WebsiteDetails';
import { FeverDreamDetails } from './projects/FeverDreamDetails';
import { ChessDetails } from './projects/ChessDetails';
import '../shared/styled/Projects.css';

export const Projects = () => {
    const [projectOpen, setProjectOpen] = useState(1);
    const projectList = [
        'minesweeper',
        'feverDream',
        'website',
        'chess',
    ];
    const projectCount = projectList.length;
    const galleryRef = useRef(null);
    const arrowRef = useRef(null);

    const handleClick = (index) => {
        console.log(index);
        setProjectOpen(index);
    }

    const handleLeftArrowClick = () => {
        setProjectOpen((prevProject) => (prevProject === 0 ? projectCount - 1 : prevProject - 1));
    };

    const handleRightArrowClick = () => {
        setProjectOpen((prevProject) => (prevProject === projectCount - 1 ? 0 : prevProject + 1));
    };

    const getClassName = (index) => {
        if (index === projectOpen) return 'projectCard active';
        if ((index + 1) % projectCount === projectOpen) return 'projectCard left';
        if ((index - 1 + projectCount) % projectCount === projectOpen) return 'projectCard right';
        return 'projectCard behind';
    };

    const handleArrowKeys = (e) => {
        if (e.key == "ArrowLeft") {
            e.preventDefault();
            handleLeftArrowClick();
        }
        if (e.key == "ArrowRight") {
            e.preventDefault();
            handleRightArrowClick();
        }
        galleryRef.current.focus();
    }

    const handleArrowEnter = (e) => {
        arrowRef.current = e.target;
        arrowRef.current.src = '/images/leftArrowYellow.png';
    }

    const handleArrowLeave = (e) => {
        arrowRef.current = e.target;
        arrowRef.current.src = '/images/leftArrow.png';
    }

    return (
        <div className='mainProjectContainer' onKeyDown={handleArrowKeys} ref={galleryRef} tabIndex={0}>
            <Typography variant='h1' textAlign={'center'}>
                Projects
            </Typography>
            <FlexContainer className="galleryContainer">
                {projectList.map((project, index) => (
                    <div
                        key={project}
                        onClick={() => handleClick(index)}
                        className={getClassName(index)}
                    >
                        <div style={{ borderBottom: '2px solid black' }}>
                            {project.charAt(0).toUpperCase() + project.slice(1)}
                        </div>
                        <Img src={`/images/${project}.webp`} height={'350px'} width={'400px'} />
                    </div>
                ))}
                <div className='arrowContainer'>
                    <img
                        src='/images/leftArrow.png'
                        className='arrow leftArrow'
                        onClick={handleLeftArrowClick}
                        onMouseEnter={(e) => handleArrowEnter(e)}
                        onMouseLeave={(e) => handleArrowLeave(e)}
                    />
                    <img
                        src='/images/leftArrow.png'
                        className='arrow rightArrow'
                        onClick={handleRightArrowClick}
                        onMouseEnter={(e) => handleArrowEnter(e)}
                        onMouseLeave={(e) => handleArrowLeave(e)}
                    />
                </div>
            </FlexContainer>

            {projectOpen === 0 && <MinesweeperDetails />}
            {projectOpen === 1 && <FeverDreamDetails />}
            {projectOpen === 2 && <WebsiteDetails />}
            {projectOpen === 3 && <ChessDetails />}
        </div>
    );
};
