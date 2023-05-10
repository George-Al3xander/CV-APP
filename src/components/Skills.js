import React, {Component} from "react";



class Skills extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return(
            <ul className="skills">
                {this.props.skills.map((skill) => {
                    return <li key={"skill_" + this.props.skills.indexOf(skill)}>{skill}</li>
                })}
            </ul>
        )
    }
}

export default Skills