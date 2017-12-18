import React, { Component } from 'react';
import liftApp from './src/login/reducers'
import { StackNavigator } from 'react-navigation';
import Login from "./src/login/Login";
import ProfileScreen from "./src/pages/ProfileScreen";
import { Provider } from 'react-redux'
import {applyMiddleware, createStore} from 'redux';
import {createLogger} from "redux-logger";

const SimpleApp = StackNavigator({
    Home: {
        screen: Login
    },
    Profile: {
        screen: ProfileScreen
    }
});

const logger = createLogger();

const store = createStore(liftApp, applyMiddleware(logger));

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <SimpleApp />
            </Provider>
        );
    }
}
