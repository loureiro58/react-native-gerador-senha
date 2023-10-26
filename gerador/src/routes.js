import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from './pages/home';
import {Passwords} from './pages/passwords';

const Tab = createBottomTabNavigator();

export function Routes(){

    <Tab.Navigator>
        <Tab.Screen
            name='home'
            component={Home}
            options={{
                headerShown: false,
            }}
        />

        <Tab.Screen
            name='passwords'
            component={Passwords}
        />
    </Tab.Navigator>
}