import React, {Component} from "react";
import Form_Exp from "./Form_Exp";
import Form_Edu from "./Form_Edu";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form_exp: [1],
            form_edu: [1],            
        }
        this.addFormExp = this.addFormExp.bind(this);
        this.removeFormExp = this.removeFormExp.bind(this);
        this.addFormEdu = this.addFormEdu.bind(this);
        this.removeFormEdu = this.removeFormEdu.bind(this);
    }

    addFormExp() {
        this.setState({
            form_exp:  this.state.form_exp.concat(this.state.form_exp[this.state.form_exp.length - 1]+1),
        });
        console.log(this.state.form_exp);
        
    }

    removeFormExp(e) {
        let val = e.target.id;
        let length = val.length;
        val = val[length-1];

        let tempArray = [];
        let form_exp_length = this.state.form_exp.length;        
        if(form_exp_length > 1) {
            for(let i=0; i < form_exp_length ; i++) {
                if(val != this.state.form_exp[i]) {
                    tempArray.push(this.state.form_exp[i]);                    
                }
            }            
            this.setState({
                form_exp: tempArray
            })
        }
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

        let tempArray = [];
        let form_edu_length = this.state.form_edu.length;        
        if(form_edu_length > 1) {
            for(let i=0; i < form_edu_length ; i++) {
                if(val != this.state.form_edu[i]) {
                    tempArray.push(this.state.form_edu[i]);                    
                }
            }            
            this.setState({
                form_edu: tempArray
            })
        }
    }

    render () {
        return(
            <form onSubmit={(e)=> {e.preventDefault()}}>
            <fieldset id="general_info">
                <input onChange={this.props.changeName}  id="name" type="text" placeholder="Enter your name"/>
                <textarea onChange={this.props.changeSummary} placeholder="Enter short summary of yourself"  name="" id="summary"  cols="20" rows="3"></textarea>
                <input onChange={this.props.changeEmail} placeholder="Enter your email"   type="email" id="email" />
                <input onChange={this.props.changePhone} placeholder="Enter your phone"   type="phone" id="phone"/>               
            </fieldset>

            <fieldset id="skills" >
                <input placeholder="Enter your skills; Seperate by comma and space"     type="text" />
            </fieldset>

            <fieldset id="education">
                <Form_Edu changeEducationName = {this.props.changeEducationName}  onClick={this.removeFormEdu} nums={this.state.form_edu}/>
                <button onClick={this.addFormEdu}>Add</button>               
            </fieldset>
            <fieldset id="experience">
                <Form_Exp onChangeHandle={this.props.onChangeHandle}  onClick={this.removeFormExp} nums={this.state.form_exp}/>
                <button onClick={this.addFormExp}>Add</button>               
            </fieldset>


        </form> 
        )
    }
}


export default Form