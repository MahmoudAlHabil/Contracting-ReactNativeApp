import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StartStack from './StartStack';

const AppContainer = () => {
  return (
    <NavigationContainer>
      <StartStack />
    </NavigationContainer>
  );
}

export default AppContainer;