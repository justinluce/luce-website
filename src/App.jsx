import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Menu } from "./shared/components/Menu";
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { AntiResume } from './components/AntiResume';
import { Music } from './components/Music';
import Minesweeper from './components/Minesweeper';
import { Cat } from './components/Cat';
import { Chatroom } from './components/Chatroom';
import { PennyBot } from './components/projects/PennyBot';
import { Analytics } from "@vercel/analytics/react"
import { ChessChoice } from './components/ChessChoice';
import { ChessSingle } from './components/ChessSingle';
// import { ChessMulti } from './components/ChessMulti';

function App() {
  return (
    <>
      <Analytics />
      <Router>
        <Menu />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/music' element={<Music />} />
            <Route path='/chatroom' element={<Chatroom />} />
            <Route path='/antiresume' element={<AntiResume />} />
            <Route path='/minesweeper' element={<Minesweeper />} />
            <Route path='/cat' element={<Cat />} />
            <Route path='/chess' element={<ChessChoice />} />
            <Route path='/chessSingle' element={<ChessSingle />} />
            {/* <Route path='/chessMulti' element={<ChessMulti />} /> */}
            <Route path='/penny' element={<PennyBot />} />
            <Route path='/' element={<Home />} />
            {/* <Route path='*' element={<Navigate to='home' />} /> */}
          </Routes>
      </Router>
    </>
  );
}

export default App;
