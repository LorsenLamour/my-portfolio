import "../Footer/Footer.css"
function Footer() {
    return (
        <footer class="footer">
            <div class="footer-container">
                <div class="footer-section">
                    <h3>Lorsen Lamour</h3>
                    <p>Future Front-End / Full-Stack Developer</p>
                </div>

                <div class="footer-section">
                    <h4>General</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Resume</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h4>Socials</h4>
                    <div class="socials">
                        <a href="https://github.com/LorsenLamour" target="_blank">GitHub</a>
                        <a href="https://www.linkedin.com/in/lorsen-lamour-38746b387/" target="_blank">LinkedIn</a>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <p>© 2025 Lamour Lorsen. All rights reserved</p>
            </div>
        </footer>

    )
}
export default Footer;