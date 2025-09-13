import { Link } from "react-router-dom";
import '../pages_css/header.css';

function Header() {
    return (
        <header className="mainHeader">
            <h1>My Portfolio</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/educations">Educations</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/skilss">Skills</Link></li>
                </ul>


            </nav>
        </header>
    );
}
export default Header;