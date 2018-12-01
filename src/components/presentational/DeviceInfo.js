import React, {Component} from 'react';

import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.primary.light,
    },
    Name: {
        paddingTop: 5,
        textAlign: "center",
        marginLeft: 30,
        marginRight: 30
    },
    UDN: {
        paddingBottom: 15,
        textAlign: "center"
    }
});

class DeviceInfo extends Component {
    render () {
        const { classes } = this.props;
        const { Name, UDN } = this.props;

        return (
            <div className={classes.root}>
                <Typography className={classes.Name} variant="h5" component="h3">
                    {Name}
                </Typography>
                <Typography className={classes.UDN} component="p">
                    {UDN}
                </Typography>
            </div>
        )
    }
}

export default withStyles(styles)(DeviceInfo);
