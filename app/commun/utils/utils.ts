import {View} from 'react-native';
import {styled} from 'styled-components';

export const Wrapper = styled<any>(View)`
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  background-color: ${({theme, background}) => background || theme.background};
  flex: 1;
`;
