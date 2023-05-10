import React, {Component} from "react";


class Edu extends Component {
    constructor(props) {
        super(props);
    }
    

    render() {
        return(
            <ul className="edu" >
                {this.props.education.map((edu) => {
                    return <li className="block_ul" key={"edu_"+this.props.education.indexOf(edu)} >
                        <div className="edu_date date">{edu.date}</div>
                        <div>
                            <h2>{edu.name_school}</h2>
                            <h2>{edu.title}</h2>
                        </div>
                    </li>
                })}
            </ul>
        ) 
    }
}


export default Edu