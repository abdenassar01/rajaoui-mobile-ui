import React from 'react';
import {Label, TabIcon, TabItem} from '../team.style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {withTheme} from 'styled-components';
import {ThemeType} from '../../../../utils/theme';

type Props = {
  theme: ThemeType;
};

const Trophies = ({theme}: Props) => {
  return (
    <TabItem>
      <TabIcon>
        <Ionicons name="trophy" size={100} color={theme.primary} />
      </TabIcon>
      <Label size="18px" color={theme.primary}>
        Trophies
      </Label>
    </TabItem>
  );
};

export default withTheme(Trophies);
