import {View, Text} from 'react-native';
import React from 'react';
import WithGoBackHeader from '../../../commun/header/with-go-back-header';
import {Wrapper} from '../../../commun/utils/utils';

const PlayersScreen = () => {
  return (
    <Wrapper>
      <WithGoBackHeader />
      <Text>Players</Text>
    </Wrapper>
  );
};

export default PlayersScreen;
