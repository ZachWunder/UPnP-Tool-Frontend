import React, { Component } from "react";

class DevicePage extends Component {

    state = {
        deviceInfo: false
    }
    componentDidMount = async () => {
        const encodedURL = this.props.match.params.URL;
        const URL = decodeURIComponent(encodedURL);
        await this.getDeviceInfo(URL)
    }

    getDeviceInfo = async URL => {
        const encodedURI = encodeURIComponent(URL)
        fetch("http://localhost:3000/getDeviceServices/" + encodedURI)
        .then(response => {
            return response.json()
        })
        .then(data => {
            this.setState({
                Name: data.Name,
                MACAddress: data.MACAddress,
                FirmwareVersion: data.FirmwareVersion,
                UDN: data.UDN,
                DeviceType: data.DeviceType,
             })

        });
    }


    render () {

        return (
            <div>
                <h1>here</h1>
                <h1>{this.state.deviceInfo}</h1>
            </div>
        )
    }
}

export default DevicePage;
