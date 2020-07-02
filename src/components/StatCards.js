import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import StatCard from "./StatCard";

const styles = {
    // root: {
    //     textAlign: 'center',
    //     verticalAlign: 'middle'
    // }
};

const statCards = (props) => {
    const { stats } = props;

    return (
        <Grid container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={5}>
            <Grid item xs={4}>
                <StatCard
                    title={"Total Cases"}
                    stat={stats?.confirmed.value}/>
            </Grid>
            <Grid item xs={4}>
                <StatCard
                    title={"Total Deaths"}
                    stat={stats?.deaths.value}/>
            </Grid>
            <Grid item xs={4}>
                <StatCard
                    title={"Total Recovered"}
                    stat={stats?.recovered.value}/>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(statCards);