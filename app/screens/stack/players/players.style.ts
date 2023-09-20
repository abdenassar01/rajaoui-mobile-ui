import {Image, TouchableOpacity, View} from 'react-native';
import {styled} from 'styled-components';
import {MainText} from '../../../utils/text';

export const PlayerListWrapper = styled(View)`
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
  width: 60px;
  height: 60px;
`;

export const PlayerInfos = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;

export const Heading = styled(MainText)`
  font-size: 22px;
  color: ${({theme}) => theme.primary};
  padding: 10px;
`;

export const PlayerName = styled(MainText)`
  font-size: 16px;
  color: ${({theme}) => theme.text};
`;

export const PlayerJerseyNumber = styled(MainText)`
  font-size: 24px;
  color: ${({theme}) => theme.primary};
  width: 30px;
`;

export const PlayerNameAndNationality = styled(View)``;

export const PlayerNationalityWrapper = styled(View)`
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;

export const PlayerNationalityText = styled(MainText)`
  font-size: 12px;
  color: ${({theme}) => theme.text};
`;
