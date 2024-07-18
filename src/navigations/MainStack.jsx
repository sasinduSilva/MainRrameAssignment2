import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Feather  from 'react-native-vector-icons/Feather';
import TestScreen from '../screens/Test/TestScreen';



const MainStack = () =>{
    // const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();

    const customTabBarIcon = (focused, iconName) => {
        if (focused) {
          return (
            
                <Feather
                  name={iconName}
                  size={25}
                  color="white"
                  style={{
                    backgroundColor: "transparent",
                  }}
                />
            
          );
        } else {
          return <Feather name={iconName} color="#818181" size={25} />;
        }
      };

    return(
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarStyle: {
                
                  
                  height: 64,
                  
                
                  
                },
                
                tabBarIcon: ({ focused, color, size }) => {
                  if (route.name === "Home") {
                    return customTabBarIcon(focused, "home");
                  } else if (route.name === "Test") {
                    return customTabBarIcon(focused, "calendar");
                  }
                },
                tabBarActiveTintColor: "white", // Color for active tab
                tabBarInactiveTintColor: "gray", // Color for inactive tab
                tabBarActiveBackgroundColor:"black",
                
                tabBarLabelPosition:"beside-icon",
                tabBarBadgeStyle:{
                    margin:20
                },
                tabBarItemStyle:{
                    marginTop:10,
                    marginBottom:10,
                    marginLeft:20,
                    marginRight:20,
                    borderRadius:25,

                }
                
                
              })}
        
        >
            <Tab.Screen name="Home" component={Home} options={{headerShown:false}}/>
            <Tab.Screen name="Test" component={TestScreen} options={{headerShown:false}}/>
        </Tab.Navigator>
    )

    
    

}

export default MainStack;
