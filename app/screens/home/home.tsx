import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {withTheme} from 'styled-components';
import {ThemeType} from '../../utils/theme';
import {Container} from './home.style';
import Header from '../../commun/header/header';
import {Wrapper} from '../../commun/utils/utils';
import Hero from './blocks/hero';

type Props = {
  toggleTheme: () => void;
  theme?: ThemeType;
};

const Home = ({toggleTheme, theme}: Props) => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <TouchableOpacity onPress={toggleTheme}>
          <Text style={{color: theme?.text}}>toggle</Text>
        </TouchableOpacity>
        <Hero />
      </Container>
    </Wrapper>
  );
};

export default withTheme(Home);
