import React, { Component } from 'react';
import combineReducers from './combineReducers'
import { StackNavigator } from 'react-navigation';
import Main from "./src/login/Login";
import { Provider } from 'react-redux'
import {applyMiddleware, createStore} from 'redux';
import Logger from "./src/components/Logger";
import thunk from 'redux-thunk';
import GenericScreen from "./src/components/GenericScreen";


const SimpleApp = StackNavigator({
    Login: { screen: Main },
    Generic: { screen: GenericScreen }
}, {
    headerMode: "none"
});

const store = createStore(combineReducers, applyMiddleware(Logger, thunk));

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <SimpleApp />
            </Provider>
        );
    }
}
