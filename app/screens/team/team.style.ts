import {Image, ScrollView, View} from 'react-native';
import {styled} from 'styled-components';
import {MainText} from '../../utils/text';

export const Container = styled(ScrollView)`
  width: 90%;
  margin-top: 20px;
`;

export const TabsWrapper = styled(View)``;

export const TabItem = styled(View)``;

export const TabIcon = styled(Image)``;

export const TabText = styled(MainText)`
  color: ${({theme}) => theme.text};
`;

export const TeamInfoWrapper = styled(View)``;

export const TeamWrapper = styled(View)``;

export const TeamLogo = styled(Image)``;

export const TeamTitle = styled(MainText)``;

export const Label = styled(MainText)``;

export const TeamTabLeft = styled(View)``;

export const TeamTabRight = styled(View)``;
