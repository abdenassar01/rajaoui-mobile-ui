import {ScrollView} from 'react-native-gesture-handler';
import {styled} from 'styled-components';

export const Wrapper = styled<any>(ScrollView)`
  width: 100%;
  background-color: ${({theme, background}) => background || theme.background};
  flex: 1;
  padding: 0 10px;
`;
