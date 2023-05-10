import React, {Component} from "react";
import Exp from "./Exp";
import Edu from "./Edu";
import Skills from "./Skills";
import Info from "./Info";
class CV extends Component {
    constructor(props) {
        super(props);
    }
  
    render() {
        return(
            <div className="cv" >            
            <div className="cv_left">
                <div className="cv_header">
                    <h1>Resume</h1>
                    <h1 className="name">{this.props.data.general_info.name}</h1>
                </div>

                <div className="main_div_details">
                    <h1>Details</h1>
                    <Info info={this.props.data.general_info}/>
                </div>

                <div className="main_div_skills">
                    <h1>Skills</h1>
                    <Skills skills={this.props.data.skills}/>
                </div>                
            </div>
            <div className="cv_right">
                    <div className="main_div_summary">
                        <h1>Summary</h1>
                        <p>{this.props.data.general_info.summary}</p>
                    </div>

                    <div className="main_div_experience">
                        <h1>Experience</h1>
                        <Exp experience={this.props.data.experience}/>
                    </div>

                    <div className="main_div_education">
                        <h1>Education</h1>
                         <Edu education={this.props.data.education}/>
                    </div>
                </div>
            </div>
        )
    }
}


export default CV