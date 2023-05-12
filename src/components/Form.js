import React, {Component} from "react";
import Form_Exp from "./Form_Exp";
import Form_Edu from "./Form_Edu";

const Form = (props) => {    
        return(
            <form id="form" onSubmit={(e)=> {e.preventDefault()}}>
            <fieldset id="general_info">
                <legend>General info</legend>
                <input onChange={props.changeName}  id="name" type="text" placeholder="Enter your name"/>
                <input onChange={props.changeEmail} placeholder="Enter your email"   type="email" id="email" />
                <input onChange={props.changePhone} placeholder="Enter your phone"   type="phone" id="phone"/>               
                <textarea onChange={props.changeSummary} placeholder="Enter short summary of yourself"  name="" id="summary"  cols="20" rows="3"></textarea>
            </fieldset>

            <fieldset id="skills" >
                <legend>Skills</legend>
                <input onChange={props.changeSkills} placeholder="Seperate by comma and space e.g. `Funny, Cool`" type="text" />
            </fieldset>

            <fieldset id="experience">
                <legend>Experience</legend>
                <Form_Exp 
                    arrayExperience ={props.arrayExperience} 
                    changeExperienceName = {props.changeExperienceName}  
                    changeExperienceTitle = {props.changeExperienceTitle} 
                    changeExperienceDate = {props.changeExperienceDate}
                    changeExperienceTasks= {props.changeExperienceTasks}

                    onClick={props.removeFormExp} 
                    
                />
                <button className="btn_add"  onClick={props.addFormExp}>Add</button>               
            </fieldset>
            <fieldset id="education">
                <legend>Education</legend>
                <Form_Edu 
                    arrayEducation={props.arrayEducation} changeEducationName = {props.changeEducationName}  
                    changeEducationTitle = {props.changeEducationTitle} 
                    changeEducationDate = {props.changeEducationDate} 
                    
                    onClick={props.removeFormEdu} 
                />
                <button className="btn_add"  onClick={props.addFormEdu}>Add</button>               
            </fieldset>


        </form> 
        )
    }



export default Form