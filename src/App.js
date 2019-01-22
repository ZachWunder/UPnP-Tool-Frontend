import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./index.css";

import Home from "./components/pages/Home";
import DevicePage from "./components/pages/DevicePage";
import ServicePage from "./components/pages/ServicePage";

class App extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/device/:URL" component={DevicePage} />
                    <Route path="/device/:URL/services/:ServiceURL" component={ServicePage} />
                </React.Fragment>
            </Router>

        );
    }
}

export default App;

/*{
    palette: {
        primary: {
            main: #1e88e5,
            light: "#6ab7ff",
            dark: "#005cb2"
        },
        secondary: {
            main: "#00c853",
            light: "#5efc82",
            dark: "#009624"
        }
    }
})
*/
