import React, { useState, useRef } from 'react';

export const Headshot = () => {
    const [leftPupil, setLeftPupil] = useState({ x: 0, y: 0 });
    const [rightPupil, setRightPupil] = useState({ x: 0, y: 0 });
    const [showEyes, setShowEyes] = useState(false);
    
    const leftEyeRef = useRef(null);
    const rightEyeRef = useRef(null);
  
    const PUPIL_MOVEMENT_LIMIT = 10; // in pixels
  
    const getPupilOffset = (eyeRect, clientX, clientY) => {
      const centerX = eyeRect.left + eyeRect.width / 2;
      const centerY = eyeRect.top + eyeRect.height / 2;
  
      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;
  
      // Limiting the pupil movement so it stays within the white part
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
      if (distance > PUPIL_MOVEMENT_LIMIT) {
        const ratio = PUPIL_MOVEMENT_LIMIT / distance;
        return { x: deltaX * ratio, y: deltaY * ratio };
      }
      return { x: deltaX, y: deltaY };
    };
  
    const handleMouseMove = (e) => {
      if (leftEyeRef.current && rightEyeRef.current) {
        const leftRect = leftEyeRef.current.getBoundingClientRect();
        const rightRect = rightEyeRef.current.getBoundingClientRect();
  
        const leftOffset = getPupilOffset(leftRect, e.clientX, e.clientY);
        const rightOffset = getPupilOffset(rightRect, e.clientX, e.clientY);
  
        setLeftPupil(leftOffset);
        setRightPupil(rightOffset);
      }
    };

    return (
        <div
      style={{
        position: 'relative',
        display: 'inline-block'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setShowEyes(true)}
      onMouseLeave={() => setShowEyes(false)}
    >
      <img
        src='/images/luceHeadshot.webp'
        id='headshot'
        style={{ display: 'block' }}
        alt="Headshot"
      />

      <div
        id='googly-eyes'
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          opacity: showEyes ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      >
        <div
          id='left-eye'
          ref={leftEyeRef}
          style={{
            position: 'absolute',
            width: '40px',
            height: '40px',
            top: '30%', 
            left: '48%'
          }}
        >
          <img
            className='white-circle'
            src='/images/whiteCircle.png'
            alt="White Eye"
            style={{ width: '100%', height: '100%' }}
          />
          <img
            className='black-circle'
            src='/images/blackCircle.png'
            alt="Pupil"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(${leftPupil.x}px, ${leftPupil.y}px) translate(-50%, -50%)`,
              width: '20px',
              height: '20px'
            }}
          />
        </div>

        <div
          id='right-eye'
          ref={rightEyeRef}
          style={{
            position: 'absolute',
            width: '40px',
            height: '40px',
            top: '31%',
            left: '62%'
          }}
        >
          <img
            className='white-circle'
            src='/images/whiteCircle.png'
            alt="White Eye"
            style={{ width: '100%', height: '100%' }}
          />
          <img
            className='black-circle'
            src='/images/blackCircle.png'
            alt="Pupil"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(${rightPupil.x}px, ${rightPupil.y}px) translate(-50%, -50%)`,
              width: '20px',
              height: '20px'
            }}
          />
        </div>
      </div>
    </div>
    )
}