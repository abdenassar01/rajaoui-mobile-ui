import {View} from 'react-native';
import {styled} from 'styled-components';

export const Wrapper = styled(View)`
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  background-color: ${({theme}) => theme.background};
  flex: 1;
`;
