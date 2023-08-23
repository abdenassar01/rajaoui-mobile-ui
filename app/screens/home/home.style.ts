import {styled} from 'styled-components';
import {MainText} from '../../utils/text';
import {View} from 'react-native';

export const MyText = styled(MainText)`
  font-size: 32px;
  color: ${props => props.theme.text};
`;

export const Container = styled(View)`
  width: 90%;
  margin-top: 20px;
`;
