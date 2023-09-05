import React from 'react';
import {Label, TabIcon, TabItem} from '../team.style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {withTheme} from 'styled-components';
import {ThemeType} from '../../../../utils/theme';
import {useQuery} from '@tanstack/react-query';
import {teamPlayers} from '../../../../../resources';
import {PlayerType} from '../../../../../types/player';

type Props = {
  theme: ThemeType;
};

const Players = ({theme}: Props) => {
  const {data: players, isLoading} = useQuery<PlayerType[]>(
    ['fetching team players'],
    teamPlayers,
  );

  return (
    <TabItem>
      <TabIcon>
        <Ionicons name="people" size={100} color={theme.primary} />
      </TabIcon>
      <Label size="18px" color={theme.primary}>
        {isLoading ? (
          <Ionicons name="reload-outline" size={14} color={theme.primary} />
        ) : (
          players?.length
        )}{' '}
        Players
      </Label>
    </TabItem>
  );
};

export default withTheme(Players);
