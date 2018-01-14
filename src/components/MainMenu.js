import { TabNavigator } from 'react-navigation'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import Home from "../home/Home";
import Calendar from "../calendar/Calendar";
import Log from "../log/Log";
import Graph from "../graph/Graph";
import Settings from "../settings/Settings";

const MainMenu = TabNavigator({
    Home: { screen: Home },
    Calendar: { screen: Calendar },
    Log: { screen: Log },
    Graph: { screen: Graph },
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
                    barBackgroundColor: '#004f02'
                },
                Calendar: {
                    barBackgroundColor: '#4f0002'
                },
                Log: {
                    barBackgroundColor: '#00294f'
                },
                Graph: {
                    barBackgroundColor: '#4d4f00'
                },
                Settings: {
                    barBackgroundColor: '#00796B'
                }
            }
        }
    }
});

export default MainMenu;