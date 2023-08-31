import React from 'react';
import {LoaderText, LoadingWrapper, Logo} from './loading.style';
import {Flow} from 'react-native-animated-spinkit';
import {withTheme} from 'styled-components';
import {ThemeType} from '../theme';

type Props = {
  size?: number;
  theme: ThemeType;
};

const Loading = ({size = 50, theme}: Props) => {
  return (
    <LoadingWrapper>
      <Logo source={require('../../../assets/images/logo.png')} />
      <Flow color={theme.primary} size={size} />
      <LoaderText>Please wait. We are getting it ready for you.</LoaderText>
    </LoadingWrapper>
  );
};

export default withTheme(Loading);
