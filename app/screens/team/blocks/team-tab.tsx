import React from 'react';
import CountryFlag from 'react-native-country-flag';
import {
  BackgroundLogo,
  FlexColumnWropper,
  Label,
  TeamInfoWrapper,
  TeamLogo,
  TeamTabLeft,
  TeamTabRight,
  TeamTitle,
  TeamWrapper,
} from '../team.style';
import {useQuery} from '@tanstack/react-query';
import {teamDetails} from '../../../../resources';
import Team from '../../../../types/team';
import {timstampToDate} from '../../../utils/helpers/date-converter';

const TeamTab = () => {
  const {
    data: team,
    isLoading,
    isError,
  } = useQuery<Team>(['getting team data'], teamDetails);

  if (isLoading) {
    return <Label>loading...</Label>;
  }
  if (isError) {
    return <Label>error occured</Label>;
  }

  return (
    <TeamInfoWrapper>
      <BackgroundLogo
        source={{uri: `https://api.sofascore.app/api/v1/team/${team.id}/image`}}
      />
      <TeamTabLeft>
        <TeamWrapper>
          <TeamLogo
            source={{
              uri: `https://api.sofascore.app/api/v1/team/${team.id}/image`,
            }}
          />
          <FlexColumnWropper>
            <TeamTitle>{team.name}</TeamTitle>
            <Label>{team.country.name}</Label>
          </FlexColumnWropper>
        </TeamWrapper>
        <Label>
          Foundation Date: {timstampToDate(team.foundationDateTimestamp)}
        </Label>
      </TeamTabLeft>
      <TeamTabRight>
        <CountryFlag
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            borderRadius: 3,
          }}
          isoCode={team.country.alpha2}
          size={30}
        />
      </TeamTabRight>
    </TeamInfoWrapper>
  );
};

export default TeamTab;
