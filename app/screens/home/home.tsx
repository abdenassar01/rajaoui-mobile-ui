import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {withTheme} from 'styled-components';
import {ThemeType} from '../../utils/theme';
import {MyText} from './home.style';
import Header from '../../commun/header/header';

type Props = {
  toggleTheme: () => void;
  theme?: ThemeType;
};

const Home = ({toggleTheme, theme}: Props) => {
  return (
    <View>
      <Header />
      <TouchableOpacity onPress={toggleTheme}>
        <Text style={{color: theme?.text}}>toggle</Text>
      </TouchableOpacity>
      <MyText>Home screen</MyText>
      <View style={{height: 200, width: 200, backgroundColor: '#33A357'}} />
    </View>
  );
};

export default withTheme(Home);
