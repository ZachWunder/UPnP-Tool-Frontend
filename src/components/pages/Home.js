import React, { Component } from "react";

import HomeWrapper from "../presentational/Home/HomeWrapper";
import Title from "../presentational/Title";
import ReloadButton from "../presentational/Home/ReloadButton";
import DeviceButton from "../presentational/Home/DeviceButton";


class Home extends Component {

    state = {
        devices: false
    }
    componentDidMount () {
        this.reloadDevices();
    }

    reloadDevices = async () => {
        await fetch("http://localhost:3000/getAllDevices")
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.setState({ devices: data.devices })
            });
    }

    render () {
        return (
            <HomeWrapper id="HomeWrapper">
                <Title>UPnP Tool</Title>
                <ReloadButton onClick={this.reloadDevices}>
                    Reload Devices
                </ReloadButton>

                {this.state.devices ? this.state.devices.map( (device, i) => {

                    return (
                        <DeviceButton key={i} Area={i} Name={device.Name} URL={device.SetupURL} />
                    )
                }) : null}
            </HomeWrapper>



        )
    }
}

export default Home;
