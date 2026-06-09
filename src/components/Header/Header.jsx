import { Link } from "react-router-dom";
import style from '../Header/Header.module.css';
import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';


const CV_PATH = "/pdfFiles/CV_Lamour_Lorsen.pdf";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen); 
    return (
        <header className={style["main-header"]}>
            <div className={style["logo-container"]}>
                <Link to="/" className={style["logo"]}>LL</Link>
            </div>
            <button className={style["hamburger"]} onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            <nav className={`${style["navMenu"]} ${isOpen ? style["active"] : ''}`}>
                <ul>
                    <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><Link to={CV_PATH} target="_blank" onClick={toggleMenu}>Resume</Link></li>

                </ul>


            </nav>
        </header>
    );
}
export default Header;