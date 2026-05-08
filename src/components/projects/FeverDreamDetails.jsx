import React from 'react';
import { SmartImage } from '../../shared/components/SmartImage';

export const FeverDreamDetails = () => {

    return (
        <section className='projectDetails'>
            <h2 className='projectDetailsTitle'>Fever Dream 1999</h2>
            <p>
                Justin's Fever Dream 1999 is a collection of parody games about the creative process. 
                Justin will create games for you to play, and you will provide feedback for him.
            </p>
            <p className='projectDetailsSubtitle'>
                Currently working on version 0.2.0.
            </p>
            <div className='projectDetailsImageWrap'>
                <SmartImage className='projectDetailsImage' src='images/feverDreamDetails.webp' alt='A small, square house with a mountain in the background' title='Fever Dream'/>
            </div>
        </section>
    );
}
