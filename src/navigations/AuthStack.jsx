import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Auth/Login'; // Import Login screen component

// Define a stack navigator for authentication-related screens
const AuthStack = () => {
    // Instantiate the Stack Navigator from the react-navigation library
    const Stack = createStackNavigator();

    return (
        // Stack Navigator component configuration
        <Stack.Navigator 
            initialRouteName='Login' // Set the initial route to 'Login'
        >
            {/* Define the 'Login' screen */}
            <Stack.Screen 
                name="Login" 
                component={Login} 
                options={{
                    headerShown: false // Hide the header for this screen
                }} 
            />
        </Stack.Navigator>
    );
};

export default AuthStack;
