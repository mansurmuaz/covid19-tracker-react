import Toolbar from "@material-ui/core/Toolbar";
import SpaIcon from '@material-ui/icons/Spa';
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const styles = {
    root: {
        // marginRight: '10px'
    }
};

const header = (props) => {
    const { classes } = props;

    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <Box mr={2}>
                        <SpaIcon className={classes.root} edge="start" color="inherit" aria-label="menu"/>
                    </Box>
                    <Typography variant="h5">
                        Covid-19 Tracker
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default withStyles(styles)(header);