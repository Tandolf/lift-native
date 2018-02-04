import React, {Component} from 'react';
import combineReducers from './combineReducers'
import {StackNavigator} from 'react-navigation';
import Login from "./src/views/login/Login";
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux';
import Logger from "./src/components/Logger";
import thunk from 'redux-thunk';
import Splash from "./src/views/splash/Splash";
import {View} from "react-native";
import MainMenu from "./src/components/MainMenu";

class NavigatorWrappingScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <MainMenu />
            </View>
        );
    }
}

const MainNavigation = StackNavigator({
    Splash: { screen: Splash },
    Login: { screen: Login },
    Main: { screen: NavigatorWrappingScreen }
}, {
    headerMode: "none"
});

const store = createStore(combineReducers, applyMiddleware(thunk, Logger));

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MainNavigation />
            </Provider>
        );
    }
}
