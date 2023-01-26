import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Splash } from '../../src';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Splash'
        screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}

export default AuthNavigator