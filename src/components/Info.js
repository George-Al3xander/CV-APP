import React, {Component} from "react";

const Info = (props) => {
    return(
            <div className="phone-email">
            <div>
                <h2>Phone number</h2>
                <h3>{props.info.phone}</h3>
            </div>
            <div>
                <h2>Email</h2>
                <h3>{props.info.email}</h3>
            </div>
        </div>
        );    
}


export default Info