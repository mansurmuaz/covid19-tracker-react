import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import {createStore} from 'redux';
import reducer from './store/reducer';
import {Provider} from 'react-redux';

const store = createStore(reducer);

axios.defaults.baseURL = 'https://covid19.mathdro.id/api';

axios.interceptors.response.use(response => {
    // console.log(response);
    return response;
}, error => {
    console.log(error);
    //TODO: Display ERROR message
    return Promise.resolve(error);
});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
