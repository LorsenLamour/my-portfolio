import style from "../Footer/Footer.module.css"
function Footer() {
    return (
        <footer className={style["footer"]}>
            <div className={style["footer-container"]}>
                <div className={style["footer-section"]}>
                    <h3>Lorsen Lamour</h3>
                    <p>Future Front-End / Full-Stack Developer</p>
                </div>

                <div className={style["footer-section"]}>
                    <h4>General</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/skills">Skills</a></li>
                        <li><a href="/resume">Resume</a></li>
                    </ul>
                </div>

                <div className={style["footer-section"]}>
                    <h4>Socials</h4>
                    <div className={style["socials"]}>
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