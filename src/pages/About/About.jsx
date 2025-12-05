import '../About/About.css';
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

        <div className='aboutContainer'>
            <div className='aboutRow'>
                <div className='aboutCol about-col-left'>
                    <div>
                        <img className='about-profile-picture' src={aboutMe.profilPicture} alt="Profile Picture" />
                    </div>
                    <div className='social-icons-in-about'>
                        <SocialIcons />
                    </div>
                </div>
                <div className='aboutCol  about-col-right'>
                    <div className='aboutTextCol'>
                        <h1 className='title-about-me'>{aboutMe.title}</h1>
                        <section className="aboutSection">
                            <p>{aboutMe.description}</p>
                        </section>

                    </div>
                </div>
            </div>
        </div>



    )
}
export default About;