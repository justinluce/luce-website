import React from 'react';
import { Typography } from '@mui/material';

export const NotesAppDetails = () => {
  return (
    <div className="mainProjectContainer">
      <Typography variant="h4" textAlign="center" style={{ marginBottom: '10px' }}>
        Notes App
      </Typography>
      <Typography variant="h6" textAlign="center" style={{ marginBottom: '10px' }}>
        Inspired by Google Docs
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>Account management and user authentication</li>
            <li>Create, edit, and delete documents</li>
            <li>Share documents with others and collaborate on the same doc</li>
        </ul>
      </div>
      <div className="downloadLinks">
        <a href="https://notes.justinlucedev.com">Hosted on notes.justinlucedev.com</a>
      </div>
    </div>
  );
};
