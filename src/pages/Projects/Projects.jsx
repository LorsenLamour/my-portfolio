import { useState } from "react";
import "../Projects/Projects.css";
import projectList from "../../constantsDataJS/Projects.json"

const Projects = ({ items = projectList }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (items.length === 0) {
        return <div>No projects available</div>;
    }

    const totalSlides = items.length;
    const projectOfCurrentSlide = items[currentIndex];
    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? totalSlides - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === totalSlides - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div className="main-container">
        <div className="carousel-container">
            <button onClick={goToPrevious} className="left-arrow">Previous</button>

            <div className="slide-content">
                
                    <h2>{projectOfCurrentSlide.title}</h2>
                    <p>{projectOfCurrentSlide.description}</p>
                    <a href={projectOfCurrentSlide.link} target="_blank" rel="noopener noreferrer">View Project</a>


                <div className="slide-number">{currentIndex + 1}/{totalSlides}</div>
            
            </div>

            <button onClick={goToNext} className="right-arrow">Next</button>
        </div>
        </div>
    );
};

export default Projects;
