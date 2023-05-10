import React, {Component} from "react";


class Form_Edu extends Component {
    constructor(props) {
        super(props);

    }

    render () {
        return(
            <div className="div_form_education">
                {this.props.nums.map((num) => {
                    return <div className="block_form" key={"form_edu_" + num} id={"form_edu_" + num} >
                        <input onChange={this.props.changeEducationName}  placeholder="Enter name of the school/university/other" id={"form_edu_name_"+ num} type="text" />
                        <input   placeholder="Enter title" id={"form_edu_title_"+ num} type="text" />
                        <div className="dates">
                            <div className="date">From
                            <input   id={"form_edu_start_"+ num} type="month" /></div>
                            <div className="date" >
                            To<input  id={"form_edu_end_"+ num} type="month" />
                            </div>
                        </div>                       
                        <br />
                        <button id={"form_edu_btn_"+ num} onClick={this.props.onClick} >Delete</button>
                        </div>
                })}
            </div>
        )
    }
}

export default Form_Edu
