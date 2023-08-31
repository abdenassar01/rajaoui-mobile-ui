/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/home/home';
import NavigationIcon from '../../utils/navigationIcon/NavigationIcon';
import {ThemeType} from '../../utils/theme';
import {withTheme} from 'styled-components';
import Loading from '../../utils/loading/loading';

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
          bottom: 5,
          left: 5,
          right: 5,
          borderRadius: 10,
          backgroundColor: theme.secondaryBackground,
          elevation: 5,
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
        name="Seting"
        children={() => <Loading />}
        options={{
          tabBarIcon: ({focused}) => (
            <NavigationIcon
              theme={theme}
              focused={focused}
              label="Settings"
              icon="settings"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tools"
        children={() => <Home toggleTheme={toggleTheme} />}
        options={{
          tabBarIcon: ({focused}) => (
            <NavigationIcon
              theme={theme}
              focused={focused}
              label="Ideas"
              icon="bulb"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Construct"
        children={() => <Home toggleTheme={toggleTheme} />}
        options={{
          tabBarIcon: ({focused}) => (
            <NavigationIcon
              theme={theme}
              focused={focused}
              label="Tools"
              icon="construct"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default withTheme(TabNavigator);
