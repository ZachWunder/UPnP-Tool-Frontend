import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import RefreshRounded from "@material-ui/icons/RefreshRounded";

import NavBar from "../presentational/NavBar";
import DeviceInfo from "../presentational/DeviceInfo"

const styles = theme => ({
    gridContainer: {
        marginTop: 30,
        marginBottom: 30
    }
});

class Home extends Component {

    state = {
        devices: false
    }
    componentDidMount () {
        this.reloadDevices();
    }

    reloadDevices = async () => {
        await fetch("http://localhost:3000/getDevices")
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data);
                console.log(data.devices);
                this.setState({ devices: data.devices })
            });
    }

    render () {
        const { classes } = this.props;

        return (
            <div>
                <NavBar />
                <Button variant="contained" color="secondary" onClick={this.reloadDevices}>
                    Reload Devices
                    <RefreshRounded />
                </Button>

                <Grid container spacing={12} className={classes.gridContainer}>
                {this.state.devices ? this.state.devices.map( device => {
                    return (
                        <DeviceInfo Name={device.Name} URL={device.SetupURL} />
                    )
                }) : null}
                </Grid>

            </div>
        )
    }
}

export default withStyles(styles)(Home);
