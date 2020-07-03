import React from 'react';
import Grid from "@material-ui/core/Grid";
import StatCard from "./StatCard";

const statCards = (props) => {
    const {stats} = props;

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

export default statCards;