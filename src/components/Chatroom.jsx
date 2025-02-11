import React, { useEffect } from 'react';
import { Typography } from '@mui/material';

import io from 'socket.io-client';

export const Chatroom = () => {

    let socket;
    
    useEffect(() => {
        socket = io('http://localhost:5000');
        socket.on('chat message', (msg) => {
            console.log('Received message: ', msg);
        });

        return () => {
            socket.off('chat message');
            socket.disconnect();
        };
    }, []);

    const sendMessage = (message) => {
        console.log("sending message: ", message)
        socket.emit('chat message', message);
    };

    return (
        <div style={{marginLeft: '10px', marginRight: '10px', marginTop: '10px', fontSize: '30px', color: "white"}}>
            <Typography 
            variant='h1'
            textAlign={'center'}
            >
            Chatroom
            </Typography>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
                <img height={400} src='images/underConstruction2.png' alt='Page is under construction'/>
            </div>
            {/* <button onClick={() => sendMessage("Hello World!")}>Send Message</button> */}
        </div>
    );
}