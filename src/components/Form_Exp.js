import React, {Component} from "react";

class Form_Exp extends Component {
    constructor(props) {
        super(props);

    }

    render () {
        return(
            <div className="div_form_experience">
                {this.props.arrayExperience.map((item) => {
                   let num = item.num;
                    return <div className="block_form" key={"form_exp_" + num} id={"form_exp_" + num} >
                        <input onChange={this.props.changeExperienceName} placeholder="Enter name of the company" id={"form_exp_name_"+ num} type="text" />
                        <input onChange={this.props.changeExperienceTitle}   placeholder="Enter title of your job" id={"form_exp_title_"+ num} type="text" />
                        <div className="dates">
                            <div className="date">From
                            <input onChange={this.props.changeExperienceDate}   id={"form_exp_start_"+ num} type="month" /></div>
                            <div className="date" >
                            To<input onChange={this.props.changeExperienceDate}  id={"form_exp_end_"+ num} type="month" />
                            </div>
                        </div>
                        <input onChange={this.props.changeExperienceTasks}   placeholder="Seperate by comma and space e.g. `Create, Build`" id={"form_exp_taks_"+ num}  type="text" />
                        <br />
                        <button className="btn_del" id={"form_exp_btn_"+ num} onClick={this.props.onClick}>Delete</button>
                        </div>
                })}
            </div>
        )
    }
}

export default Form_Exp