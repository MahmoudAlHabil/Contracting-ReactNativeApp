import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScaledSheet } from 'react-native-size-matters';
import { AboutUs, ContactUs, Home } from '../screens';
import { Colors } from '../utils';


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
                tabBarStyle: styles.tabBarStyle,
            })}
        >
            <Tab.Screen name="الرئيسية" component={Home} />
            <Tab.Screen name="من نحن" component={AboutUs} />
            <Tab.Screen name="تواصل معنا" component={ContactUs} />
        </Tab.Navigator>
    );
}

export default HomeTab;

const styles = ScaledSheet.create({
    tabBarStyle: {
        backgroundColor: Colors.white,
    },
})