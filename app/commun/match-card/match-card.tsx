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
  TournomentLogo,
  VersusText,
} from './match-card.style';
import {EventDetails} from '../../../types/eventDetails';
import {timstampToDate} from '../../utils/helpers/date-converter';

const MatchCard = ({match}: {match?: EventDetails}) => {
  const {date, time} = timstampToDate(match?.startTimestamp || 0);

  return (
    <MatchCardWrapper
      // eslint-disable-next-line react-native/no-inline-styles
      imageStyle={{borderRadius: 10}}
      source={require('../../../assets/images/next-match-background.png')}>
      <TournomentLogo
        source={{
          uri: `https://api.sofascore.com/api/v1/unique-tournament/${match?.tournament.uniqueTournament.id}/image`,
        }}
      />
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
