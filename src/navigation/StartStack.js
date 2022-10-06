import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding } from '../screens';
import HomeTab from './HomeTab';

const Stack = createStackNavigator();

const StartStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="HomeTab" component={HomeTab} />
        </Stack.Navigator>
    );
}

export default StartStack;