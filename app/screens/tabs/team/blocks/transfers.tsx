import React from 'react';
import {Label, TabIcon, TabItem} from '../team.style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {withTheme} from 'styled-components';
import {ThemeType} from '../../../../utils/theme';
import {useQuery} from '@tanstack/react-query';
import {TransfersType} from '../../../../../types/transfers';
import {teamPlayersTransfers} from '../../../../../resources/team';

type Props = {
  theme: ThemeType;
};

const Transfers = ({theme}: Props) => {
  const {data: transfers, isLoading} = useQuery<TransfersType>(
    ['fetching transfers data'],
    teamPlayersTransfers,
  );

  return (
    <TabItem>
      <TabIcon>
        <Ionicons name="swap-horizontal" size={100} color={theme.primary} />
      </TabIcon>
      <Label size="18px" color={theme.primary}>
        Transfers
      </Label>
      <Label size="12px">
        {isLoading ? (
          'loading...'
        ) : (
          <>
            <Ionicons name="arrow-redo" size={12} color="green" />{' '}
            {transfers?.transfersIn.length} in &nbsp;&nbsp;
            <Ionicons name="arrow-undo" size={12} color="red" />{' '}
            {transfers?.transfersOut.length} out
          </>
        )}
      </Label>
    </TabItem>
  );
};

export default withTheme(Transfers);
