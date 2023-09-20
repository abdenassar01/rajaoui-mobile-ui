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
import {useTheme} from 'styled-components';
import {PlayerType} from '../../../../../types/player';

type Props = {
  player: PlayerType;
};

const PlayerItem = ({player}: Props) => {
  const theme = useTheme();

  return (
    <PlayerItemWrapper>
      <PlayerInfos>
        <PlayerJerseyNumber>{player.player.jerseyNumber}</PlayerJerseyNumber>
        <PlayerAvatar
          source={{
            uri:
              `https://api.sofascore.app/api/v1/player/${player.player.id}/image` ||
              'https://i.imgur.com/t2nEZeG.png',
          }}
        />
        <PlayerNameAndNationality>
          <PlayerName>{player.player.name}</PlayerName>
          <PlayerNationalityWrapper>
            <CountryFlag
              isoCode={player.player.country.alpha2 || 'MA'}
              size={16}
            />
            <PlayerNationalityText>
              {player.player.country.name}
            </PlayerNationalityText>
          </PlayerNationalityWrapper>
        </PlayerNameAndNationality>
      </PlayerInfos>
      <Ionicons color={theme.primary} name="arrow-forward-outline" size={24} />
    </PlayerItemWrapper>
  );
};

export default PlayerItem;
