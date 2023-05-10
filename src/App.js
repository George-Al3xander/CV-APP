import React, {Component} from "react";

import CV from "./components/CV";
import Form from "./components/Form";
class App extends Component {
    constructor() {
        super();

        this.state = {
            general_info: {
                name: "John Doe",
                email: "johndoe@gmail.com",
                phone: "+3801122334",
                summary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, cupiditate minima deserunt blanditiis ducimus aliquid, a consectetur cumque porro quidem voluptate provident veritatis, laudantium minus repudiandae expedita magni ut debitis temporibus aperiam ex dolorem omnis repellendus doloribus! Sit totam nam repudiandae, incidunt alias, eius deleniti praesentium corporis inventore ipsa eligendi."
            },
            education: [{
                name_school: "Cool School",
                title: "WebDev",
                date:  ["2000","2011"],
            }],
            experience: [{
                name_company: "HelloGroup",
                title_position: "CEO",
                tasks: ["Do 1", "Do 2", "Do 3"],
                date: ["2015","2022"],
            }],
            skills: ["Cool","Funny","Clever"]
        }   
        
        this.change_name = this.change_name.bind(this);
        this.change_email = this.change_email.bind(this);
        this.change_phone = this.change_phone.bind(this);
        this.change_summary = this.change_summary.bind(this);
    }


    change_name(e) {
        this.setState({
            general_info: {
            name: e.target.value,
            email: this.state.general_info.email,
            phone: this.state.general_info.phone,
            summary: this.state.general_info.summary
            },
        });
    }

    change_email(e) {
        this.setState({
            general_info: {
            name: this.state.general_info.name,
            email: e.target.value,
            phone: this.state.general_info.phone,
            summary: this.state.general_info.summary
            },
        });
    }

    change_phone(e) {
        this.setState({
            general_info: {
            name: this.state.general_info.name,
            email: this.state.general_info.email,
            phone: e.target.value,
            summary: this.state.general_info.summary
            },
        });
    }

    change_summary(e) {
        this.setState({
            general_info: {
            name: this.state.general_info.name,
            email: this.state.general_info.email,
            phone: this.state.general_info.phone,
            summary: e.target.value
            },
        });
    }

    change_skills(e) {
        let item = e.target.value;
        item = item.split(", ");
        this.setState({
           skills: item,
        });
    }

    change_education_name(e) {
        let num = e.target.id.split("_")[3];
        console.log(num)
       let arrayNum = num - 1;

      // for(let i=0; i < )
    }

    test(){
        console.log(1)
    }

    render() {
        return(
            <div className="split">
                <Form 
                    changeName = {this.change_name} 
                    changeEmail = {this.change_email}
                    changePhone = {this.change_phone}
                    changeSummary = {this.change_summary}
                    changeEducationName = {this.change_education_name}
                    test = {this.test}
                />
                <CV data={this.state} />
                
            </div>
        )
    }
}


export default App