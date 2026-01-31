import style from '../About/About.module.css';
import profilPicture from "../../assets/Pictures/cc.jpg"
import SocialIcons from '../../components/SocialIcons/SocialIcons';







const aboutMe = {
    title: 'About Me',
    description: `I'm a passionate and aspiring front-end developer with a love for creating beautiful,
                responsive, and user-friendly websites. I've been learning and working with HTML, CSS, JavaScript,
                React and Vite. I'm always exploring new ways to improve my skills and build better user experiences.
                I'm excited to grow in the tech industry and contribute to creative, impactful, and accessible web applications.`,
    profilPicture: profilPicture,
}







function About() {
    return (

        <div className={style["about-container"]}>
            <div className={style["about-row"]}>
                <div className={`${style["about-col"]} ${style["about-col-left"]}`}>
                    <div>
                        <img className={style["about-profile-picture"]} src={aboutMe.profilPicture} alt="Profile Picture" />
                    </div>
                    <div className={style["social-icons-in-about"]}>
                        <SocialIcons />
                    </div>
                </div>
                <div className={`${style["about-col"]} ${style["about-col-right"]}`}>
                    <div className={style["about-text-col"]}>
                        <h1 className="title-lg">{aboutMe.title}</h1>
                        <section className={style["about-section"]}>
                            <p className='body-text-01'>{aboutMe.description}</p>
                        </section>

                    </div>
                </div>
            </div>

        </div>



    )
}
export default About;