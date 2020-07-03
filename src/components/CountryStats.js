import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import CountrySelector from './CountrySelector'
import axios from "axios";
import * as actionTypes from "../store/actions";
import {connect} from "react-redux";
import Grid from "@material-ui/core/Grid";
import StatCards from "./StatCards";
import CountryChart from "./CountryChart";

const styles = {
    root: {
        marginTop: '15px'
    },
    lastUpdate: {
        color: 'gray'
    }
}

class CountryStats extends Component {

    componentDidMount() {
        this.getSelectedCountryStats();
    }

    componentDidUpdate() {
        this.getSelectedCountryStats();
    }

    onCountryChange = (event) => {
        this.props.onSetSelectedCountry(event.target.value);
    }

    getSelectedCountryStats() {
        const {selectedCountry, selectedCountryStats} = this.props;

        if (selectedCountry &&
            (!selectedCountryStats || (selectedCountryStats && selectedCountryStats.countryCode !== selectedCountry))) {
            axios.get('/countries/' + selectedCountry)
                .then(response => {
                    response.data.countryCode = selectedCountry;
                    this.props.onFetchSelectedCountryStats(response.data);
                });
        }
    }

    render() {
        const {classes, selectedCountryStats, countryLastUpdate} = this.props;

        return (

            <Grid container
                  className={classes.root}
                  direction="column"
                  justify="center"
                  alignItems="center"
                  spacing={4}>

                <Grid item>
                    <CountrySelector
                        onChange={(country) => this.onCountryChange(country)}
                        selectedCountry={this.props.selectedCountry}/>
                </Grid>

                <Grid item>
                    <StatCards stats={selectedCountryStats}/>
                </Grid>

                <Grid item>
                    <CountryChart data={selectedCountryStats}/>
                </Grid>

                <Grid className={classes.lastUpdate} item>
                    Last Update: {new Date(countryLastUpdate).toLocaleString()}
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedCountry: state.selectedCountry,
        selectedCountryStats: state.selectedCountryStats,
        countryLastUpdate: state.countryLastUpdate
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onSetSelectedCountry: (country) => dispatch({type: actionTypes.SET_SELECTED_COUNTRY, payload: country}),
        onFetchSelectedCountryStats: (stats) => dispatch({
            type: actionTypes.FETCH_SELECTED_COUNTRY_STATS,
            payload: stats
        })
    };
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(CountryStats));