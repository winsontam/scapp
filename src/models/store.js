import {applyMiddleware, createStore} from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import config from '../../config';
import reducer from './reducers';


const client = axios.create({
    baseURL: config.apiBaseUrl,
    responseType: 'json',
});


export default createStore(reducer, applyMiddleware(axiosMiddleware(client)));
