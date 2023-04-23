import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Menu } from "./shared/components/Menu";
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { AntiResume } from './components/AntiResume';

function App() {
  return (
    <Router>
      <Menu />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/antiresume' element={<AntiResume />} />
          <Route path='*' element={<Navigate to='home' />} />
        </Routes>
    </Router>
  );
}

export default App;
