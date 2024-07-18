import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import MainStack from './navigations/MainStack';
import AuthStack from './navigations/AuthStack';

export default function App() {
  return (
    <NavigationContainer onReady={() => BootSplash.hide({fade:true})}>
      <MainStack/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({});