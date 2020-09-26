import React, { ReactElement } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import store from './store';

import App from './App';

export default function Root(): ReactElement {
    return (
        <Provider store={store}>
            <StatusBar barStyle="light-content" backgroundColor="#000000" />
            <App />
        </Provider>
    );
}
