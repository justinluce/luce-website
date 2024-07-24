import { useEffect, useState } from 'react';
import '../shared/styled/Chess.css';

export const Chess = () => {
    const [selectedPiece, setSelectedPiece] = useState();
    const [turn, setTurn] = useState('White');
    const [winner, setWinner] = useState();
    const [promotionPosition, setPromotionPosition] = useState({ top: 0, left: 0 });
    const [promotionPiece, setPromotionPiece] = useState(null);
    const [showPromotion, setShowPromotion] = useState(false);
    const [promotionColor ,setPromotionColor] = useState("");

    // Imports the images from the cards folder. 'true' is telling it to include all folders within the cards folder
    const images = require.context('../ChessPieces', true);

    // Loops through the images and puts all of them in an array
    // const imageList = images.keys().map(image => images(image));

    // Each piece needs its current position, the name, image source
    const coordinates = [
        { currentPosition: 'A8', src: "BlackRook0"}, {currentPosition: 'B8', src: "BlackKnight0"},
        { currentPosition: 'C8', src: "BlackBishop0"}, {currentPosition: 'D8', src: "BlackQueen"},
        { currentPosition: 'E8', src: "BlackKing"}, {currentPosition: 'F8', src: "BlackBishop1"},
        { currentPosition: 'G8', src: "BlackKnight1"}, {currentPosition: 'H8', src: "BlackRook1"},
        { currentPosition: 'A7', src: "BlackPawn0"}, {currentPosition: 'B7', src: "BlackPawn1"},
        { currentPosition: 'C7', src: "BlackPawn2"}, {currentPosition: 'D7', src: "BlackPawn3"},
        { currentPosition: 'E7', src: "BlackPawn4"}, {currentPosition: 'F7', src: "BlackPawn5"},
        { currentPosition: 'G7', src: "BlackPawn6"}, {currentPosition: 'H7', src: "BlackPawn7"},
        { currentPosition: 'A6', src: "null"}, {currentPosition: 'B6', src: "null"},
        { currentPosition: 'C6', src: "null"}, {currentPosition: 'D6', src: "null"},
        { currentPosition: 'E6', src: "null"}, {currentPosition: 'F6', src: "null"},
        { currentPosition: 'G6', src: "null"}, {currentPosition: 'H6', src: "null"},
        { currentPosition: 'A5', src: "null"}, {currentPosition: 'B5', src: "null"},
        { currentPosition: 'C5', src: "null"}, {currentPosition: 'D5', src: "null"},
        { currentPosition: 'E5', src: "null"}, {currentPosition: 'F5', src: "null"},
        { currentPosition: 'G5', src: "null"}, {currentPosition: 'H5', src: "null"},
        { currentPosition: 'A4', src: "null"}, {currentPosition: 'B4', src: "null"},
        { currentPosition: 'C4', src: "null"}, {currentPosition: 'D4', src: "null"},
        { currentPosition: 'E4', src: "null"}, {currentPosition: 'F4', src: "null"},
        { currentPosition: 'G4', src: "null"}, {currentPosition: 'H4', src: "null"},
        { currentPosition: 'A3', src: "null"}, {currentPosition: 'B3', src: "null"},
        { currentPosition: 'C3', src: "null"}, {currentPosition: 'D3', src: "null"},
        { currentPosition: 'E3', src: "null"}, {currentPosition: 'F3', src: "null"},
        { currentPosition: 'G3', src: "null"}, {currentPosition: 'H3', src: "null"},
        { currentPosition: 'A2', src: "WhitePawn0"}, {currentPosition: 'B2', src: "WhitePawn1"},
        { currentPosition: 'C2', src: "WhitePawn2"}, {currentPosition: 'D2', src: "WhitePawn3"},
        { currentPosition: 'E2', src: "WhitePawn4"}, {currentPosition: 'F2', src: "WhitePawn5"},
        { currentPosition: 'G2', src: "WhitePawn6"}, {currentPosition: 'H2', src: "WhitePawn7"},
        { currentPosition: 'A1', src: "WhiteRook0"}, {currentPosition: 'B1', src: "WhiteKnight0"},
        { currentPosition: 'C1', src: "WhiteBishop0"}, {currentPosition: 'D1', src: "WhiteQueen"},
        { currentPosition: 'E1', src: "WhiteKing"}, {currentPosition: 'F1', src: "WhiteBishop1"},
        { currentPosition: 'G1', src: "WhiteKnight1"}, {currentPosition: 'H1', src: "WhiteRook1"},
    ];

    const [pieces, setPieces] = useState(coordinates);

    function setBackgroundColor(index) {
        const row = Math.floor(index / 8);
        const col = index % 8;
        return (row + col) % 2 === 0 ? '' : 'black';
    }
    
    function isInCheck(currentTurn) {
        const king = pieces.find(piece => piece.src.includes(currentTurn + "King"));
        if (!king) {
            console.log(`${currentTurn === "White" ? "Black" : "White"} wins`);
            setWinner(currentTurn === "White" ? "Black" : "White");
            return;
        }
        let kingPosition = king.currentPosition;

        return pieces.some(item => {
            if (item.src.includes(currentTurn === "White" ? "Black" : "White")) {
                return movePieces(item, { currentPosition: kingPosition, src: `${currentTurn}King` });
            }
            return false;
        });
    }

    function movePieces(item, target) {
        function checkPath(rowIncrement, colIncrement) {
            let currentSquare = item.currentPosition;
            let currentCol = currentSquare.substring(0, 1).charCodeAt(0);
            let currentRow = parseInt(currentSquare.substring(1, 2));
            let pawnMove = Math.abs(rowIncrement);

            if (currentCol > target.currentPosition.substring(0, 1).charCodeAt(0)) {
                colIncrement = -1;
            }

            if (currentRow > target.currentPosition.substring(1, 2)) {
                rowIncrement = -1;
            }
            
            // Loops from our current square to our target square
            // If there's a piece in between any of them, return false
            while (currentSquare !== target.currentPosition) {
                if (item.src.includes("BlackPawn") && (item.currentPosition.substring(1, 2) - currentRow >= pawnMove)) {
                    // Stop the loop if the pawn moved more than 2 spaces
                    return false;
                }
                currentCol += colIncrement;
                currentRow += rowIncrement;

                currentSquare = String.fromCharCode(currentCol) + currentRow;
                
                if (currentSquare === target.currentPosition) {
                    console.log("currentSquare === target.currentPosition: ", target.currentPosition);
                    return true;
                }
                
                if (pieces.some(piece => piece.currentPosition === currentSquare && piece.src !== 'null')) {
                    return false;
                }

                if (currentCol < 'A'.charCodeAt(0) || currentCol > 'H'.charCodeAt(0) || currentRow < 1 || currentRow > 8) {
                    console.error(currentSquare);
                    return false;
                }
            }

            return true;
        }

        if (item.src.includes('Pawn')) {
            if (turn === 'White') {
                let moveAmount;
                item.currentPosition.substring(1, 2) == 2 ? moveAmount = 2 : moveAmount = 1;
                // Vertical Movement
                if (target.currentPosition.substring(1, 2) - item.currentPosition.substring(1, 2) <= moveAmount &&
                    target.currentPosition.substring(1, 2) - item.currentPosition.substring(1, 2) !== -1 &&
                    Math.abs(target.currentPosition.substring(0, 1).charCodeAt(0) - item.currentPosition.substring(0, 1).charCodeAt(0)) === 0 &&
                    target.src == "null" &&
                    (checkPath(1, 0) || checkPath(2, 0))
                    ||
                    // Diagonal Movement
                    Math.abs(target.currentPosition.substring(0, 1).charCodeAt(0) - item.currentPosition.substring(0, 1).charCodeAt(0)) == 1 &&
                    (target.currentPosition.substring(1, 2) - item.currentPosition.substring(1, 2)) == 1 &&
                    target.src !== "null" 
                    ) {
                        return true;
                    } else {
                    return false;
                }
            } else {
                let moveAmount;
                item.currentPosition.substring(1, 2) == 7 ? moveAmount = -2 : moveAmount = -1;
                if (target.currentPosition.substring(1, 2) - item.currentPosition.substring(1, 2) <= Math.abs(moveAmount) &&
                    target.currentPosition.substring(1, 2) - item.currentPosition.substring(1, 2) !== 1 &&
                    Math.abs(target.currentPosition.substring(0, 1).charCodeAt(0) - item.currentPosition.substring(0, 1).charCodeAt(0)) === 0 &&
                    target.src == "null" &&
                    (checkPath(-1, 0) || checkPath(-2 ,0))
                    ||
                    Math.abs(target.currentPosition.substring(0, 1).charCodeAt(0) - item.currentPosition.substring(0, 1).charCodeAt(0)) == 1 &&
                    (target.currentPosition.substring(1, 2) - item.currentPosition.substring(1, 2)) == -1 &&
                    target.src !== "null" 
                    ) {
                    return true;
                } else {
                    return false;
                }
            }
        }
        if (item.src.includes('Rook')) {
            // If the first letter of the target position is the same as the first letter of the current position OR
            // if the number of the target position is the same as the number of the current position
            if (target.currentPosition.substring(0, 1) === item.currentPosition.substring(0, 1) && checkPath(1, 0) ||
                target.currentPosition.substring(1, 2) === item.currentPosition.substring(1, 2) && checkPath(0, 1)
                ) {
                    return true;
            } else {
                return false;
            }
        }
        if (item.src.includes('Knight')) {
            if (Math.abs(target.currentPosition.substring(0, 1).charCodeAt(0) - item.currentPosition.substring(0, 1).charCodeAt(0)) === 1 &&
                Math.abs(target.currentPosition.substring(1, 2) - item.currentPosition.substring(1, 2)) === 2
                ||
                Math.abs(target.currentPosition.substring(0, 1).charCodeAt(0) - item.currentPosition.substring(0, 1).charCodeAt(0)) === 2 &&
                Math.abs(target.currentPosition.substring(1, 2) - item.currentPosition.substring(1, 2)) === 1
                ) {
                    return true;
            } else {
                return false;
            }
        }
        if (item.src.includes('Bishop')) {
            // Example: 
            // "C3" -> "D4" = [1, 1]
            // "C3" -> "E7" = [2, 4]
            // We subtract the two letters, and then subtract the two numbers. If they're equal to each other, it's a valid move
            if (Math.abs((target.currentPosition.substring(0, 1).charCodeAt(0) - item.currentPosition.substring(0, 1).charCodeAt(0))) === 
                Math.abs((target.currentPosition.substring(1, 2) - item.currentPosition.substring(1, 2))) && checkPath(1, 1)) {
                    return true;
            } else {
                return false;
            }
        }
        if (item.src.includes('Queen')) {
            // Just the rook and bishop logic combined
            if (target.currentPosition.substring(0, 1) === item.currentPosition.substring(0, 1) && checkPath(1, 0) ||
                target.currentPosition.substring(1, 2) === item.currentPosition.substring(1, 2) && checkPath(0, 1) ||
                Math.abs((target.currentPosition.substring(0, 1).charCodeAt(0) - item.currentPosition.substring(0, 1).charCodeAt(0))) === 
                Math.abs((target.currentPosition.substring(1, 2) - item.currentPosition.substring(1, 2))) && checkPath(1, 1)) {
                    return true;
            } else {
                return false;
            }
        }
        if (item.src.includes('King')) {
            // If the rows are <= 1, and the columns are <= 1, it's a valid move
            if (Math.abs(target.currentPosition.substring(0, 1).charCodeAt(0) - item.currentPosition.substring(0, 1).charCodeAt(0)) <= 1 &&
                Math.abs((target.currentPosition.substring(1, 2) - item.currentPosition.substring(1, 2))) <= 1
                ) {
                return true;
            } else {
                return false;
            }
        }
    }

    useEffect(() => {
        const currentTurn = turn;
        if (isInCheck(currentTurn)) {
            console.log(`${currentTurn} is in check`);
        }
    }, [turn]);

    useEffect(() => {
        const pawns = pieces.filter((item) => item.src.includes("Pawn"));

        pawns.forEach(item => {
            const row = item.src.includes("White") ? 8 : 1;
            if (item.currentPosition.substring(1, 2) == row) {
                setShowPromotion(true);
                setPromotionPiece(item);
                setPromotionColor(item.src.includes("White") ? "White" : "Black")
                const element = document.querySelector(`[data-position="${item.currentPosition}"]`);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    setPromotionPosition({ top: rect.top - 50, left: rect.left });
                }
            }
        });
    }, [pieces]);

    function squareClicked(item) {
        // Check if there's a winner or a pending promotion
        if (winner || showPromotion) {
            return;
        }

        // 1. Let the user select a piece to move
        // If it's not their turn, they can't move their pieces.
        if (turn == 'White') {
            if (item.src.includes('White')) {
                setSelectedPiece(item);
            }
        } else {
            if (item.src.includes('Black')) {
                setSelectedPiece(item);
            }
        }
  
        // 2. If they have a selectedPiece, move the piece to where they clicked
        if (selectedPiece && !item.src.includes(turn)) {
            console.log(`${selectedPiece.src} from ${selectedPiece.currentPosition} to ${item.currentPosition}`)
            const validMove = movePieces(selectedPiece, item);
            if (!validMove) return;
            setPieces(prevPieces => prevPieces.map(piece => {
                if (piece.currentPosition === selectedPiece.currentPosition) {
                    return { ...piece, src: 'null' }
                }
                if (piece.currentPosition === item.currentPosition) {
                    return { ...piece, src: selectedPiece.src }
                }
                return piece;
            }));
            setSelectedPiece(null);
            turn === 'White' ? setTurn('Black') : setTurn('White');
        }
    }

    function promotePawn(type) {
        promotionPiece.src = `${promotionColor}${type}`;
        console.log(`${promotionColor}${type}`);
        setShowPromotion(false);
    }

    return (
        <div className='mainContainer'>
            {winner && (
                <h2>{winner} Wins</h2>
            )}
            <div className='boardContainer'>
                <div className='chessPieces'>
                    {pieces.map((item, index) => (                         
                        item.src !== 'null' ? (
                            <div className='piece' draggable
                                style={{ backgroundColor: selectedPiece === item ? 'green' : setBackgroundColor(index) }} 
                                data-position={item.currentPosition}
                                onClick={() => squareClicked(item)}>
                                <img
                                    src={ require(`../ChessPieces/${item.src}.png`)}
                                />
                            </div>
                        )
                        :
                        <div className='piece' style={{ backgroundColor: setBackgroundColor(index) }} onClick={() => squareClicked(item)}></div>
                    ))}
                </div>
            </div>
            {showPromotion && (
                <div className='promotion' style={{ top: promotionPosition.top, left: promotionPosition.left }}>
                    <img onClick={() => promotePawn("Queen")} src={ require(`../ChessPieces/${promotionColor}Queen.png`) } />
                    <img onClick={() => promotePawn("Rook1")} src={ require(`../ChessPieces/${promotionColor}Rook1.png`) } />
                    <img onClick={() => promotePawn("Bishop1")} src={ require(`../ChessPieces/${promotionColor}Bishop1.png`) } />
                    <img onClick={() => promotePawn("Knight1")} src={ require(`../ChessPieces/${promotionColor}Knight1.png`) } />
                </div>
            )}
        </div>
    )
}
