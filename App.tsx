import React, {useState} from 'react';
import {Alert, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import {dark, light} from './app/utils/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import 'react-native-gesture-handler';
import StackNavigator from './app/navigators/stack-navigator/stack-navigator';
import {useRootStore} from './models/root';

const queryClient = new QueryClient();

function App(): JSX.Element {
  const {currentTheme, toggleTheme} = useRootStore();

  const storeTheme = async (value: string) => {
    try {
      await AsyncStorage.setItem('@theme', value);
    } catch (e) {
      Alert.alert('Error presesting theme value');
    }
  };

  const getTheme = async () => {
    try {
      const value = await AsyncStorage.getItem('@theme');
      if (value !== null) {
        return value;
      }
    } catch (e) {
      Alert.alert('Error reading theme value');
    }
  };

  const handleThemeToggle = () => {
    if (currentTheme === 'light') {
      storeTheme('dark');
      return;
    }
    storeTheme('light');
  };

  if (getTheme() !== undefined) {
    getTheme()
      .then(
        theme => theme !== undefined && theme !== currentTheme && toggleTheme(),
      )
      .catch(e => Alert.alert('Error ' + e?.message));
  } else {
    storeTheme('light');
  }

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={currentTheme === 'light' ? light : dark}>
          <SafeAreaView style={styles.appwrapper}>
            <StatusBar backgroundColor="#0E5A4C" />
            <StackNavigator />
          </SafeAreaView>
        </ThemeProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appwrapper: {
    flex: 1,
  },
});

export default App;
