import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {withTheme} from 'styled-components';
import {ThemeType} from '../../utils/theme';

type Props = {
  toggleTheme: any;
  theme?: ThemeType;
};

const Home = ({toggleTheme, theme}: Props) => {
  return (
    <View style={{backgroundColor: theme?.background}}>
      <TouchableOpacity onPress={toggleTheme}>
        <Text style={{color: theme?.text}}>toggle</Text>
      </TouchableOpacity>
      <Text>Home screen</Text>
      <View style={{height: 200, width: 200, backgroundColor: '#33A357'}} />
    </View>
  );
};

export default withTheme(Home);
