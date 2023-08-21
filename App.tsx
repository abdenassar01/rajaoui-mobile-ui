import React, {useState} from 'react';
import {Alert, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import TabNavigator from './app/tabs/tab-navigator/tab-navigator';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import {dark, light} from './app/utils/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App(): JSX.Element {
  const [theme, setTheme] = useState<string>('light');

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
    if (theme === 'light') {
      setTheme('dark');
      storeTheme('dark');
      return;
    }
    setTheme('light');
    storeTheme('light');
  };

  if (getTheme() !== undefined) {
    getTheme()
      .then(currTheme => currTheme !== undefined && setTheme(currTheme))
      .catch(e => Alert.alert('Error ' + e?.message));
  } else {
    storeTheme('light');
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme === 'light' ? light : dark}>
        <SafeAreaView style={styles.appwrapper}>
          <StatusBar backgroundColor="#0E5A4C" />
          <TabNavigator toggleTheme={handleThemeToggle} />
        </SafeAreaView>
      </ThemeProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appwrapper: {
    flex: 1,
  },
});

export default App;
