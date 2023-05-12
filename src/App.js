import React, {Component, useEffect, useState} from "react";

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

    
    const[isSubmitted, setSubmit] = useState(false);     
    const[buttonText, setButtonText] = useState("Submit");     
        

           
    const addFormEdu = () => {
        setEducation(education.concat(
            {
            name_school: "",
            title: "",
            date:  ["",""],
            num: education[education.length - 1].num + 1,
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
        let tempArray = education
        for(let item of tempArray ) {
            if(item.num == num) {
                item.name_school = e.target.value;
                
            }
        }

        setEducation(tempArray);
    }

    const change_education_title = (e) => {
        let num = e.target.id.split("_")[3]; 
        let tempArray = education
        
        for(let item of tempArray ) {
            if(item.num == num) {
                item.title = e.target.value;        
               
            }
        }
        setEducation(tempArray);
    }   

    
    const change_education_date = (e) => {
        let num = e.target.id.split("_")[3];
        let dir = e.target.id.split("_")[2];        
        let dateInput = e.target.value;
        let tempArray = education;
        let date = new Date(dateInput);
        let value = monthNames[date.getMonth()] + " " + date.getFullYear();
         for(let item of tempArray ) {
            if(item.num == num) {
                if(dir == "start") {
                    item.date[0] = value;
                }
                else {
                    item.date[1] = value;
                }               
             }
         }


        
        setEducation(tempArray) 
    }

    const addFormExp = () => {
        setExperience(experience.concat(
            {
            name_company: "",
            title_position: "",
            tasks: [],
            date: ["",""],
            num: experience[experience.length - 1].num + 1,
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
        let tempArray = experience;

        for(let item of tempArray ) {
            if(item.num == num) {
                item.name_company = e.target.value;
            }
        }
        //console.log(tempArray[num-1].name_company)
        setExperience(tempArray);
        console.log(experience);
    }

    useEffect(() => {

    })

    const change_experience_title = (e) => {
        let num = e.target.id.split("_")[3];  
        let tempArray = experience;
        for(let item of tempArray ) {
             if(item.num == num) {
                item.title_position  = e.target.value;        
               
             }
        }     
        
        setExperience(tempArray);
    }   

    
    const change_experience_date = (e) => {        

        let num = e.target.id.split("_")[3];
        let dir = e.target.id.split("_")[2];        
        let dateInput = e.target.value;
        let tempArray = experience;
        let date = new Date(dateInput);
        let value = monthNames[date.getMonth()] + " " + date.getFullYear();
        
        // for(let item of tempArray ) {
        //     if(item.num == num) {
               
        //     }
        // }


        for(let item of tempArray ) {
            if(item.num == num) {
                if(dir == "start") {
                    item.date[0] = value;
                }
                else {
                    item.date[1] = value;
                }
            }
        }        
        
        setExperience(tempArray) 
    }

    const change_experience_tasks = (e) => {
        let num = e.target.id.split("_")[3];
        let tasks = e.target.value;
        let tempArray = experience;
        tasks = tasks.split(", ");
        for(let item of tempArray ) {
            if(item.num == num) {
               item.tasks= tasks;
               
             }
        } 
        
        setExperience(tempArray);  
    }
   



    




    const change_name = (e) => {
        setGenInfo({           
            name: e.target.value,
            email: genInfo.email,
            phone: genInfo.phone,
            summary: genInfo.summary           
        });
    }

    const change_email = (e) => {
        setGenInfo({           
            name: genInfo.name,
            email: e.target.value,
            phone: genInfo.phone,
            summary: genInfo.summary           
        });
    }

    const change_phone = (e) => {
        setGenInfo({           
            name: genInfo.name,
            email: genInfo.email,
            phone: e.target.value,
            summary: genInfo.summary           
        });
    }

    const change_summary = (e) => {
        setGenInfo({            
            name: genInfo.name,
            email: genInfo.email,
            phone: e.target.value,
            summary: e.target.value            
        });
    }

    const change_skills = (e) => {
        let item = e.target.value;
        item = item.split(", ");
        console.log(item);
        setSkills(item);
    }


    const submitForm = ()  =>{ 
        if(isSubmitted == false) {
            document.getElementById("form").style.display = "none";
            
            setSubmit(true);
            setButtonText("Edit");            
        }

        else if(isSubmitted == true) {
            document.getElementById("form").style.display = "inline";
            setSubmit(false);
            setButtonText("Submit"); 
        }
    }
    

    // test(){
    //     console.log(1)
    // }

    
        return(
            <div className="app">
                <div className="split">
                    <Form
                        addFormEdu = {addFormEdu}
                        removeFormEdu = {removeFormEdu}
                        addFormExp = {addFormExp}
                        removeFormExp = {removeFormExp}
                        arrayEducation = {education}
                        arrayExperience = {experience}
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
                        
                    />
                    <CV data={{
                        general_info: genInfo,
                        skills: skills,
                        experience: experience,
                        education: education
                    }

                    } />
                
                </div>
                <div className="btn_submit">
                    <button onClick={submitForm}>{buttonText}</button>
                </div>
            </div>
        )
    
}


export default App