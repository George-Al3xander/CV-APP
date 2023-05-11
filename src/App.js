import React, {Component} from "react";
import ReactToPrint from "react-to-print"
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
                num: 1,
            }],
            experience: [{
                name_company: "HelloGroup",
                title_position: "CEO",
                tasks: ["Do 1", "Do 2", "Do 3"],
                date: ["2015","2022"],
                num: 1,
            }],
            skills: ["Cool","Funny","Clever"],
            isSubmitted: false,
            btn_text: "Submit",
        }   
        
        this.change_name = this.change_name.bind(this);
        this.change_email = this.change_email.bind(this);
        this.change_phone = this.change_phone.bind(this);
        this.change_summary = this.change_summary.bind(this);
        this.change_skills= this.change_skills.bind(this);
        this.change_education_name= this.change_education_name.bind(this);
        this.change_education_title= this.change_education_title.bind(this);
        this.change_education_date= this.change_education_date.bind(this);

        this.change_experience_name= this.change_experience_name.bind(this);
        this.change_experience_title= this.change_experience_title.bind(this);
        this.change_experience_date= this.change_experience_date.bind(this);
        this.change_experience_tasks= this.change_experience_tasks.bind(this);

        this.addFormEdu = this.addFormEdu.bind(this);
        this.removeFormEdu = this.removeFormEdu.bind(this);  
        this.addFormExp = this.addFormExp.bind(this);
        this.removeFormExp = this.removeFormExp.bind(this);  

        this.submitForm = this.submitForm.bind(this);
    }


    addFormEdu() {        
        this.setState({
            education:  this.state.education.concat(
                {
                name_school: "",
                title: "",
                date:  ["",""],
                num: this.state.education[this.state.education.length - 1].num+1,
            }
            ),
        });
        
    }

    removeFormEdu(e) {
        let val = e.target.id;
        let length = val.length;
        val = val[length-1];

        let tempArray = [];
        let form_edu_length = this.state.education.length;        
        if(form_edu_length > 1) {
            for(let i=0; i < form_edu_length ; i++) {
                if(val != this.state.education[i].num) {
                    tempArray.push(this.state.education[i]);                    
                }
            }            
            this.setState({
                education: tempArray
            })
        }
    }

    change_education_name(e) {
        let num = e.target.id.split("_")[3];
        console.log(num)
        let tempArray = this.state.education;

        tempArray[num-1].name_school = e.target.value;
        this.setState({
            education: tempArray,
        })        
    }

    change_education_title(e) {
        let num = e.target.id.split("_")[3];
        console.log(num)
        let tempArray = this.state.education;

        tempArray[num-1].title = e.target.value;
        this.setState({
            education: tempArray,
        })        
    }

    change_education_date(e) {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];
        let num = e.target.id.split("_")[3];
        let dir = e.target.id.split("_")[2];        
        let tempArray = this.state.education;
        let dateInput = e.target.value;

        let date = new Date(dateInput);
        let value = monthNames[date.getMonth()] + " " + date.getFullYear();
        
        if(dir == "start") {
            tempArray[num-1].date[0] = value;
        }
        else {
            tempArray[num-1].date[1] = value;
        }
        this.setState({
            education: tempArray,
        })        
    }

    addFormExp() {        
        this.setState({
            experience:  this.state.experience.concat(
                {
                name_company: "",
                title_position: "",
                tasks: [],
                date: ["",""],
                num: this.state.experience[this.state.experience.length - 1].num+1,
            }
            ),
        });
        
    }

    removeFormExp(e) {
        let val = e.target.id;
        let length = val.length;
        val = val[length-1];

        let tempArray = [];
        let form_exp_length = this.state.experience.length;        
        if(form_exp_length > 1) {
            for(let i=0; i < form_exp_length ; i++) {
                if(val != this.state.experience[i].num) {
                    tempArray.push(this.state.experience[i]);                    
                }
            }            
            this.setState({
                experience: tempArray
            })
        }
    }

    change_experience_name(e) {
        let num = e.target.id.split("_")[3];
        console.log(num)
        let tempArray = this.state.experience;

        tempArray[num-1].name_company = e.target.value;
        this.setState({
            experience: tempArray,
        })        
    }

    change_experience_title(e) {
        let num = e.target.id.split("_")[3];
        console.log(num)
        let tempArray = this.state.experience;

        tempArray[num-1].title_position = e.target.value;
        this.setState({
            experience: tempArray,
        })        
    }

    change_experience_date(e) {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];
        let num = e.target.id.split("_")[3];
        let dir = e.target.id.split("_")[2];        
        let tempArray = this.state.experience;
        let dateInput = e.target.value;

        let date = new Date(dateInput);
        let value = monthNames[date.getMonth()] + " " + date.getFullYear();
        
        if(dir == "start") {
            tempArray[num-1].date[0] = value;
        }
        else {
            tempArray[num-1].date[1] = value;
        }
        this.setState({
            experience: tempArray,
        })        
    }

    change_experience_tasks(e) {
        let num = e.target.id.split("_")[3];
        let item = e.target.value;
        item = item.split(", ");
        console.log(num)
        let tempArray = this.state.experience;
        tempArray[num-1].tasks= item;
        console.log(tempArray);
        this.setState({
             //experience: tempArray,
        })  
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
        console.log(item);
        this.setState({
           skills: item,
        });
    }


    submitForm() {
        let status = this.state.isSubmitted;

        if(status == false) {
            document.getElementById("form").style.display = "none";
            this.setState({
                isSubmitted: true,
                btn_text: "Edit"
            });
        }

        else if(status == true) {
            document.getElementById("form").style.display = "inline";
            this.setState({
                isSubmitted: false,
                btn_text: "Submit"
            });
        }
    }
    

    test(){
        console.log(1)
    }

    render() {
        return(
            <div className="app">
                <div className="split">
                    <Form
                        addFormEdu = {this.addFormEdu}
                        removeFormEdu = {this.removeFormEdu}
                        addFormExp = {this.addFormExp}
                        removeFormExp = {this.removeFormExp}
                        arrayEducation = {this.state.education}
                        arrayExperience = {this.state.experience}
                        changeName = {this.change_name}
                        changeEmail = {this.change_email}
                        changePhone = {this.change_phone}
                        changeSummary = {this.change_summary}
                        changeEducationName = {this.change_education_name}
                        changeEducationTitle= {this.change_education_title}
                        changeEducationDate= {this.change_education_date}
                        changeExperienceName = {this.change_experience_name}
                        changeExperienceTitle= {this.change_experience_title}
                        changeExperienceDate= {this.change_experience_date}
                        changeExperienceTasks= {this.change_experience_tasks}
                        changeSkills = {this.change_skills}
                        test = {this.test}
                    />
                    
                    <CV ref={el => (this.componentRef = el)} data={this.state} />
                
                </div>
                <div className="btn_submit">
                    <button onClick={this.submitForm}>{this.state.btn_text}</button>
                    <ReactToPrint 
                        trigger= {() => {
                             return <button>Print test</button>                            
                        }}
                        documentTitle = "CV"
                        content = {() => this.componentRef}
                    />
                </div>
            </div>
        )
    }
}


export default App