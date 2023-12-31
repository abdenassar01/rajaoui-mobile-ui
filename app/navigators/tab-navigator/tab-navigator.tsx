/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NavigationIcon from '../../utils/navigationIcon/NavigationIcon';
import {ThemeType} from '../../utils/theme';
import {withTheme} from 'styled-components';
import Team from '../../screens/tabs/team/team';
import Home from '../../screens/tabs/home/home';
import Settings from '../../screens/tabs/settings/settings';

type Props = {
  theme: ThemeType;
};

const TabNavigator = ({theme}: Props) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.secondaryBackground,
          height: 60,
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
        name="Home_1"
        children={() => <Home />}
        options={{
          tabBarIcon: ({focused}) => (
            <NavigationIcon
              theme={theme}
              focused={focused}
              label="Test"
              icon="share"
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
        children={() => <Settings />}
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
