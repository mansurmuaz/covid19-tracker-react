import React, { Component }from 'react'
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";
import * as actionTypes from "../../store/actions";
import {connect} from "react-redux";

const styles = {
    root: {
        // textAlign: 'center',
        // verticalAlign: 'middle'
    },
    select: {
        width: '300px'
    }
};

class CountrySelector extends Component {

    componentDidMount () {
        this.getCountryList();
    }

    getCountryList() {
        const storedCountries = localStorage.getItem('countries');
        if (!storedCountries) {
            axios.get( '/countries' )
                .then( response => {
                    this.props.onFetchCountries(response.data.countries);
                });
        } else {
            this.props.onSetCountries(JSON.parse(storedCountries));
        }
    }


    render() {
        const { classes, countries } = this.props;
        const countyList = countries?.filter((country) => country.iso3);

        return (
            <FormControl variant="outlined" >
                <InputLabel id="select-label">Countries</InputLabel>
                <Select
                    className={classes.select}
                    labelId="select-label"
                    id="select"
                    value={this.props.selectedCountry}
                    onChange={this.props.onChange}>
                    {
                        countyList?.map(country => {
                            return (
                                <MenuItem
                                    key={country.iso3}
                                    value={country.iso3}>
                                    {country.name}
                                </MenuItem>
                            )
                        })}
                </Select>
            </FormControl>
        )

    }
}

const mapStateToProps = state => {
    return {
        countries: state.countries,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchCountries: (countries) => dispatch({type: actionTypes.FETCH_COUNTRIES, payload: countries}),
        onSetCountries: (countries) => dispatch({type: actionTypes.SET_COUNTRIES, payload: countries}),
    };
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(CountrySelector));