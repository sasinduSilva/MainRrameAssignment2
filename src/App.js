import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import MainStack from './navigations/MainStack';
import AuthStack from './navigations/AuthStack';
import { Provider, useSelector } from "react-redux";
import reduxStore from './store/reduxStore';

const App = () =>{

  const AppContent = () =>{


    return(
      <NavigationContainer onReady={() => BootSplash.hide({fade:true})}>
      <MainStack/>
    </NavigationContainer>
    )


  }

  return (
    <Provider store={reduxStore}>
      <AppContent />
    </Provider>
  )

};

const styles = StyleSheet.create({});

export default App;



