import {Image, ImageBackground, View} from 'react-native';
import {styled} from 'styled-components';
import {MainText} from '../../utils/text';

export const MatchCardWrapper = styled(ImageBackground)`
  height: auto;
  aspect-ratio: 16/9;
  width: 100%;
  border-radius: 20px;
  position: relative;
`;

export const EventDetailsWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  max-width: 35%;

  position: absolute;
  left: 20%;
  bottom: 9%;
`;

export const TournomentLogo = styled(Image)`
  width: 200px;
  height: 200px;
  opacity: 0.3;

  position: absolute;
  left: -50px;
  bottom: -5%;
`;

export const TeamLogo = styled(Image)`
  width: 35px;
  height: auto;
  aspect-ratio: 1/1;
`;

export const FixtureTime = styled(View)`
  flex-direction: row;
  align-items: center;
  width: 160px;
  justify-content: center;
  border-radius: 20px;
  background-color: ${({theme}) => theme.background};
`;

export const Time = styled(MainText)`
  font-size: 12px;
  color: ${({theme}) => theme.text};
`;

export const Date = styled(MainText)`
  font-size: 14px;
  color: ${({theme}) => theme.text};
`;

export const MatchTeams = styled(View)`
  position: absolute;
  left: 12px;
  top: 30%;
`;

export const OpenentsNamesHeading = styled(MainText)`
  color: white;
  font-size: 16px;
`;

export const VersusText = styled(MainText)`
  color: yellow;
`;

export const Staduim = styled(MainText)`
  color: white;
  font-size: 10px;
`;
