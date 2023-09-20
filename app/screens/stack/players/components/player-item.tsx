import React from 'react';
import {
  PlayerAvatar,
  PlayerInfos,
  PlayerItemWrapper,
  PlayerJerseyNumber,
  PlayerName,
  PlayerNameAndNationality,
  PlayerNationalityText,
  PlayerNationalityWrapper,
} from '../players.style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CountryFlag from 'react-native-country-flag';
const PlayerItem = () => {
  return (
    <PlayerItemWrapper>
      <PlayerInfos>
        <PlayerJerseyNumber>10</PlayerJerseyNumber>
        <PlayerAvatar
          source={{uri: 'https://api.sofascore.app/api/v1/player/100386/image'}}
        />
        <PlayerNameAndNationality>
          <PlayerName>Steven Berghuis</PlayerName>
          <PlayerNationalityWrapper>
            <CountryFlag isoCode="MA" size={20} />
            <PlayerNationalityText>Morocco</PlayerNationalityText>
          </PlayerNationalityWrapper>
        </PlayerNameAndNationality>
      </PlayerInfos>
      <Ionicons name="arrow-forward-outline" />
    </PlayerItemWrapper>
  );
};

export default PlayerItem;
