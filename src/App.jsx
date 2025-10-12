import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Main_background from "./components/Main_background"
import About from './pages/About';
import Home from './pages/Home';
import Educations from './pages/Educations';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

function App() {


  return (
    <>
      <Header />
      <Main_background>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/educations' element={<Educations />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />

        </Routes>
      </Main_background>

    </>
  )
}

export default App
