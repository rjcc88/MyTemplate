import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { About } from "../../src";

import Tabs from "../../Route/tabs"

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
         initialRouteName='Main'
       >
            <Stack.Screen name="Main" component={Tabs} />
            {/* Tabs */}
            <Stack.Screen name="About" component={About} />
  
        </Stack.Navigator>
    )
}

export default AppNavigator