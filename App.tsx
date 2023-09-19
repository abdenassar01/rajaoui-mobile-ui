import React from 'react';
import {Alert, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import {dark, light} from './app/utils/theme';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import 'react-native-gesture-handler';
import StackNavigator from './app/navigators/stack-navigator/stack-navigator';
import {useRootStore} from './models/root';
import {getTheme, storeTheme} from './app/theme/theme';

const queryClient = new QueryClient();

function App(): JSX.Element {
  const {currentTheme, toggleTheme} = useRootStore();

  if (getTheme() !== undefined) {
    getTheme()
      .then(theme => theme !== currentTheme && toggleTheme())
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
