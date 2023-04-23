import React from 'react';
import { Img } from '../shared/styled/Img';
import { FlexContainer } from '../shared/styled/FlexContainer';

export const Home = () => {
    return (
        <div>
        <FlexContainer flexDirection='column' alignItems="flex-start" justifyContent='flex-start' width='auto'>
            <h1>Justin Luce</h1>
            <Img 
                src="/Headshot.jpg"
                alt="Justin Luce"
                width="200"
                clipPath="circle()"
            />
        </FlexContainer>
        </div>
    );
}