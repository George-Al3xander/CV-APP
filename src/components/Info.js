import React, {Component} from "react";

class  Info extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="phone-email">
            <div>
                <h2>Phone number</h2>
                <h3>{this.props.info.phone}</h3>
            </div>
            <div>
                <h2>Email</h2>
                <h3>{this.props.info.email}</h3>
            </div>
        </div>
        );
    }
}


export default Info