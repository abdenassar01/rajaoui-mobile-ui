import React from 'react';
import WithGoBackHeader from '../../../commun/header/with-go-back-header';
import {Wrapper} from '../../../commun/utils/utils';
import PlayerList from './components/players-list';
import {withTheme} from 'styled-components';
import {ThemeType} from '../../../utils/theme';

type Props = {
  theme: ThemeType;
};

const PlayersScreen = ({theme}: Props) => {
  return (
    <Wrapper background={theme.secondaryBackground}>
      <WithGoBackHeader />
      <PlayerList />
    </Wrapper>
  );
};

export default withTheme(PlayersScreen);
