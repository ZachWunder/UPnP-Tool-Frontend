import React, { Component } from "react";

import DevicePageWrapper from "../presentational/DevicePage/DevicePageWrapper";
import ServiceWrapper from "../presentational/DevicePage/Services";
import DeviceInfoWrapper from "../presentational/DevicePage/DeviceInfo";
import Title from "../presentational/Title";
import BackButton from "../presentational/DevicePage/BackButton";

class DevicePage extends Component {

    state = {
        deviceInfo: false
    }
    componentDidMount = async () => {
        const encodedURL = this.props.match.params.URL;

        await this.getDeviceInfo(encodedURL)
        await this.getDeviceServices(encodedURL)
    }

    getDeviceServices = async URL => {
        fetch("http://localhost:3000/getDeviceServices/" + URL)
        .then(response => {
            return response.json()
        })
        .then(services => {
            this.setState({
                Services: services.deviceServices
             })

        });
    }

    getDeviceInfo = async URL => {
      fetch("http://localhost:3000/getDeviceInfo/" + URL)
      .then(response => response.json())
      .then(device => {
          console.log(device);
          this.setState({
              DeviceInfo: {
                  MACAddress: device.MACAddress,
                  SerialNumber: device.SerialNumber,
                  FirmwareVersion: device.FirmwareVersion,
                  UDN: device.UDN,
                  DeviceType: device.DeviceType,
                  Name: device.Name
              }
          })
      })
    }


    render () {
        const DeviceInfo = this.state.DeviceInfo;
        const Services = this.state.Services;
        return (
            <DevicePageWrapper>
                <Title>UPnP Tool</Title>
                <BackButton to="/">
                    Back to Devices
                </BackButton>
                <DeviceInfoWrapper>
                    { DeviceInfo ?
                        <div>
                            <h2>MACAddress: {DeviceInfo.MACAddress}</h2>
                            <h2>SerialNumber: {DeviceInfo.SerialNumber}</h2>
                            <h2>FirmwareVersion: {DeviceInfo.FirmwareVersion}</h2>
                            <h2>UDN: {DeviceInfo.UDN}</h2>
                            <h2>DeviceType: {DeviceInfo.DeviceType}</h2>
                        </div>
                        : null
                    }
                </DeviceInfoWrapper>
                <ServiceWrapper>
                    { Services ?
                        <div>
                            {Services.map( service => {
                                return (
                                    <h2>
                                        {service.serviceId}
                                    </h2>
                                )
                            })}
                        </div>
                        : null
                    }
                </ServiceWrapper>
            </DevicePageWrapper>
        )
    }
}

export default DevicePage;
