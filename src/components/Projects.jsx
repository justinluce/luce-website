import React, { useEffect, useState, useRef } from 'react';
import { Typography } from '@mui/material';
import { MinesweeperDetails } from './projects/MinesweeperDetails';
import { WebsiteDetails } from './projects/WebsiteDetails';
import { FeverDreamDetails } from './projects/FeverDreamDetails';
import '../shared/styled/Projects.css';
import { MiscDetails } from './projects/MiscDetails';
import { AntiResumeDetails } from './projects/AntiResumeDetails';
import { NotesAppDetails } from './projects/NotesAppDetails';
import { SmartImage } from '../shared/components/SmartImage';
import { usePageMeta } from '../shared/hooks/usePageMeta';

const projects = [
    { id: 'misc', label: 'Misc', Details: MiscDetails },
    { id: 'feverDream', label: 'Fever Dream', Details: FeverDreamDetails },
    { id: 'website', label: 'Website', Details: WebsiteDetails },
    { id: 'anti-resume', label: 'Anti-Resume', Details: AntiResumeDetails },
    { id: 'notesApp', label: 'Notes App', Details: NotesAppDetails }
];

export const Projects = () => {
    usePageMeta({
        title: 'Projects',
        description: 'Coding and web projects by Justin Luce — games, web apps, and experiments.'
    });
    const [projectOpen, setProjectOpen] = useState(1);
    const projectCount = projects.length;
    const ActiveProjectDetails = projects[projectOpen].Details;
    const galleryRef = useRef(null);

    useEffect(() => {
        [
            ...projects.map((project) => `/images/${project.id}.webp`),
            '/images/feverDreamDetails.webp'
        ].forEach((src) => {
            const image = new Image();
            image.src = src;
        });
    }, []);

    const handleClick = (index) => {
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

    return (
        <div className='mainProjectContainer projectPage' onKeyDown={handleArrowKeys} ref={galleryRef} tabIndex={0}>
            <Typography variant='h1' textAlign={'center'} className='pageTitle'>
                Projects
            </Typography>
            <div className="galleryContainer" aria-label='Project gallery'>
                {projects.map((project, index) => (
                    <button
                        type='button'
                        key={project.id}
                        onClick={() => handleClick(index)}
                        className={getClassName(index)}
                        aria-label={`Show ${project.label}`}
                    >
                        <span className='projectCardTitle'>{project.label}</span>
                        <SmartImage src={`/images/${project.id}.webp`} alt='' />
                    </button>
                ))}
            </div>
            <div className='arrowContainer'>
                <button
                    type='button'
                    className='arrowButton'
                    onClick={handleLeftArrowClick}
                    aria-label='Previous project'
                >
                    <img src='/images/leftArrow.png' className='arrow leftArrow' alt='' decoding='async' />
                </button>
                <button
                    type='button'
                    className='arrowButton'
                    onClick={handleRightArrowClick}
                    aria-label='Next project'
                >
                    <img src='/images/leftArrow.png' className='arrow rightArrow' alt='' decoding='async' />
                </button>
            </div>

            <ActiveProjectDetails />
        </div>
    );
};
