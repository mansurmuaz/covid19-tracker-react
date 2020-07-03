import * as actionTypes from '../store/actions';

const initialState = {
    worldStats: null,
    worldDailyData: null,
    worldLastUpdate: null,
    countries: null,
    selectedCountry: 'USA',
    selectedCountryStats: null,
    countryLastUpdate: null
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.FETCH_WORLD_STATS:
            return {
                ...state,
                worldStats: action.payload,
                worldLastUpdate: action.payload.lastUpdate
            }
        case actionTypes.FETCH_WORLD_DAILY_DATA:
            return {
                ...state,
                worldDailyData: action.payload
            }
        case actionTypes.FETCH_COUNTRIES:
            localStorage.setItem('countries', JSON.stringify(action.payload));
            return {
                ...state,
                countries: action.payload
            }
        case actionTypes.SET_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        case actionTypes.SET_SELECTED_COUNTRY:
            return {
                ...state,
                selectedCountry: action.payload
            }
        case actionTypes.FETCH_SELECTED_COUNTRY_STATS:
            return {
                ...state,
                selectedCountryStats: action.payload,
                countryLastUpdate: action.payload.lastUpdate
            }
        default:
            return state;
    }
}

export default reducer;