self.addEventListener('message', (e) => {
    const { size, mines } = e.data;
  
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

    const board = createBoard(size, mines);
    postMessage(board);
});
  