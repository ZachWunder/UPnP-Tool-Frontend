import React, { Component } from "react";
import { AppBar, Tabs, Tab, Button } from "@material-ui/core";
import RefreshRounded from "@material-ui/icons/RefreshRounded";

import DevicePage from "./DevicePage";

class DeviceDisplay extends Component {
    render() {
        const { devices, value } = this.state;

        return (
            <div>
                <AppBar position="static" color="default">
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={this.reloadDevices}
                    >
                        Reload Devices
                        <RefreshRounded />
                    </Button>
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        scrollable
                        scrollButtons="auto"
                    >
                        {devices.map((device, i) => {
                            return <Tab label={device.Name} key={device.UDN} />;
                        })}
                    </Tabs>
                </AppBar>
                {devices[value].Name &&
                devices[value].URL &&
                devices[value].DeviceType ? (
                    <DevicePage
                        Name={devices[value].Name}
                        MACAddress={devices[value].MACAddress}
                        FirmwareVersion={devices[value].FirmwareVersion}
                        UDN={devices[value].UDN}
                        DeviceType={devices[value].DeviceType}
                        URL={devices[value].URL}
                        SetupURL={devices[value].SetupURL}
                    />
                ) : null}
            </div>
        );
    }
}

export default DeviceDisplay;
