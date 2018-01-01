import React, { Component } from 'react';
import loginReducer from './src/login/reducers'
import { StackNavigator } from 'react-navigation';
import Main from "./src/login/Login";;
import { Provider } from 'react-redux'
import {applyMiddleware, createStore} from 'redux';
import Logger from "./src/components/Logger";
import GenericScreen from "./src/components/GenericScreen";


const SimpleApp = StackNavigator({
    Login: { screen: Main },
    Generic: { screen: GenericScreen }
}, {
    headerMode: "none"
});

const store = createStore(loginReducer, applyMiddleware(Logger));

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <SimpleApp />
            </Provider>
        );
    }
}
