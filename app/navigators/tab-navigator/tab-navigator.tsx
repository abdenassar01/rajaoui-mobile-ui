/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/home/home';
import NavigationIcon from '../../utils/navigationIcon/NavigationIcon';
import {ThemeType} from '../../utils/theme';
import {withTheme} from 'styled-components';
import Settings from '../../screens/settings/settings';
import Team from '../../screens/team/team';

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
          paddingTop: 5,
        },
      }}>
      <Tab.Screen
        name="Home"
        children={() => <Home />}
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
        name="Team"
        children={() => <Team />}
        options={{
          tabBarIcon: ({focused}) => (
            <NavigationIcon
              theme={theme}
              focused={focused}
              label="Team"
              icon="football"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tools"
        children={() => <Home />}
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
        name="Settings"
        children={() => <Settings toggleTheme={toggleTheme} />}
        options={{
          tabBarIcon: ({focused}) => (
            <NavigationIcon
              theme={theme}
              focused={focused}
              label="Settings"
              icon="construct"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default withTheme(TabNavigator);
