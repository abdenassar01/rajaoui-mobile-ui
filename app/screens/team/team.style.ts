import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {styled} from 'styled-components';
import {MainText} from '../../utils/text';

export const Container = styled(ScrollView)`
  width: 95%;
  margin-top: 20px;
`;

export const TabsWrapper = styled(View)`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 8px;
`;

export const TabItem = styled(TouchableOpacity)`
  padding: 10px;
  background-color: ${({theme}) => theme.secondaryBackground};
  border-radius: 20px;
  width: 49%;
  height: 100%;
  aspect-ratio: 1/1;
  justify-content: center;
  align-items: center;
`;

export const TabIcon = styled(View)``;

export const TeamInfoWrapper = styled(View)`
  padding: 10px;
  background-color: ${({theme}) => theme.secondaryBackground};
  border-radius: 20px;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
`;

export const BackgroundLogo = styled(Image)`
  height: 150px;
  width: 150px;
  opacity: 0.2;

  position: absolute;
  bottom: -30px;
  right: -30px;
`;

export const TeamWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const TeamLogo = styled(Image)`
  height: 70px;
  width: 70px;
`;

export const TeamTitle = styled(MainText)`
  color: ${({theme}) => theme.primary};
  font-size: 20px;
`;

export const FlexColumnWropper = styled(View)``;

export const Label = styled<any>(MainText)`
  color: ${props => props.color || props.theme.text};
  font-size: ${props => props.size || '16px'};
`;

export const Left = styled(View)``;

export const Right = styled(View)``;

export const ManagerSectionWrapper = styled(View)`
  width: 100%;
  padding-bottom: 10px;
`;

export const ManagerSectionTab = styled(View)`
  padding: 10px;
  background-color: ${({theme}) => theme.secondaryBackground};
  border-radius: 20px;
  flex-direction: row;
  align-items: flex-end;
  gap: 10px;
  position: relative;
`;

export const ManagerAvatar = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

export const AbsoluteFlag = styled(View)`
  position: absolute;
  top: 10px;
  right: 10px;
`;
