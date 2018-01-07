import { TabNavigator } from 'react-navigation'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import Home from "../home/Home";
import Settings from "../settings/Settings";
import Calendar from "../calendar/Calendar";

const Menu = TabNavigator({
    Home: { screen: Home },
    Calendar: { screen: Calendar },
    Settings: { screen: Settings }
}, {
    tabBarComponent: NavigationComponent,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        bottomNavigationOptions: {
            labelColor: 'white',
            rippleColor: 'white',
            tabs: {
                Home: {
                    barBackgroundColor: '#c10003'
                },
                Calendar: {
                    barBackgroundColor: '#4f0002'
                },
                Settings: {
                    barBackgroundColor: '#00796B'
                }
            }
        }
    }
});

export default Menu;