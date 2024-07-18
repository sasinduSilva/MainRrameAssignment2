import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import TestScreen from '../screens/Test/TestScreen';

// Create a Bottom Tab Navigator component
const MainStack = () => {
    // Instantiate the Tab Navigator from the react-navigation library
    const Tab = createBottomTabNavigator();

    
      //Function to render custom icons for the tab bar.
     const customTabBarIcon = (focused, iconName) => {
        return (
            <Feather
                name={iconName}
                size={25}
                color={focused ? "white" : "#818181"} // Change color based on focus state
                style={{
                    backgroundColor: "transparent", // Ensure no background color is applied
                }}
            />
        );
    };

    return (
        // Tab Navigator component configuration
        <Tab.Navigator
            initialRouteName="Home" // Set initial route for the Tab Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    height: 64, // Height of the tab bar
                },
                tabBarIcon: ({ focused, color, size }) => {
                    // Conditionally render icons based on the current route
                    if (route.name === "Home") {
                        return customTabBarIcon(focused, "home");
                    } else if (route.name === "Test") {
                        return customTabBarIcon(focused, "calendar");
                    }
                },
                tabBarActiveTintColor: "white", // Color for the active tab
                tabBarInactiveTintColor: "gray", // Color for inactive tabs
                tabBarActiveBackgroundColor: "black", // Background color for the active tab
                tabBarLabelPosition: "beside-icon", // Position label beside the icon
                tabBarBadgeStyle: {
                    margin: 20 // Margin for badge style
                },
                tabBarItemStyle: {
                    marginTop: 10, // Top margin for tab item
                    marginBottom: 10, // Bottom margin for tab item
                    marginLeft: 20, // Left margin for tab item
                    marginRight: 20, // Right margin for tab item
                    borderRadius: 25, // Rounded corners for tab item
                }
            })}
        >
            {/* Define screens for the Tab Navigator */}
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Test" component={TestScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};

export default MainStack;
