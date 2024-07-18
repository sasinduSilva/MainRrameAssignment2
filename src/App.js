import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import MainStack from './navigations/MainStack';
import AuthStack from './navigations/AuthStack';
import { Provider, useSelector } from "react-redux";
import reduxStore from './store/reduxStore';

const App = () => {
  
  // arrow function which returns the app conent based on whether user logged in or not
  const AppContent = () => {
    //isLoggedIn variable from state.
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    return (
      <NavigationContainer onReady={() => BootSplash.hide({ fade: true })}>
        {isLoggedIn ? <MainStack />:<AuthStack/>}
      </NavigationContainer>
    )
  }

  return (
    //returing the app content wrapped up by redux store
    <Provider store={reduxStore}>
      <AppContent />
    </Provider>
  )

};



export default App;



