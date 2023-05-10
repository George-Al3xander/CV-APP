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
                <h2>{this.props.info.phone}</h2>
            </div>
            <div>
                <h2>Email</h2>
                <h2>{this.props.info.email}</h2>
            </div>
        </div>
        );
    }
}


export default Info