import style from "../Projects/Projects.module.css";
import projectList from "../../constantsDataJS/Projects.json"

const Projects = () => {


    return (
        <div className={style["project-container"]}>
            <div className={style["project-card-content"]}>
                {projectList.map((project, index) => (
                    <div key={index} className={style["project-card"]}>
                        <img className={style["project-image"]} src={project.image} alt={project.title} />
                        <h2 className="title-md">{project.title}</h2>
                        <p className="body-text-02">{project.description}</p>
                        <button
                            className="button-01"onClick={() => window.open(project.link, "_blank", "noopener,noreferrer")}>
                            View Project
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
