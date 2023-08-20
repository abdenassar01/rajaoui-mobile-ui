import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import TabNavigator from './app/tabs/tab-navigator/tab-navigator';
import {NavigationContainer} from '@react-navigation/native';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <StatusBar backgroundColor="#00dba4" />
        <TabNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
