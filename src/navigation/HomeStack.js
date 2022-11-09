import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, ItemDetails } from '../screens';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ItemDetails" component={ItemDetails} />
        </Stack.Navigator>
    );
}

export default HomeStack;