import { Typography } from "@mui/material";
import React, { useState, useEffect } from 'react';
import '../App.css';

const incrementAdjacentTiles = (board, row, col, size) => {
    for(let i = Math.max(row - 1, 0); i <= Math.min(row + 1, size - 1); i++) {
      for(let j = Math.max(col - 1, 0); j <= Math.min(col + 1, size - 1); j++) {
        if(board[i][j].value !== -1) {
          board[i][j].value += 1;
        }
      }
    }
  };
  
  const createBoard = (size, mines) => {
    const board = Array(size).fill(0).map(() => Array(size).fill(null).map(() => ({value: 0, revealed: false, flagged: false})));
  
    for(let i = 0; i < mines; i++) {
      let row, col;
  
      do {
        row = Math.floor(Math.random() * size);
        col = Math.floor(Math.random() * size);
      } while(board[row][col].value === -1);
  
      board[row][col] = {value: -1, revealed: false};
  
      incrementAdjacentTiles(board, row, col, size);
    }
  
    return board;
  };
  
const Minesweeper = () => {
  const size = 10;
  const mines = 10;

  const [board, setBoard] = useState(createBoard(size, mines));
  const [gameOver, setGameOver] = useState(false);

  const revealSquare = (e, row, col) => {
    if (e.button !== 0 ) return;

    if (gameOver || board[row][col].revealed || board[row][col].flagged) return;

    let newBoard = JSON.parse(JSON.stringify(board)); 
    newBoard[row][col].revealed = true;

    if (board[row][col].value === -1) {
        setGameOver(true);
        // alert('Game over! You hit a mine.');
        setBoard(newBoard);
        return;
    }

    setBoard(newBoard);
  };

const toggleFlag = (e, row, col) => {
    e.preventDefault();
    e.stopPropagation();

    if (gameOver || board[row][col].revealed) return;

    let newBoard = JSON.parse(JSON.stringify(board)); 
    newBoard[row][col].flagged = !newBoard[row][col].flagged;
    setBoard(newBoard);
  };

const resetBoard = () => {
    setBoard(createBoard(size, mines));
    setGameOver(false);
};

return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <Typography 
            variant='h1'
            textAlign={'center'}>
            Minesweeper
        </Typography>
        <button onMouseUp={resetBoard} style={{ margin: '20px', height: '40px', width: '160px' }}>Reset</button>
        <h4>This game is for sure working as intended.</h4>
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)' }}>
              {gameOver && <h3>You lost!</h3>}
          </div>
            <div style={{ margin: 'auto', display: 'block', maxWidth: 'fit-content', border: '2px solid black'}}>
                {board.map((row, i) => (
                    <div key={i} style={{ fontSize: 0, lineHeight: 0, textAlign: 'center'}}>
                {row.map((col, j) => (
                    <button 
                        key={j}
                        onMouseUp={(e) => revealSquare(e, i, j)}
                        onContextMenu={(e) => toggleFlag(e, i, j)}
                        style={{ border: 'none', background: 'none', padding: 0, margin: 0, fontSize: '1rem', verticalAlign: 'top' }}
                        >
                        {col.revealed ? 
                            (col.value === -1 ? 
                            <img draggable="false" src={`${process.env.PUBLIC_URL}/images/minesweeper/TileExploded.png`} style={{height: "40px", width: "40px", display: 'block'}} alt="Mine" /> : 
                            <img draggable="false" src={`${process.env.PUBLIC_URL}/images/minesweeper/Tile${col.value}.png`} style={{height: "40px", width: "40px", display: 'block'}} alt="Tile" />) : 
                            col.flagged ? 
                            <img draggable="false" src={`${process.env.PUBLIC_URL}/images/minesweeper/TileFlag.png`} style={{height: "40px", width: "40px", display: 'block'}} alt="Flag" /> :
                            <img draggable="false" src={`${process.env.PUBLIC_URL}/images/minesweeper/TileUnknown.png`} style={{height: "40px", width: "40px", display: 'block'}} alt="Empty Tile" />}
                      </button>
                ))}
              </div>
            ))}
          </div>
        </div>
    </div>
  );  
};

export default Minesweeper;
