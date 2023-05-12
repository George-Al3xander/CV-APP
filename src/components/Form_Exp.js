import React, {Component} from "react";

const  Form_Exp = (props) => {
   

   
        return(
            <div className="div_form_experience">
                {props.arrayExperience.map((item) => {
                   let num = item.num;
                    return <div className="block_form" key={"form_exp_" + num} id={"form_exp_" + num} >
                        <input onChange={props.changeExperienceName} placeholder="Enter name of the company" id={"form_exp_name_"+ num} type="text" />
                        <input onChange={props.changeExperienceTitle}   placeholder="Enter title of your job" id={"form_exp_title_"+ num} type="text" />
                        <div className="dates">
                            <div className="date">From
                            <input onChange={props.changeExperienceDate}   id={"form_exp_start_"+ num} type="month" /></div>
                            <div className="date" >
                            To<input onChange={props.changeExperienceDate}  id={"form_exp_end_"+ num} type="month" />
                            </div>
                        </div>
                        <input onChange={props.changeExperienceTasks}   placeholder="Seperate by comma and space e.g. `Create, Build`" id={"form_exp_taks_"+ num}  type="text" />
                        <br />
                        <button className="btn_del" id={"form_exp_btn_"+ num} onClick={props.onClick}>Delete</button>
                        </div>
                })}
            </div>
        )
    }


export default Form_Exp