import './Global.css';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// import About from './pages/About/About';
// import Home from './pages/Home/Home';
// import Skills from './pages/Skills/Skills';
// import Projects from './pages/Projects/Projects';
// import MainLayout from './layouts/MainLayout';
import NotFound from './pages/NotFound/NotFound';

function App() {
    return (
            <Routes>

                <Route path='/' element={<MainLayout />} />

                <Route path='*' element={<MainLayout><NotFound /></MainLayout>} />
            </Routes>
    )
}

export default App
