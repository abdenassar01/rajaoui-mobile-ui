import {View, Text} from 'react-native';
import React from 'react';
import PlayerItem from './player-item';
import {PlayerListWrapper} from '../players.style';

const PlayerList = () => {
  return (
    <PlayerListWrapper>
      <PlayerItem />
      <PlayerItem />
      <PlayerItem />
      <PlayerItem />
    </PlayerListWrapper>
  );
};

export default PlayerList;
