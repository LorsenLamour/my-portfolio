import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Educations from './pages/Educations';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

function App() {


  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/educations' element={<Educations />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />

      </Routes>


    </>
  )
}

export default App
