import React, {Component} from "react";
import Form_Exp from "./Form_Exp";
import Form_Edu from "./Form_Edu";

class Form extends Component {
    constructor(props) {
        super(props);        
    }

    


    render () {
        return(
            <form onSubmit={(e)=> {e.preventDefault()}}>
            <fieldset id="general_info">
                <input onChange={this.props.changeName}  id="name" type="text" placeholder="Enter your name"/>
                <input onChange={this.props.changeEmail} placeholder="Enter your email"   type="email" id="email" />
                <input onChange={this.props.changePhone} placeholder="Enter your phone"   type="phone" id="phone"/>               
                <textarea onChange={this.props.changeSummary} placeholder="Enter short summary of yourself"  name="" id="summary"  cols="20" rows="3"></textarea>
            </fieldset>

            <fieldset id="skills" >
                <input onChange={this.props.changeSkills} placeholder="Enter your skills; Seperate by comma and space"     type="text" />
            </fieldset>

            <fieldset id="experience">
                <Form_Exp 
                    arrayExperience ={this.props.arrayExperience} 
                    changeExperienceName = {this.props.changeExperienceName}  
                    changeExperienceTitle = {this.props.changeExperienceTitle} 
                    changeExperienceDate = {this.props.changeExperienceDate}
                    changeExperienceTasks= {this.props.changeExperienceTasks}

                    onClick={this.props.removeFormExp} 
                    
                />
                <button onClick={this.props.addFormExp}>Add</button>               
            </fieldset>
            <fieldset id="education">
                <Form_Edu 
                    arrayEducation={this.props.arrayEducation} changeEducationName = {this.props.changeEducationName}  
                    changeEducationTitle = {this.props.changeEducationTitle} 
                    changeEducationDate = {this.props.changeEducationDate} 
                    
                    onClick={this.props.removeFormEdu} 
                />
                <button onClick={this.props.addFormEdu}>Add</button>               
            </fieldset>


        </form> 
        )
    }
}


export default Form