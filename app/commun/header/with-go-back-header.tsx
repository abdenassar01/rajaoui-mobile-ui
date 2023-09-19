import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  GoBackIconWrapper,
  HeaderWrapper,
  LineSeparator,
  Logo,
  Title,
} from './header.style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ThemeType} from '../../utils/theme';
import {withTheme} from 'styled-components';

const WithGoBackHeader = ({theme}: {theme: ThemeType}) => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <>
      <HeaderWrapper>
        <GoBackIconWrapper onPress={() => navigation.goBack()}>
          <Ionicons
            color={theme.secondaryBackground}
            size={20}
            name="caret-back"
          />
        </GoBackIconWrapper>
        <Title size="20px">Raja CA Players</Title>
      </HeaderWrapper>
      <LineSeparator />
    </>
  );
};

export default withTheme(WithGoBackHeader);