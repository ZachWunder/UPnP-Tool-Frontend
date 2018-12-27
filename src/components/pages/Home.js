import React, { Component } from "react";

import DevicesNotFound from "../presentational/Home/DevicesNotFound";
import HomeWrapper from "../presentational/Home/HomeWrapper";
import Title from "../presentational/Title";
import ReloadButton from "../presentational/Home/ReloadButton";
import DeviceButton from "../presentational/Home/DeviceButton";


class Home extends Component {

    state = {
        devices: false,
        loading: false
    }
    componentDidMount () {
        this.reloadDevices();
    }

    reloadDevices = async () => {
        this.setState({ loading: true })
        await fetch("http://localhost:3000/getAllDevices")
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.setState({ devices: data.devices })
                this.setState({ loading: false })
            });
    }

    render () {
        return (
            <React.Fragment>
                <Title>UPnP Tool</Title>
                <HomeWrapper id="HomeWrapper">
                    <ReloadButton onClick={this.reloadDevices}>
                        {this.state.loading ? "Loading Devices..." : "Reload Devices"}
                    </ReloadButton>

                    {this.state.devices ? this.state.devices.map( (device, i) => {
                        return (
                            <DeviceButton key={i} Area={i} Name={device.Name} URL={device.SetupURL} />
                        )
                    }) :

                    <DevicesNotFound>
                        <h1>No Devices Found</h1>
                    </DevicesNotFound>
                    }
                </HomeWrapper>
            </React.Fragment>



        )
    }
}

export default Home;
