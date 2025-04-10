import { useState } from "react"
import '../../shared/styled/MiscDetails.css';

export const MiscDetails = () => {
    const [projectOpen, setProjectOpen] = useState(0);
    
    const projectList = [
        'Tic-Tac-Toe',
        'Eisenhower Matrix',
        'Minesweeper',
        'Chess'
    ]

    return (
        <div id='misc-main'>
            <p>
                Random projects I've made that are smaller in scope.
            </p>
            <br />
            <div id='misc-container'>
                <div id='left-container'>
                    {projectList.map((item, index) => (
                        <div 
                            className={`${projectOpen === index ? 'active' : ''} ${item === 'Tic-Tac-Toe' ? 'tic-tac-toe' : ''}`} 
                            onClick={() => setProjectOpen(index)}
                        >
                            {item}
                        </div>
                    ))}
                </div>
                <div id='right-container'>
                    {projectOpen === 0 && (
                        <div>
                            <h3><a href='https://www.justinlucedev.com/tic-tac-toe'>Tic-Tac-Toe</a></h3>
                            <p>An unbeatable Tic-Tac-Toe game.</p>
                            <p>Utilizes the <a href='https://en.wikipedia.org/wiki/Minimax' target='_blank' rel='noopener noreferrer'>Minimax algorithm</a> to always win (or draw) games.</p>
                        </div>
                    )} 
                    {projectOpen === 1 && (
                        <div>
                            <h3><a href='https://github.com/justinluce/eisenhower-matrix' target='_blank' rel='noopener noreferrer'>Eisenhower Matrix</a></h3>
                            <p>A to-do list app inspired by the <a href='https://asana.com/resources/eisenhower-matrix' target='_blank' rel='noopener noreferrer'>Eisenhower Matrix</a></p>
                        </div>
                    )} 
                    {projectOpen === 2 && (
                        <div>
                            <h3><a href='https://www.justinlucedev.com/minesweeper'>Minesweeper</a></h3>
                        </div>                    
                    )} 
                    {projectOpen === 3 && (
                        <div>
                            <h3><a href='https://www.justinlucedev.com/chess'>Chess</a></h3>
                        </div>
                    )} 
                </div>
            </div>
        </div>
    )
}