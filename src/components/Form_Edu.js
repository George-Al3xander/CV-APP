import React, {Component} from "react";


class Form_Edu extends Component {
    constructor(props) {
        super(props);

    }

    render () {
        return(
            <div className="div_form_education">
                {this.props.arrayEducation.map((item) => {
                   let num = item.num;
                    return <div className="block_form" key={"form_edu_" + num} id={"form_edu_" + num} >
                        <input onChange={this.props.changeEducationName}  placeholder="Enter name of the school/university/other" id={"form_edu_name_"+ num} type="text" />
                        <input onChange={this.props.changeEducationTitle}   placeholder="Enter title" id={"form_edu_title_"+ num} type="text" />
                        <div className="dates">
                            <div className="date">From
                            <input onChange={this.props.changeEducationDate}   id={"form_edu_start_"+ num} type="year" /></div>
                            <div className="date" >
                            To<input onChange={this.props.changeEducationDate}  id={"form_edu_end_"+ num} type="year" />
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
