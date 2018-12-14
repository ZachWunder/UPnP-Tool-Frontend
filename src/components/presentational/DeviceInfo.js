import React, {Component} from 'react';

import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";

const styles = theme => ({
    root: {

    },
    Name: {

    },
    UDN: {
        textAlign: "center"
    }
});

class DeviceInfo extends Component {
    render () {
        const { classes, Name, URL } = this.props;
        const url = encodeURIComponent(URL);

        return (
            <Button component={Link} to={"/device/" + url}>
                    <Typography className={classes.Name} variant="h5" component="h3">
                        {Name}
                    </Typography>
            </Button>
        )
    }
}

export default withStyles(styles)(DeviceInfo);
