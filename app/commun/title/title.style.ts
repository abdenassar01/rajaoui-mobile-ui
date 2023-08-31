import {View} from 'react-native';
import {styled} from 'styled-components';
import {MainText} from '../../utils/text';

export const HeaderWrapper = styled(View)`
  align-items: center;
  width: 90%;
  padding: 10px 0;
`;

export const LineSeparator = styled(View)`
  height: 2px;
  width: 80%;
  background-color: ${({theme}) => theme.primary};
`;

export const Heading = styled(MainText)`
  font-size: 20px;
  color: ${({theme}) => theme.primary};
`;
