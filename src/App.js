import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import blue from "@material-ui/core/colors/blue";

import Home from "./components/pages/Home";
import DevicePage from "./components/pages/DevicePage"


const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            main: blue[600],
            light: "#6ab7ff",
            dark: "#005cb2"
        },
        secondary: {
            main: "#00c853",
            light: "#5efc82",
            dark: "#009624"
        }
    }
});

class App extends React.Component {
    render() {
        return (
            <Router>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline />

                    <Route exact path="/" component={Home}/>
                    <Route path="/device/:URL" component={DevicePage} />
                </MuiThemeProvider>

            </Router>

        );
    }
}

export default App;
