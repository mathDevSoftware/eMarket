import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Import Page
import Login from '../Login';
import Register from '../Register';
import Home from '../Home';

const Stack = createStackNavigator();

function Route() {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
    )
}

export default Route;