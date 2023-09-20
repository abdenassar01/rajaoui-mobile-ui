import {styled} from 'styled-components';
import {ScrollView, View} from 'react-native';
import {MainText} from '../../../utils/text';

export const Container = styled(ScrollView)`
  width: 100%;
  margin-top: 20px;
`;

export const Spacer = styled(View)`
  height: 70px;
`;

export const CallToActionText = styled(MainText)`
  font-size: 20px;
  margin-left: 7px;
  color: ${({theme}) => theme.text};
`;
