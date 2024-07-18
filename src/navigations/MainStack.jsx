import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/Home';



const MainStack = () =>{
    const Stack = createStackNavigator();

    return(
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        </Stack.Navigator>
    )

    
    

}

export default MainStack;
