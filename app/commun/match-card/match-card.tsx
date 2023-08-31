import React from 'react';
import {
  Date,
  EventDetails,
  FixtureTime,
  MatchCardWrapper,
  MatchTeams,
  OpenentsNamesHeading,
  Staduim,
  TeamLogo,
  Time,
  VersusText,
} from './match-card.style';

const MatchCard = () => {
  return (
    <MatchCardWrapper
      // eslint-disable-next-line react-native/no-inline-styles
      imageStyle={{borderRadius: 10}}
      source={require('../../../assets/images/next-match-background.png')}>
      <EventDetails>
        <TeamLogo
          source={{uri: 'https://api.sofascore.com/api/v1/team/41757/image'}}
        />
        <FixtureTime>
          <Date>12 Fev - </Date>
          <Time>12:00</Time>
        </FixtureTime>
        <TeamLogo
          source={{uri: 'https://api.sofascore.com/api/v1/team/41757/image'}}
        />
      </EventDetails>
      <MatchTeams>
        <OpenentsNamesHeading>
          Raja CA
          <VersusText> VS </VersusText>AS FAR
        </OpenentsNamesHeading>
        <Staduim>Complexe Mohamed V</Staduim>
      </MatchTeams>
    </MatchCardWrapper>
  );
};

export default MatchCard;
