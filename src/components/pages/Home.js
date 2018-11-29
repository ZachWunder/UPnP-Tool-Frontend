import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";

import NavBar from "../presentational/NavBar";

const styles = theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap"
    }
});

class Home extends Component {
    render () {
        return (
            <NavBar />
        )
    }
}

export default withStyles(styles)(Home);
