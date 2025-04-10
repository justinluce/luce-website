import { useEffect, useState } from 'react';
import '../shared/styled/TicTacToe.css';
import ReactMarkdown from 'react-markdown';
import MinimaxDoc from '/Minimax.md?url&raw'; 

export const TicTacToe = () => {
    const [board, setBoard] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]);
    const [turn, setTurn] = useState(true);
    const [result, setResult] = useState(null);

    useEffect(() => {
        const symbol = checkWinner(board);

        if (symbol === 'O') {
            setResult('You lost!');
            return;
        }
        
        const boardFull = board.every(row => row.every(cell => cell !== null));
        if (!symbol && boardFull) {
            setResult('Draw!');
        } else {
            setResult(null);
        }
    }, [board]);

    // Check if there's a winner on the board.
    // Scan each row, column, diagonal for three identical non-null entries.
    function checkWinner(board) {
        // Check rows
        for (let i = 0; i < 3; i++) {
            if (board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
                return board[i][0];
            }
        }
        // Check columns
        for (let j = 0; j < 3; j++) {
            if (board[0][j] && board[0][j] === board[1][j] && board[1][j] === board[2][j]) {
                return board[0][j];
            }
        }
        // Check diagonals
        if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
            return board[0][0];
        }
        if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
            return board[0][2];
        }
        return null;
    }

    // Returns +10 if 'O' (computer) wins, -10 if 'X' (player) wins, 0 if nobody wins.
    function evaluateBoard(board) {
        const winner = checkWinner(board);
        if (winner == 'O') return 10;
        if (winner == 'X') return -10;
        return 0;
    }

    // Check if there are any moves left (if every entry on the board isn't null).
    function isMovesLeft(board) {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] == null) return true; 
            }
        }

        return false;
    }

    // This function simulates all possible moves by using the 'minimax' algorithm.
    // It will choose the move that maximizes the computer's score while minimizing the player's score.
    // The 'depth' parameter is for the amount of moves it takes to reach a terminal state.
    function minimax(board, depth, isMaximizing) {
        const score = evaluateBoard(board);

        // If there's a terminal state (meaning a win/loss/draw), return score adjusted by depth to favor faster wins or slower losses.
        if (score == 10) return score - depth;
        if (score == -10) return score + depth;
        if (!isMovesLeft(board)) return 0;

        if (isMaximizing) {
            let best = -Infinity;
            for (let i = 0; i < board.length; i++) {
                for (let j = 0; j < board[i].length; j++) {
                    if (board[i][j] == null) {
                        board[i][j] = 'O';
                        best = Math.max(best, minimax(board, depth + 1, false));
                        board[i][j] = null;
                    }
                }
            }
            return best;
        } else {
            let best = Infinity;
            for (let i = 0; i < board.length; i++) {
                for (let j = 0; j < board[i].length; j++) {
                    if (board[i][j] == null) {
                        board[i][j] = 'X';
                        best = Math.min(best, minimax(board, depth + 1, true));
                        board[i][j] = null;
                    }
                }
            }
            return best;
        }
    }

    // Iterates through all empty cells, applying minimax to each move.
    // Will select the move with the highest score evaluated by our minimax function
    function computerTurn(board) {
        let bestVal = -Infinity;
        let bestMove = null;

        // Evaluate every possible move for the computer
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] == null) {
                    board[i][j] = 'O';
                    const moveVal = minimax(board, 0, false);
                    board[i][j] = null;
                    if (moveVal > bestVal) {
                        bestVal = moveVal;
                        bestMove = { i, j };
                    }
                }
            }
        }

        // If a best move is found, update the board
        if (bestMove) {
            const newBoard = board.map(row => [...row]);
            newBoard[bestMove.i][bestMove.j] = 'O';
            setBoard(newBoard);
            setTurn(true);
        }
    }

    function handleClick(row, col) {
        if (!turn || result) return; // Prevents the user from clicking if it's not their turn
        if (board[row][col]) return; // Prevents the user from overwriting what's already in a cell

        console.log(row, col);

        // Copies the board to a newBoard so we don't edit the current one
        const newBoard = board.map(r => [...r]);
        newBoard[row][col] = "X";

        if (checkWinner(newBoard)) {
            setBoard(newBoard);
        } else {
            setBoard(newBoard);
            setTurn(!turn);
            setTimeout(() => {
                computerTurn(newBoard);
            }, 500);
        }
    }

    const resetGame = () => {
        setBoard([
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ]);
        setTurn(true);
    }

    return (
        <div id='main-container'>
            <h1>Tic-Tac-Toe</h1>
            <p>
                A Tic-Tac-Toe game I made to teach my students about the Minimax aglorithm, explained below.
            </p>
            {result}
            <div id='container'>
                {board.map((row, rowIndex) => (
                    row.map((cell, colIndex) => (
                        <div key={`${rowIndex}-${colIndex}`} onClick={() => handleClick(rowIndex, colIndex)}>
                            {cell}
                        </div>
                    ))
                ))}
            </div>
            <button onClick={resetGame} style={{
                width: '150px',
                height: '75px'
            }}>Reset</button>
            <div className='markdown-body explanation'>
                <ReactMarkdown>{MinimaxDoc}</ReactMarkdown>
            </div>
        </div>
    )
}

export default TicTacToe;