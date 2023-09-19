import React from 'react';
import WithGoBackHeader from '../../../commun/header/with-go-back-header';
import {Wrapper} from '../../../commun/utils/utils';
import PlayerList from './components/players-list';

const PlayersScreen = () => {
  return (
    <Wrapper>
      <WithGoBackHeader />
      <PlayerList />
    </Wrapper>
  );
};

export default PlayersScreen;
