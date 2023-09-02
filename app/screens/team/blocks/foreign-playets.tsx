import React from 'react';
import {Label, TabIcon, TabItem} from '../team.style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {withTheme} from 'styled-components';
import {ThemeType} from '../../../utils/theme';
import {teamForeignPlayers} from '../../../../resources';
import {useQuery} from '@tanstack/react-query';
import {PlayerType} from '../../../../types/player';

type Props = {
  theme: ThemeType;
};

const ForeignPlayers = ({theme}: Props) => {
  const {data: foreignPlayers, isLoading} = useQuery<PlayerType[]>(
    ['fetching team foreign players'],
    teamForeignPlayers,
  );

  console.log(foreignPlayers);

  return (
    <TabItem>
      <TabIcon>
        <Ionicons name="pie-chart" size={100} color={theme.primary} />
      </TabIcon>
      <Label size="18px" color={theme.primary}>
        {isLoading ? (
          <Ionicons name="reload" size={14} color={theme.primary} />
        ) : (
          foreignPlayers?.length
        )}{' '}
        Foreign Players
      </Label>
    </TabItem>
  );
};

export default withTheme(ForeignPlayers);
