import React from "react";


const Form_Edu = (props) => {    
    return(
            <div className="div_form_education">
                {props.arrayEducation.map((item) => {
                   let num = item.num;
                    return <div className="block_form" key={"form_edu_" + num} id={"form_edu_" + num} >
                        <input onChange={props.changeEducationName}  placeholder="Enter name of the school/university/other" id={"form_edu_name_"+ num} type="text" />
                        <input onChange={props.changeEducationTitle}   placeholder="Enter title" id={"form_edu_title_"+ num} type="text" />
                        <div className="dates">
                            <div className="date">From
                            <input onChange={props.changeEducationDate}   id={"form_edu_start_"+ num} type="month" /></div>
                            <div className="date" >
                            To<input onChange={props.changeEducationDate}  id={"form_edu_end_"+ num} type="month" />
                            </div>
                        </div>                       
                        <br />
                        <button className="btn_del"  id={"form_edu_btn_"+ num} onClick={props.onClick} >Delete</button>
                        </div>
                })}
            </div>
        )    
}

export default Form_Edu
