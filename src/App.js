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
                date: "From 2000 to 2011",
            }],
            experience: [{
                name_company: "HelloGroup",
                title_position: "CEO",
                tasks: ["Do 1", "Do 2", "Do 3"],
                date: "From 2012 to 2022",
            }],
            skills: ["Cool","Funny","Clever"]
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        console.log(e.target.id)
        // this.setState({
        //     general_info: {
        //         name: e.target.value,                
        //     },
        // })
    }

    render() {
        return(
            <div className="split">
                <Form onChangeHandle = {this.onChange}/>
                <CV data={this.state} />
                
            </div>
        )
    }
}


export default App