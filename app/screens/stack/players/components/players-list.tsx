import {View, Text} from 'react-native';
import React from 'react';
import PlayerItem from './player-item';
import {Heading, PlayerListWrapper, PlayerName} from '../players.style';
import {useQuery} from '@tanstack/react-query';
import {PlayerType} from '../../../../../types/player';
import {teamPlayers} from '../../../../../resources';
import Loading from '../../../../utils/loading/loading';

const PlayerList = () => {
  const {
    data: players,
    isError,
    isLoading,
  } = useQuery<PlayerType[]>(['getting team players'], teamPlayers);

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <PlayerListWrapper>
        <PlayerName>network error</PlayerName>
      </PlayerListWrapper>
    );

  return (
    <PlayerListWrapper>
      <Heading>GoalKeepers</Heading>
      {players?.map(
        player =>
          player.player.position === 'G' && (
            <PlayerItem key={player.player.id} player={player} />
          ),
      )}
      <Heading>Defenders</Heading>
      {players?.map(
        player =>
          player.player.position === 'D' && (
            <PlayerItem key={player.player.id} player={player} />
          ),
      )}
      <Heading>Midfielders</Heading>
      {players?.map(
        player =>
          player.player.position === 'M' && (
            <PlayerItem key={player.player.id} player={player} />
          ),
      )}
      <Heading>Forwards</Heading>
      {players?.map(
        player =>
          player.player.position === 'F' && (
            <PlayerItem key={player.player.id} player={player} />
          ),
      )}
    </PlayerListWrapper>
  );
};

export default PlayerList;
