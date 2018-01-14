import React, { Component } from 'react';
import combineReducers from './combineReducers'
import { StackNavigator } from 'react-navigation';
import Login from "./src/login/Login";
import { Provider } from 'react-redux'
import {applyMiddleware, createStore} from 'redux';
import Logger from "./src/components/Logger";
import thunk from 'redux-thunk';
import MainMenu from "./src/components/MainMenu";


const SimpleApp = StackNavigator({
    Login: { screen: Login },
    Main: { screen: ({ navigation }) => <MainMenu screenProps={{ rootNavigation: navigation }} /> }
}, {
    headerMode: "none"
});

const store = createStore(combineReducers, applyMiddleware(thunk, Logger));

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <SimpleApp />
            </Provider>
        );
    }
}
