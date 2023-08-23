import {Image, View} from 'react-native';
import {styled} from 'styled-components';
import {MainText} from '../../utils/text';

export const HeaderWrapper = styled(View)`
  padding: 10px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
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

export const Title = styled(MainText)`
  font-size: 22px;
  font-weight: 700;
  color: ${({theme}) => theme.primary};
`;
