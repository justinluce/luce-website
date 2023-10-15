import React, { useState, useEffect } from 'react';
import './Components.css';

const Modal = ({ isOpen, onClose, children }) => {
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    if (isAnimatingOut) {
      const timeout = setTimeout(() => {
        onClose();
        setIsAnimatingOut(false);
      }, 400);

      return () => clearTimeout(timeout);
    }
  }, [isAnimatingOut, onClose]);

  if (!isOpen && !isAnimatingOut) {
    return null;
  }

  const handleClose = () => {
    setIsAnimatingOut(true);
  };

  return (
    <div className="modal-overlay">
      <div className={`modal-content ${isAnimatingOut ? 'modal-disappear' : 'modal-appear'}`}>
        {children}
        <button 
          onClick={handleClose}>I Am Ready</button>
      </div>
    </div>
  );
}

export default Modal;
