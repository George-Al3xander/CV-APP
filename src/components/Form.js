import React, {Component} from "react";


class Form extends Component {
    constructor(props) {
        super();

        this.state = {
            form_exp: "",
            form_education:  "",
        }
    }

    render () {
        return(
            <form>
            <fieldset id="general_info">
                <input onChange={this.props.onChangeHandle} id="name" type="text" placeholder="Enter your name"/>
                <textarea name="" id="summary"  cols="20" rows="3"></textarea>
                <input type="email" id="email" />
                <input type="phone" id="phone"/>
                <input type="text" />
            </fieldset>

            <fieldset id="education">
                <input type="text" />
            </fieldset>
        </form> 
        )
    }
}


export default Form