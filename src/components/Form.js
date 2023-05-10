import React, {Component} from "react";


class Form_Exp extends Component {
    constructor(props) {
        super(props);

    }

    render () {
        return(
            <fieldset id="education">
                {this.props.nums.map((num) => {
                    return <div key={"form_edu_" + num} id={"form_edu_" + num} >
                        <input id={"form_edu_name_"+ num} type="text" />
                        <input id={"form_edu_title_"+ num} type="text" />
                        <input id={"form_edu_date_"+ num} type="date" />
                        <button id={"form_edu_btn_"+ num} onClick={this.props.onClick} >Delete</button>
                        </div>
                })}
            </fieldset>
        )
    }
}

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form_exp: [1],
            form_edu: [1],

            
        }
        this.addFormEdu = this.addFormEdu.bind(this);
    }

    addFormEdu() {
        this.setState({
            form_edu:  this.state.form_edu.concat(this.state.form_edu[this.state.form_edu.length - 1]+1),
        });
        console.log(this.state.form_edu);
    }

    removeFormEdu(e) {
        let val = e.target.id;
        let length = val.length;
        val = val[length-1];

        let tempArray = this.state.form_edu;

        for(let i=0; i < this.state.form_edu.length; i++) {
            if(val != this.state.form_edu[0]) {
                tempArray.push(this.state.form_edu[i]);
            }
        }

        this.setState({
            form_edu: tempArray
        })

        console.log()
    }

    render () {
        return(
            <form onSubmit={(e)=> {e.preventDefault()}}>
            <fieldset id="general_info">
                <input onChange={this.props.onChangeHandle} id="name" type="text" placeholder="Enter your name"/>
                <textarea name="" id="summary"  cols="20" rows="3"></textarea>
                <input type="email" id="email" />
                <input type="phone" id="phone"/>
                <input type="text" />
            </fieldset>

            <fieldset id="education">
                <Form_Exp onClick={this.removeFormEdu} nums={this.state.form_exp}/>
                <button onClick={this.addFormEdu}>Add</button>
               
            </fieldset>
        </form> 
        )
    }
}


export default Form