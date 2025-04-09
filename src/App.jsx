import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import { useState, useEffect } from 'react'
import { Menu } from "./shared/components/Menu";
import { LandingPage } from './components/LandingPage';
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
import { Sidebar } from './shared/components/Sidebar';
// import { ChessMulti } from './components/ChessMulti';

function App() {

  return (
    <Router>
      <MainLayout />
    </Router>
  )
}

function MainLayout() {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState();

  useEffect(() => {
    setShowMenu(location.pathname !== '/');
  }, [location]);

  return (
    <>
      <Analytics />
      {/* {showMenu && <Menu />} */}
      <Sidebar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
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
          {/* <Route path='*' element={<Navigate to='home' />} /> */}
        </Routes>
    </>
  );
}

export default App;
