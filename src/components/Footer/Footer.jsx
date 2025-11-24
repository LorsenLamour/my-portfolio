import "../Footer/Footer.css"
import footerpng from "../../assets/Footer_bg.jpg"
function Footer() {
    return (
        <div className="footer-style">
            <div className="image-footer-style">
                <img className="image-footer-style" src={footerpng} alt="Description de l'image"></img>
                <p className="footer-text-style">&copy; 2024 Mon Site Web</p>
            </div>
        </div>
    )
}
export default Footer;