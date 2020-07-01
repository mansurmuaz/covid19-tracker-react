import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SpaIcon from '@material-ui/icons/Spa';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import React from "react";

const header = () => (
    <AppBar position="static">
        <Toolbar>
            <SpaIcon edge="start" color="inherit" aria-label="menu"/>
            <Typography variant="h6">
                Covid-19 Tracker
            </Typography>
        </Toolbar>
    </AppBar>
);

export default header;