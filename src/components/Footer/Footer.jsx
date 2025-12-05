import "../Footer/Footer.css"
import footerpng from "../../assets/Footer_picture.jpg"
function Footer() {
    return (
        <div className="footer-style">

            <div className="footer-section-general">
                <h3>General</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Resume</a></li>

                </ul>



            </div>
            <p className="footer-text-style">&copy; 2025 Lamour Lorsen. All Rights Reserved.</p>
        </div>

    )
}
export default Footer;