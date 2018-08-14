import React from 'react';
import {Provider} from 'react-redux';
import store from './models/store';
import AppRoute from './views/AppRoute';


export default function () {
    return (
        <Provider store={store}>
            <AppRoute/>
        </Provider>
    );
}
