import React from 'react'
import {StackNavigator, TabNavigator} from 'react-navigation'
import {NavigationComponent} from 'react-native-material-bottom-navigation'
import Home from "../views/home/Home";
import Calendar from "../views/calendar/Calendar";
import Log from "../views/log/Log";
import Graph from "../views/graph/Graph";
import Settings from "../settings/Settings";
import Week from "../views/Week";


const HomeNavigation = StackNavigator({
        Calendar: { screen: Calendar },
        Settings: { screen: Settings },
        Week: { screen: Week }
    }
);

const CalenderNavigation = StackNavigator({
        Calendar: { screen: Calendar },
        Week: { screen: Week },
    }
);

const MainMenu = TabNavigator({
    Calendar: { screen: CalenderNavigation },
    Log: { screen: Log },
    Graph: { screen: Graph },
    Home: { screen: Home }
}, {
    tabBarComponent: NavigationComponent,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        bottomNavigationOptions: {
            labelColor: 'white',
            rippleColor: 'white',
            tabs: {
                Calendar: {
                    barBackgroundColor: '#4f0002'
                },
                Log: {
                    barBackgroundColor: '#00294f'
                },
                Graph: {
                    barBackgroundColor: '#4d4f00'
                },
                Home: {
                    barBackgroundColor: '#00796B'
                }
            }
        }
    }
});


export default MainMenu;