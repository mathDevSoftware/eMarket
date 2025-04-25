import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Import Page
import Login from '../Login';
import Register from '../Register';
import Home from '../Home';
import Profile from '../Profile';

const Stack = createStackNavigator();

function Route() {
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Profile' component={Profile} />
        </Stack.Navigator>
    )
}

export default Route;