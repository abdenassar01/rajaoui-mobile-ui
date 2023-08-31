import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {withTheme} from 'styled-components';
import {ThemeType} from '../../utils/theme';
import Header from '../../commun/header/header';
import {Wrapper} from '../../commun/utils/utils';

type Props = {
  toggleTheme: () => void;
  theme?: ThemeType;
};

const Settings = ({toggleTheme, theme}: Props) => {
  return (
    <Wrapper>
      <Header />
      <TouchableOpacity onPress={toggleTheme}>
        <Text style={{color: theme?.text}}>toggle</Text>
      </TouchableOpacity>
    </Wrapper>
  );
};

export default withTheme(Settings);
