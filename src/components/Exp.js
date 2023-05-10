import React, {Component} from "react";


class Exp extends Component {
    constructor(props) {
        super(props);
    }

    
    

    render() {
        return(
            <ul className="exp" >
                {this.props.experience.map((exp)=> {
                    return <li  key={"exp_" + this.props.experience.indexOf(exp)} className="exp_block block_ul">
                        <div className="exp_date date" >From {exp.date[0]} to {exp.date[1]}</div>
                        <div>
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
}


export default Exp