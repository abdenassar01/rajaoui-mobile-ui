import React from 'react';
import {
  Date,
  EventDetailsWrapper,
  FixtureTime,
  MatchCardWrapper,
  MatchTeams,
  OpenentsNamesHeading,
  Staduim,
  TeamLogo,
  Time,
  VersusText,
} from './match-card.style';
import {EventDetails} from '../../../types/eventDetails';
import {timstampToDate} from '../../utils/helpers/date-converter';

const MatchCard = ({match}: {match?: EventDetails}) => {
  const {date, time} = timstampToDate(
    match?.time?.currentPeriodStartTimestamp || 0,
  );

  return (
    <MatchCardWrapper
      // eslint-disable-next-line react-native/no-inline-styles
      imageStyle={{borderRadius: 10}}
      source={require('../../../assets/images/next-match-background.png')}>
      <EventDetailsWrapper>
        <TeamLogo
          source={{
            uri: `https://api.sofascore.com/api/v1/team/${match?.homeTeam.id}/image`,
          }}
        />
        <FixtureTime>
          <Date>{date} - </Date>
          <Time>{time}</Time>
        </FixtureTime>
        <TeamLogo
          source={{
            uri: `https://api.sofascore.com/api/v1/team/${match?.awayTeam.id}/image`,
          }}
        />
      </EventDetailsWrapper>
      <MatchTeams>
        <OpenentsNamesHeading>
          {match?.homeTeam.shortName}
          <VersusText> VS </VersusText>
          {match?.awayTeam.shortName}
        </OpenentsNamesHeading>
        <Staduim>{match?.venue?.stadium?.name}</Staduim>
      </MatchTeams>
    </MatchCardWrapper>
  );
};

export default MatchCard;
