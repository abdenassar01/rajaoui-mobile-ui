import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {withTheme} from 'styled-components';
import {ThemeType} from '../../utils/theme';
import {MyText} from './home.style';
import Header from '../../commun/header/header';
import {Wrapper} from '../../commun/utils/utils';

type Props = {
  toggleTheme: () => void;
  theme?: ThemeType;
};

const Home = ({toggleTheme, theme}: Props) => {
  return (
    <Wrapper>
      <Header />
      <TouchableOpacity onPress={toggleTheme}>
        <Text style={{color: theme?.text}}>toggle</Text>
      </TouchableOpacity>
      <MyText>Home screen</MyText>
      <View style={{height: 200, width: 200, backgroundColor: '#33A357'}} />
    </Wrapper>
  );
};

export default withTheme(Home);
