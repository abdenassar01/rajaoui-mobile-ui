/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/home/home';
import NavigationIcon from '../../utils/navigationIcon/NavigationIcon';
import {ThemeType} from '../../utils/theme';
import {withTheme} from 'styled-components';

type Props = {
  toggleTheme: () => void;
  theme: ThemeType;
};

const TabNavigator = ({toggleTheme, theme}: Props) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
          borderRadius: 10,
          backgroundColor: '#0E5A4C',
          elevation: 3,
          height: 50,
        },
      }}>
      <Tab.Screen
        name="Home"
        children={() => <Home toggleTheme={toggleTheme} />}
        options={{
          tabBarIcon: ({focused}) => (
            <NavigationIcon
              theme={theme}
              focused={focused}
              label="Home"
              icon="home"
            />
          ),
        }}
      />
      <Tab.Screen
        name="HomeSe"
        children={() => <Home toggleTheme={toggleTheme} />}
      />
    </Tab.Navigator>
  );
};

export default withTheme(TabNavigator);
