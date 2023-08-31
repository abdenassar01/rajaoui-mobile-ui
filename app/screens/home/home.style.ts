import {styled} from 'styled-components';
import {View} from 'react-native';
import {MainText} from '../../utils/text';

export const Container = styled(View)`
  width: 90%;
  margin-top: 20px;
`;

export const CallToActionText = styled(MainText)`
  font-size: 20px;
  margin-left: 7px;
  color: ${({theme}) => theme.text};
`;
