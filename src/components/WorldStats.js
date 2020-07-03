import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import axios from 'axios';
import {connect} from 'react-redux'
import * as actionTypes from './../store/actions';
import StatCards from "./StatCards";
import WorldChart from "./WorldChart";

const styles = {
    root: {
        textAlign: 'center',
        marginBottom: '40px',
        marginTop: '15px'
    },
    lastUpdate: {
        color: 'gray'
    }
}

class WorldStats extends Component {

    componentDidMount() {
        this.getWorldStats();
        this.getWorldDailyData();
    }

    getWorldStats() {
        axios.get('/')
            .then(response => {
                this.props.onFetchWorldStats(response.data);
            });
    }

    getWorldDailyData() {
        axios.get('/daily')
            .then(response => {
                const dailyData = response.data.map(day => {
                    return {
                        totalCases: day.confirmed.total,
                        newCases: day.deltaConfirmedDetail.total,
                        totalDeaths: day.deaths.total,
                        date: day.reportDate
                    }
                })
                this.props.onFetchWorldDailyData(dailyData);
            });
    }


    render() {
        const {classes, worldStats, worldDailyData, worldLastUpdate} = this.props;

        return (
            <Grid container
                  className={classes.root}
                  direction="column"
                  justify="center"
                  alignItems="center"
                  spacing={3}>

                <Grid item>
                    <Typography variant="h4" color="textSecondary">World Statistics</Typography>
                </Grid>
                <Grid item>
                    <StatCards stats={worldStats}/>
                </Grid>
                <Grid item>
                    <WorldChart data={worldDailyData}/>
                </Grid>
                <Grid className={classes.lastUpdate} item>
                    Last Update: {new Date(worldLastUpdate).toLocaleString()}
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return {
        worldStats: state.worldStats,
        worldDailyData: state.worldDailyData,
        worldLastUpdate: state.worldLastUpdate
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchWorldStats: (stats) => dispatch({type: actionTypes.FETCH_WORLD_STATS, payload: stats}),
        onFetchWorldDailyData: (data) => dispatch({type: actionTypes.FETCH_WORLD_DAILY_DATA, payload: data})
    };
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(WorldStats));