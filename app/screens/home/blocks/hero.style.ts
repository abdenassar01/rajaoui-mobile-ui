import {Image, ImageBackground, ScrollView, View} from 'react-native';
import {styled} from 'styled-components';
import {MainText} from '../../../utils/text';

export const HeroWrapper = styled(ScrollView)``;
export const CardWrapper = styled(ImageBackground)`
  width: 350px;
  height: 220px;
  padding: 10px;
  border-radius: 10px;
  margin-right: 20px;
`;
export const ProfileSection = styled(View)``;
export const TopSection = styled(View)`
  padding: 5px;
`;
export const BottomSection = styled(View)``;
export const NameSection = styled(View)``;
export const EagleImage = styled(Image)``;
export const UserAvatar = styled(Image)`
  height: 70px;
  width: 70px;
  border-radius: 5px;
`;
export const NameHeading = styled(MainText)`
  color: white;
`;

export const Label = styled(MainText)`
  font-weight: bold;
`;
export const MainTextHeading = styled(MainText)``;
export const HelperText = styled(MainText)``;
