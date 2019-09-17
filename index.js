// index.js

import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';

import configureStore from './components/store/store';

const store = configureStore()

// A Provider faz com que o Redux storedisponíveis para quaisquer componentes aninhados que foram embrulhadas na connect()função.
const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);