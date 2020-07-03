import React from 'react';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {withStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

const styles = {
    root: {
        textAlign: 'center',
        verticalAlign: 'middle',
        width: '250px',
        marginBottom: '15px'
    }
};

const statCard = (props) => {
    const {classes} = props;

    return (
        <Paper className={classes.root} elevation={5}>
            <CardContent>
                <Box mb={1}>
                    <Typography color="textSecondary" variant="h5">
                        {props.title}
                    </Typography>
                </Box>
                <Typography variant="h5">
                    {props.stat ? props.stat : "---"}
                </Typography>
            </CardContent>
        </Paper>
    )
}

export default withStyles(styles)(statCard);