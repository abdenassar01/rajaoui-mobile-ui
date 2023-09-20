import {Image, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styled} from 'styled-components';
import {MainText} from '../../../utils/text';

export const PlayerListWrapper = styled(ScrollView)`
  width: 100%;
  margin-top: 20px;
`;

export const PlayerItemWrapper = styled(TouchableOpacity)`
  width: 100%;
  padding: 0 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme}) => theme.secondaryBackground};
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.primary};
`;

export const PlayerAvatar = styled(Image)`
  width: 50px;
  height: 50px;
`;

export const PlayerInfos = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;

export const PlayerName = styled(MainText)``;

export const PlayerJerseyNumber = styled(MainText)``;

export const PlayerNameAndNationality = styled(View)``;

export const PlayerNationalityWrapper = styled(View)``;

export const PlayerNationalityText = styled(MainText)``;

export const PlayerNationalityFlag = styled(View)``;
