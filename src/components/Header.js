import Toolbar from "@material-ui/core/Toolbar";
import SpaIcon from '@material-ui/icons/Spa';
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const header = () => {

    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <Box mr={2}>
                        <SpaIcon edge="start" color="inherit" aria-label="menu"/>
                    </Box>
                    <Typography variant="h5">
                        COVID-19 Tracker
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default header;