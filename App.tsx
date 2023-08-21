import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import TabNavigator from './app/tabs/tab-navigator/tab-navigator';
import {NavigationContainer} from '@react-navigation/native';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.appwrapper}>
        <StatusBar backgroundColor="#00dba4" />
        <TabNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appwrapper: {
    flex: 1,
  },
});

export default App;
