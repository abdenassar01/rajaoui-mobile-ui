import {Image, View} from 'react-native';
import {styled} from 'styled-components';
import {MainText} from '../text';

export const LoadingWrapper = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: ${({theme}) => theme.background};
`;

export const Logo = styled(Image)`
  height: 135px;
  width: 105px;
`;

export const LoaderText = styled(MainText)`
  font-size: 10px;
  color: ${({theme}) => theme.text};
`;
