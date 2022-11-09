import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScaledSheet } from 'react-native-size-matters';
import { AboutUs, ContactUs, Home } from '../screens';
import { Colors } from '../utils';
import HomeStack from './HomeStack';


const Tab = createBottomTabNavigator();

const HomeTab = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'الرئيسية') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'من نحن') {
                        iconName = focused ? 'information-circle' : 'information-circle-outline';
                    } else if (route.name === 'تواصل معنا') {
                        iconName = focused ? 'call' : 'call-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: Colors.gray,
                headerShown: false,
            })}
        >
            <Tab.Screen name="HomeStack" component={HomeStack} options={{
                tabBarLabel: "الرئيسية", tabBarLabelStyle: { fontSize: 12 },
                tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
            }} />
            <Tab.Screen name="AboutUs" component={AboutUs} options={{
                tabBarLabel: "من نحن", tabBarLabelStyle: { fontSize: 12 },
                tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} size={size} color={color} />
            }} />
            <Tab.Screen name="ContactUs" component={ContactUs} options={{
                tabBarLabel: "تواصل معنا", tabBarLabelStyle: { fontSize: 12 },
                tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? 'call' : 'call-outline'} size={size} color={color} />
            }} />
        </Tab.Navigator>
    );
}

export default HomeTab;

const styles = ScaledSheet.create({})