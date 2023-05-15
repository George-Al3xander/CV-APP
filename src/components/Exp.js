import React from "react";


const Exp = (props) => {
    return(
            <ul className="exp" >
                {props.experience.map((exp)=> {
                    return <li  key={"exp_" + props.experience.indexOf(exp)} className="exp_block block_ul">
                        <div className="exp_date cv_date" >From {exp.date[0]} <br /> To {exp.date[1]}</div>
                        <div className="block_ul_titles">
                            <h2>{exp.name_company}</h2>
                            <h2>{exp.title_position}</h2>
                            <ul>{exp.tasks.map((task) => {
                               return <li key={"exp_task_" + exp.tasks.indexOf(task)} >{task}</li>
                            })}</ul>
                        </div>
                    </li>
                })}
            </ul>
        )    
}


export default Exp