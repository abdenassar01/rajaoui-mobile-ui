import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Avatar,
  CardWrapper,
  CardWrapperLink,
  DateCmp,
  FinishedMatchStatus,
  FixtureTime,
  Name,
  NameFlipped,
  Score,
  Status,
  Team,
  Time,
} from './simple-match-card.style';
import {Event} from '../../../types/events';
import {timstampToDate} from '../../utils/helpers/date-converter';

type Props = {
  event: Event;
};

export default function SimpleMatchCard({event}: Props) {
  const navigation: any = useNavigation();
  const {date, time} = timstampToDate(event?.startTimestamp);

  return (
    <CardWrapperLink
      onPress={() => navigation.navigate('EvantDetails', {id: event?.id})}
      activeOpacity={0.99}>
      <CardWrapper>
        <Team>
          <Name>{event?.homeTeam?.shortName}</Name>
          <Avatar
            source={{
              uri: `https://api.sofascore.app/api/v1/team/${event?.homeTeam?.id}/image`,
            }}
          />
        </Team>
        {event?.status.description !== 'Not started' ? (
          <FinishedMatchStatus>
            <Score>
              {event?.homeScore.current} : {event?.awayScore.current}
            </Score>
            <Status>{event?.status.description}</Status>
          </FinishedMatchStatus>
        ) : (
          <FixtureTime>
            <Time>{time}</Time>
            <DateCmp>{date}</DateCmp>
          </FixtureTime>
        )}
        <Team>
          <Avatar
            source={{
              uri: `https://api.sofascore.app/api/v1/team/${event?.awayTeam?.id}/image`,
            }}
          />
          <NameFlipped>{event?.awayTeam?.shortName}</NameFlipped>
        </Team>
      </CardWrapper>
    </CardWrapperLink>
  );
}
