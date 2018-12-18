import React, {Component} from 'react';

import { Link } from "react-router-dom";
import DeviceInfoWrapper from "./DeviceInfoWrapper";

class DeviceInfo extends Component {
    render () {
        const { Name, URL, Area } = this.props;
        const url = encodeURIComponent(URL);

        return (
            <Link to={"/device/" + url}>
                <DeviceInfoWrapper area={Area}>
                    {Name}
                </DeviceInfoWrapper>
            </Link>

        )
    }
}

export default DeviceInfo;
