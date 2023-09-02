import React from 'react';
import {Label, TabIcon, TabItem} from '../team.style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {withTheme} from 'styled-components';
import {ThemeType} from '../../../utils/theme';

type Props = {
  theme: ThemeType;
};

const ForeignPlayers = ({theme}: Props) => {
  return (
    <TabItem>
      <TabIcon>
        <Ionicons name="pie-chart" size={100} color={theme.primary} />
      </TabIcon>
      <Label size="18px" color={theme.primary}>
        Foreign Players
      </Label>
    </TabItem>
  );
};

export default withTheme(ForeignPlayers);
