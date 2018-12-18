import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./index.css";

import Home from "./components/pages/Home";
import DevicePage from "./components/pages/DevicePage"

class App extends React.Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Route exact path="/" component={Home}/>
                    <Route path="/device/:URL" component={DevicePage} />
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
