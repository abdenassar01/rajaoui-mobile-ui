import React from 'react';
import {Chase} from 'react-native-animated-spinkit';
import {withTheme} from 'styled-components';
import {ThemeType} from '../../../../utils/theme';
import {Wrapper} from './next-match.styles';

type Props = {
  theme: ThemeType;
};

const NextMatchLoader = ({theme}: Props) => {
  return (
    <Wrapper>
      <Chase color={theme.primary} />
    </Wrapper>
  );
};

export default withTheme(NextMatchLoader);
