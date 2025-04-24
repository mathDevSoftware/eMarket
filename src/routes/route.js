import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Import Page
import Login from '../Login';

const Stack = createStackNavigator();

function Route() {
    return(
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={Login}/>
        </Stack.Navigator>
    )
}

export default Route;