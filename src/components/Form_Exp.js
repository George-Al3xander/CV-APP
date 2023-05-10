import React, {Component} from "react";

class Form_Exp extends Component {
    constructor(props) {
        super(props);

    }

    render () {
        return(
            <div className="div_form_experience">
                {this.props.nums.map((num) => {
                    return <div className="block_form" key={"form_exp_" + num} id={"form_exp_" + num} >
                        <input  placeholder="Enter name of the company" id={"form_exp_name_"+ num} type="text" />
                        <input   placeholder="Enter title of your job" id={"form_exp_title_"+ num} type="text" />
                        <div className="dates">
                            <div className="date">From
                            <input   id={"form_exp_start_"+ num} type="month" /></div>
                            <div className="date" >
                            To<input  id={"form_exp_end_"+ num} type="month" />
                            </div>
                        </div>
                        <input  placeholder="Enter some of your tasks that you had from your position. Seperate them with comma and space e.g. 'Create, Build, Find'" id={"form_exp_taks_"+ num}  type="text" />
                        <br />
                        <button id={"form_exp_btn_"+ num} onClick={this.props.onClick} >Delete</button>
                        </div>
                })}
            </div>
        )
    }
}

export default Form_Exp