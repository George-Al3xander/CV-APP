import React, {Component, useState} from "react";

import CV from "./components/CV";
import Form from "./components/Form";
function App() {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
        ];

    const[genInfo, setGenInfo] = useState({
        name: "John Doe",
        email: "johndoe@gmail.com",
        phone: "+3801122334",
        summary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, cupiditate minima deserunt blanditiis ducimus aliquid, a consectetur cumque porro quidem voluptate provident veritatis, laudantium minus repudiandae expedita magni ut debitis temporibus aperiam ex dolorem omnis repellendus doloribus! Sit totam nam repudiandae, incidunt alias, eius deleniti praesentium corporis inventore ipsa eligendi."
    });

    const[education, setEducation] = useState([{
        name_school: "Cool School",
        title: "WebDev",
        date:  ["2000","2011"],
        num: 1,
    }]);

    const[experience, setExperience] = useState([{
        name_company: "HelloGroup",
            title_position: "CEO",
            tasks: ["Do 1", "Do 2", "Do 3"],
            date: ["2015","2022"],
            num: 1,
    }]);

    const[skills, setSkills] = useState(["Cool","Funny","Clever"]);

    
    const[isSubmitted, submit] = useState(false);     
        

           
    const addFormEdu = () => {
        setEducation(education.concat(
            {
            name_school: "",
            title: "",
            date:  ["",""],
            num: education[education.length - 1].num+1,
        }
        ))
    }
    
    const removeFormEdu = (e) => {
        let val = e.target.id;
        let length = val.length;
        val = val[length-1];
        let tempArray = [];
        let lengthForm = education.length;    

        if(lengthForm > 1) {
            for(let i=0; i < lengthForm ; i++) {
                if(val != education[i].num) {
                    tempArray.push(education[i]);                    
                }
            }            
            setEducation(tempArray);
        }

    }

    const change_education_name = (e) => {
        let num = e.target.id.split("_")[3];

        education[num-1].name_school = e.target.value;
        setEducation(education);
    }

    const change_education_title = (e) => {
        let num = e.target.id.split("_")[3];       
        
        education[num-1].title = e.target.value;        
        setEducation(education);
    }   

    
    const change_education_date = (e) => {
        

        let num = e.target.id.split("_")[3];
        let dir = e.target.id.split("_")[2];        
        let dateInput = e.target.value;

        let date = new Date(dateInput);
        let value = monthNames[date.getMonth()] + " " + date.getFullYear();
        
        if(dir == "start") {
            education[num-1].date[0] = value;
        }
        else {
            education[num-1].date[1] = value;
        }
        setEducation(education) 
    }
    


    









    const addFormExp = () => {
        setExperience(experience.concat(
            {
                name_company: "",
                title_position: "",
                tasks: [],
                date: ["",""],
                num: experience[experience.length - 1].num+1,
        }
        ))
    }
    
    const removeFormExp = (e) => {
        let val = e.target.id;
        let length = val.length;
        val = val[length-1];
        let tempArray = [];
        let lengthForm = experience.length;    

        if(lengthForm > 1) {
            for(let i=0; i < lengthForm ; i++) {
                if(val != experience[i].num) {
                    tempArray.push(experience[i]);                    
                }
            }            
            setExperience(tempArray);
        }

    }

    const change_experience_name = (e) => {
        let num = e.target.id.split("_")[3];

        experience[num-1].name_company = e.target.value;
        setExperience(experience);
    }

    const change_experience_title = (e) => {
        let num = e.target.id.split("_")[3];       
        
        experience[num-1].title_position  = e.target.value;        
        setExperience(experience);
    }   

    
    const change_experience_date = (e) => {        

        let num = e.target.id.split("_")[3];
        let dir = e.target.id.split("_")[2];        
        let dateInput = e.target.value;

        let date = new Date(dateInput);
        let value = monthNames[date.getMonth()] + " " + date.getFullYear();
        
        if(dir == "start") {
            experience[num-1].date[0] = value;
        }
        else {
            experience[num-1].date[1] = value;
        }
        setExperience(education) 
    }




    
















    


    // change_experience_tasks(e) {
    //     let num = e.target.id.split("_")[3];
    //     let item = e.target.value;
    //     item = item.split(", ");
    //     console.log(num)
    //     let tempArray = this.state.experience;
    //     tempArray[num-1].tasks= item;
    //     console.log(tempArray);
    //     this.setState({
    //          //experience: tempArray,
    //     })  
    // }

    




    // change_name(e) {
    //     this.setState({
    //         general_info: {
    //         name: e.target.value,
    //         email: this.state.general_info.email,
    //         phone: this.state.general_info.phone,
    //         summary: this.state.general_info.summary
    //         },
    //     });
    // }

    // change_email(e) {
    //     this.setState({
    //         general_info: {
    //         name: this.state.general_info.name,
    //         email: e.target.value,
    //         phone: this.state.general_info.phone,
    //         summary: this.state.general_info.summary
    //         },
    //     });
    // }

    // change_phone(e) {
    //     this.setState({
    //         general_info: {
    //         name: this.state.general_info.name,
    //         email: this.state.general_info.email,
    //         phone: e.target.value,
    //         summary: this.state.general_info.summary
    //         },
    //     });
    // }

    // change_summary(e) {
    //     this.setState({
    //         general_info: {
    //         name: this.state.general_info.name,
    //         email: this.state.general_info.email,
    //         phone: this.state.general_info.phone,
    //         summary: e.target.value
    //         },
    //     });
    // }

    // change_skills(e) {
    //     let item = e.target.value;
    //     item = item.split(", ");
    //     console.log(item);
    //     this.setState({
    //        skills: item,
    //     });
    // }


    // submitForm() {
    //     let status = this.state.isSubmitted;

    //     if(status == false) {
    //         document.getElementById("form").style.display = "none";
    //         this.setState({
    //             isSubmitted: true,
    //             btn_text: "Edit"
    //         });
    //     }

    //     else if(status == true) {
    //         document.getElementById("form").style.display = "inline";
    //         this.setState({
    //             isSubmitted: false,
    //             btn_text: "Submit"
    //         });
    //     }
    // }
    

    // test(){
    //     console.log(1)
    // }

    render() {
        return(
            <div className="app">
                <div className="split">
                    <Form
                        addFormEdu = {addFormEdu}
                        removeFormEdu = {removeFormEdu}
                        addFormExp = {addFormExp}
                        removeFormExp = {removeFormExp}
                        arrayEducation = {state.education}
                        arrayExperience = {state.experience}
                        changeName = {change_name}
                        changeEmail = {change_email}
                        changePhone = {change_phone}
                        changeSummary = {change_summary}
                        changeEducationName = {change_education_name}
                        changeEducationTitle= {change_education_title}
                        changeEducationDate= {change_education_date}
                        changeExperienceName = {change_experience_name}
                        changeExperienceTitle= {change_experience_title}
                        changeExperienceDate= {change_experience_date}
                        changeExperienceTasks= {change_experience_tasks}
                        changeSkills = {change_skills}
                        test = {test}
                    />
                    <CV data={this.state} />
                
                </div>
                <div className="btn_submit">
                    <button onClick={this.submitForm}>{this.state.btn_text}</button>
                </div>
            </div>
        )
    }
}


export default App