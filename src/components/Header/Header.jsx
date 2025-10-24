import { Link } from "react-router-dom";
import '../Header/Header.css';
import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';

const CV_PATH = "/pdfFiles/CV-Lamour_Lorsen.pdf";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen); return (
        <header className="mainHeader">
            <h1>My Portfolio</h1>
            <button className="hamburger" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            <nav className={`navMenu ${isOpen ? 'active' : ''}`}>
                <ul>
                    <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
                    <li><Link to="/educations" onClick={toggleMenu}>Educations</Link></li>
                    <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
                    <li><Link to="/skilss" onClick={toggleMenu}>Skills</Link></li>
                    <li><Link to={CV_PATH} target="_blank" onClick={toggleMenu}>Resume</Link></li>

                </ul>


            </nav>
        </header>
    );
}
export default Header;