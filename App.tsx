import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import TabNavigator from './app/tabs/tab-navigator/tab-navigator';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#00dba4" />
      <TabNavigator />
    </SafeAreaView>
  );
}

export default App;
