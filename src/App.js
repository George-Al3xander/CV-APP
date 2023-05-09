import React, {Component} from "react";

import CV from "./components/CV";

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="split">
                <form>
                    <fieldset id="personal_info">
                        <input type="text" placeholder="Enter your name"/>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                        <input type="email" />
                        <input type="phone" />
                    </fieldset>
                </form>
                <CV />
            </div>
        )
    }
}


export default App