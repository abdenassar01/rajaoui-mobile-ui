import {View} from 'react-native';
import styled from 'styled-components';
import {MainText} from '../../text';

export const IconWrapper = styled(View)`
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 50px;
  width: 50px;
  height: 50px;
`;

export const Label = styled(MainText)`
  font-size: 12px;
`;
