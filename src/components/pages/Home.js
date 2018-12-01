import React, { Component } from "react";

import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Button, Paper } from "@material-ui/core";
import RefreshRounded from "@material-ui/icons/RefreshRounded";

import NavBar from "../presentational/NavBar";
import DeviceInfo from "../presentational/DeviceInfo"

const styles = theme => ({

});

class Home extends Component {

    state = {
        devices: false
    }
    componentDidMount () {
        this.reloadDevices();
    }

    reloadDevices = async () => {
        const devices = await fetch("http://localhost:3000/getDevices")
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data.devices)
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
                {this.state.devices ? this.state.devices.map( device => {
                    return (
                        <Button component={Link} to="/">
                            <Paper>
                                <DeviceInfo Name={device.Name} UDN={device.UDN} />
                            </Paper>
                        </Button>
                    )
                }) : null}
            </div>
        )
    }
}

export default withStyles(styles)(Home);
