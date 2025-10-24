import MainLayout from '../../layouts/MainLayout';
import '../About/About.css';
const aboutDescription = {
    title: 'About Me',
    description: " I'm a passionate and aspiring front-end developer with a love for creating beautiful, responsive, and user-friendly websites. I've been learning and working with HTML, CSS, JavaScript, and React, and I'm alwaysexploring new ways to improve my skills and build better user experiences. I'm excited to grow in the tech industry and contribute to creative, impactful, and accessible web applications.",
}
function About() {
    return (
        <MainLayout>
            <div className='aboutContainer'>
                <div className='aboutRow'>
                    <div className='aboutCol aboutColRight'>
                      {/* <img className='profilPictureStyle' src={profilPicture} alt="Profile Picture" /> */}
                    </div>
                    <div className='aboutCol  aboutColLeft'>
                        <div className='aboutTextCol'>
                            <h1>{aboutDescription.title}</h1>
                            <section className="aboutSection">

                                <p>{aboutDescription.description}</p>



                            </section>

                        </div>
                    </div>
                </div>
            </div>


        </MainLayout>
    )
}
export default About;