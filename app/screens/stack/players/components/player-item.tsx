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
import {ThemeType} from '../../../../utils/theme';
import {withTheme} from 'styled-components';

type Props = {
  theme: ThemeType;
};

const PlayerItem = ({theme}: Props) => {
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
            <CountryFlag isoCode="MA" size={16} />
            <PlayerNationalityText>Morocco</PlayerNationalityText>
          </PlayerNationalityWrapper>
        </PlayerNameAndNationality>
      </PlayerInfos>
      <Ionicons color={theme.primary} name="arrow-forward-outline" size={24} />
    </PlayerItemWrapper>
  );
};

export default withTheme(PlayerItem);
