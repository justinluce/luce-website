import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import './PennyBot.css'

export const PennyBot = () => {
    const [response, setResponse] = useState([]);
    const [userInput, setUserInput] = useState("");

    useEffect(() => {
        const ws = new WebSocket("ws://localhost:3978/ws");
      
        ws.onopen = () => {
          console.log("Connected to WebSocket");
        };
      
        ws.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                if (data.message) {
                    const messageText = JSON.parse(data.message);
                    setResponse(curr => [...curr, messageText]);
                }
            } catch (error) {
                console.error('Error parsing WebSocket message:', error);
            }
        };
      
        ws.onerror = (error) => {
          console.error("WebSocket error:", error);
        };
      
        return () => {
          ws.close();
        };
      }, []);
      

    useEffect(() => {
        console.log(response)
    }, [response]);

    async function sendMessage(userInput) {
        setResponse(curr => [...curr, {source: "User", text: userInput}]);
        setUserInput("");
        const activity = {
            type: "message",
            from: { id: "user" },
            text: userInput
          };
        try {
          const response = await fetch('http://localhost:3978/api/messages', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(activity)
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
      
          const data = await response.json();
          // Process and display the response in your UI
          setResponse(curr => [...curr, { source: "Penny", text: data.message }]);
        } catch (error) {
          console.error('Error parsing WebSocket message:', error);
        }
    }      

    return (
        <div className='mainContainer'>
            <div className='container'>
                <div className='chat'>
                  <ul className='chatList'>
                    {response.map((msg, index) => (
                      <li key={index}>
                          <strong>{msg.source}: </strong>{msg.text}
                      </li>
                    ))}
                  </ul>
                <div className='textboxHolder'>
                    <textarea 
                        className='textbox'
                        placeholder='Talk to Penny' 
                        value={userInput} 
                        onChange={e => setUserInput(e.target.value)}></textarea>
                    <button 
                        onClick={() => sendMessage(userInput)}
                        className='sendButton'>Send
                    </button>
                  </div>
                </div>
                </div>
                <div className='penny'>

                </div>
        </div>
    );
}