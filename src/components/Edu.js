import React from "react";


const Edu = (props) => {
    return(
            <ul className="edu" >
                { props.education.map((edu) => {
                    return <li className="block_ul" key={"edu_"+ props.education.indexOf(edu)} >
                        <div className="edu_date cv_date">From {edu.date[0]} <br /> To {edu.date[1]}</div>
                        <div className="block_ul_titles">
                            <h2>{edu.name_school}</h2>
                            <h2>{edu.title}</h2>
                        </div>
                    </li>
                })}
            </ul>
        )     
}


export default Edu