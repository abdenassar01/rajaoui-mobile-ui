import {Image, View} from 'react-native';
import {styled} from 'styled-components';
import {MainText} from '../../utils/text';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const FloatingHeaderWrapper = styled<any>(View)`
  width: 100%;
  margin: 5px;
  background-color: ${({theme}) => theme.secondaryBackground};
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  elevation: 10;
`;

export const HeaderWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const LineSeparator = styled(View)`
  height: 2px;
  width: 80%;
  background-color: ${({theme}) => theme.primary};
`;

export const Logo = styled(Image)`
  width: 35px;
  height: 45px;
`;

export const Avatar = styled(Image)`
  width: 45px;
  height: 45px;
  border-radius: 50px;
`;

export const Title = styled<any>(MainText)`
  font-size: ${({size}) => size || '25px'};
  color: ${({theme}) => theme.primary};
`;

export const GoBackIconWrapper = styled(TouchableOpacity)`
  /* background-color: ${({theme}) => theme.primary};
  padding: 10px; */
  border-radius: 5px;
`;
