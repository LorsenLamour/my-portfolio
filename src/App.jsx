import './Global.css';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import MainLayout from './layouts/MainLayout';
import NotFound from './pages/NotFound/NotFound';

function App() {
    return (
        
            <Routes>
          
                <Route path='/' element={<MainLayout><Home /></MainLayout>} />
                <Route path='/about' element={<MainLayout><About /></MainLayout>} />
                <Route path='/skills' element={<MainLayout><Skills /></MainLayout>} />
                <Route path='/projects' element={<MainLayout><Projects /></MainLayout>} />
              
                <Route path='*' element={<NotFound />} />
            </Routes>

    )
}

export default App
