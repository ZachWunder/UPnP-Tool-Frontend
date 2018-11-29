import React, { Component } from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

import DeviceInformation from "./DeviceInformation";
import Services from "../containers/Services";

class DevicePage extends Component {
    render() {
        const {
            Name,
            MACAddress,
            FirmwareVersion,
            UDN,
            DeviceType,
            URL,
            SetupURL
        } = this.props;
        return (
            <div>
                <Services URL={SetupURL} />
                <Typography variant="display1">Device Info</Typography>
                <DeviceInformation
                    Name={Name}
                    MACAddress={MACAddress}
                    FirmwareVersion={FirmwareVersion}
                    UDN={UDN}
                    DeviceType={DeviceType}
                    URL={URL}
                />
            </div>
        );
    }
}

DevicePage.propTypes = {
    Name: PropTypes.string.isRequired,
    MACAddress: PropTypes.string.isRequired,
    FirmwareVersion: PropTypes.string.isRequired,
    UDN: PropTypes.string.isRequired,
    DeviceType: PropTypes.string.isRequired,
    URL: PropTypes.string.isRequired,
    SetupURL: PropTypes.string.isRequired
};

export default DevicePage;
