import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import Login from '../screens/Auth/Login';



const AuthStack = () =>{
    const Stack = createStackNavigator();

    return(
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        </Stack.Navigator>
    )

    
    

}

export default AuthStack;
