import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../shared/styled/ChessChoice.css';

export const ChessChoice = () => {
    const [selectMulti, setSelectMulti] = useState(false);
    const navigate = useNavigate();

    const singlePlayer = () => {
        navigate('/chessSingle');
    }  

    const multiplayer = () => {
        setSelectMulti(true);
        // navigate('/chessMulti');
    }

    return (
        <div className="mainContainer">
            <button onClick={() => singlePlayer()}>Single Player</button>
            {selectMulti ? (
                <p>Multiplayer doesn't work yet. Choose single player 😁 </p>   
            ) : (
                <button onClick={() => multiplayer()}>Multiplayer</button>
            )}
        </div>
    )
}