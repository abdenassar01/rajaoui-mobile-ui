import {Image, View} from 'react-native';
import {styled} from 'styled-components';
import {MainText} from '../../utils/text';

export const HeaderWrapper = styled(View)`
  margin: 5px;
  background-color: white;
  padding: 10px 20px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  elevation: 5;
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

export const Title = styled(MainText)`
  font-size: 20px;
  color: ${({theme}) => theme.primary};
`;
