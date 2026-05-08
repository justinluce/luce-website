import React from 'react';

export const NotesAppDetails = () => {
  return (
    <section className='projectDetails'>
      <h2 className='projectDetailsTitle'>Notes App</h2>
      <p className='projectDetailsSubtitle'>Inspired by Google Docs</p>
      <ul className='projectDetailsList'>
        <li>Account management and user authentication</li>
        <li>Create, edit, and delete documents</li>
        <li>Share documents with others and collaborate on the same doc</li>
      </ul>
      <div className='downloadLinks'>
        <a href='https://notes.justinlucedev.com'>Hosted on notes.justinlucedev.com <br />(not anymore because I did not renew my Oracle cluster 😊)</a>
      </div>
    </section>
  );
};
