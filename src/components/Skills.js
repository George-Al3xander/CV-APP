import React from "react";



const Skills = (props) => {
    return(
        <ul className="skills">
            {props.skills.map((skill) => {
                return <li key={"skill_" + props.skills.indexOf(skill)}>{skill}</li>
            })}
        </ul>
    )    
}

export default Skills