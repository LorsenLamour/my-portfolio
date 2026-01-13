import style from "../Skills/Skills.module.css"
import {
    SiTypescript, 
    SiReact,
     SiNextdotjs,
      SiHtml5,
    SiCss3,
    SiJavascript, 
    SiOpenjdk,
    SiGithub,
    SiGit,
    SiMariadb,
} from "react-icons/si";




const skills = [
    { icon: <SiTypescript size={40} title="TypeScript" />, name: "TypeScript" },
    { icon: <SiReact size={40} title="React" />, name: "React" },
    { icon: <SiHtml5 size={40} title="HTML5" />, name: "HTML5" },
    { icon: <SiCss3 size={40} title="CSS3" />, name: "CSS3" },
    { icon: <SiJavascript size={40} title="JavaScript" />, name: "JavaScript" },
    { icon: <SiOpenjdk size={40} title="Java" />, name: "Java" },
    { icon: <SiGithub size={40} title="GitHub" />, name: "GitHub" },
    { icon: <SiGit size={40} title="Git" />, name: "Git" },
    { icon: <SiMariadb size={40} title="MariaDB" />, name: "MariaDB" }
]

function Skills() {

    return (

        <div className={style["icons-style-skills"]}>
            {skills.map((skill, index) => (
                <div key={index} className={style["icon-container"]}>
                    {skill.icon}
                    <span>{skill.name}</span>
                </div>
            ))}
        </div>





    )
}
export default Skills;