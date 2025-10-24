import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Educations from './pages/Education/Educations';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';

function App() {


  return (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/educations' element={<Educations />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
    
  )
}

export default App
