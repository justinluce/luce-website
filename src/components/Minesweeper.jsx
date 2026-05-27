import { Typography } from "@mui/material";
import React, { useState, useEffect, useRef } from 'react';
import '../shared/styled/Minesweeper.css';
import BoardWorker from '../workers/boardWorker?worker&inline';
import { usePageMeta } from '../shared/hooks/usePageMeta';

const Minesweeper = () => {
  usePageMeta({
    title: 'Minesweeper',
    description: 'Play a browser-based Minesweeper built by Justin Luce.'
  });
  const [size, setSize] = useState(10);
  const [mines, setMines] = useState(10);

  const [board, setBoard] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const worker = useRef(null);

  useEffect(() => {
    worker.current = new BoardWorker();

    worker.current.onmessage = function(e) {
      setBoard(e.data);
    }

    worker.current.postMessage({ size, mines });

    return () => worker.current.terminate();
  }, []);

  const revealSquare = (e, row, col) => {
    if (e.button !== 0 ) return;

    if (gameOver || board[row][col].revealed || board[row][col].flagged) return;

    let newBoard = JSON.parse(JSON.stringify(board)); 
    newBoard[row][col].revealed = true;

    if (board[row][col].value === -1) {
        setGameOver(true);
        for (let i = 0; i < newBoard.length; i++) {
          let outer = newBoard[i];
          for (let j = 0; j < outer.length; j++) {
            newBoard[i][j].revealed = true;
          }
        }
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

const resetBoard = (size = 10, mines = 10) => {
    setGameOver(false);
    worker.current.postMessage({ size, mines });
};

const boardSize = (e) => {
    const value = e.target.value;
    const [size, mines] = value.split(',').map(Number);
    setMines(mines);
    setSize(size);
    resetBoard(size, mines);
}

return (
    <div className='minesweeperPage'>
        <Typography 
            variant='h1'
            className='pageTitle pageTitleCompact'
            textAlign={'center'}>
            Minesweeper
        </Typography>
        <div className='minesweeperControls'>
          <button className='minesweeperReset' onMouseUp={() => resetBoard(size, mines)}>Reset</button>
          <label className='game-options' htmlFor="boardSize">
            <span>Board size</span>
            <select id='boardSize' onChange={boardSize}>
              <option value="10,10">10x10, 10 mines</option>
              <option value="16,40">16x16, 40 mines</option>
              <option value="22,99">22x22, 99 mines</option>
            </select>
          </label>
        </div>
        <div className='minesweeperBoardWrap'>
            <div className='minesweeperBoard'>
                {board.map((row, i) => (
                    <div key={i} className='minesweeperRow'>
                {row.map((col, j) => (
                  <button 
                      key={j}
                      onMouseUp={(e) => revealSquare(e, i, j)}
                      onContextMenu={(e) => toggleFlag(e, i, j)}
                      className='minesweeperTile'
                    >
                    {col.revealed ? 
                      (
                      col.value === -1 ? 
                        <img draggable="false" src={`${import.meta.env.BASE_URL}images/minesweeper/TileExploded.png`} alt="Mine" /> : 
                        <img draggable="false" src={`${import.meta.env.BASE_URL}images/minesweeper/Tile${col.value}.png`} alt="Tile" />
                      ) 
                      : col.flagged ? 
                        <img draggable="false" src={`${import.meta.env.BASE_URL}images/minesweeper/TileFlag.png`} alt="Flag" /> :
                        <img draggable="false" src={`${import.meta.env.BASE_URL}images/minesweeper/TileUnknown.png`} alt="Empty Tile" />
                    }
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
