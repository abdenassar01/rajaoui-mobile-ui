import React, {useEffect} from 'react';
import CountryFlag from 'react-native-country-flag';
import {
  BackgroundLogo,
  FlexColumnWropper,
  Label,
  TeamInfoWrapper,
  TeamLogo,
  Left,
  Right,
  TeamTitle,
  TeamWrapper,
} from '../team.style';
import {useQuery} from '@tanstack/react-query';
import {teamDetails} from '../../../../../resources';
import Team from '../../../../../types/team';
import {timstampToDate} from '../../../../utils/helpers/date-converter';

type Props = {
  setManagerId: (id: string) => void;
};

const TeamTab = ({setManagerId}: Props) => {
  const {
    data: team,
    isLoading,
    error,
  } = useQuery<Team>(['getting team data'], teamDetails);

  if (isLoading) {
    return <Label>loading...</Label>;
  }
  if (error) {
    return <Label>error: </Label>;
  }

  setManagerId(team?.manager.id || '0');

  const {date, year} = timstampToDate(team?.foundationDateTimestamp || 0);
  const foundationdate = date + ' ' + year;

  return (
    <TeamInfoWrapper>
      <BackgroundLogo
        source={{
          uri: `https://api.sofascore.app/api/v1/team/${team?.id}/image`,
        }}
      />
      <Left>
        <TeamWrapper>
          <TeamLogo
            source={{
              uri: `https://api.sofascore.app/api/v1/team/${team?.id}/image`,
            }}
          />
          <FlexColumnWropper>
            <TeamTitle>{team?.name}</TeamTitle>
            <Label>{team?.country.name}</Label>
          </FlexColumnWropper>
        </TeamWrapper>
        <Label>Foundation date: {foundationdate}</Label>
      </Left>
      <Right>
        <CountryFlag
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            borderRadius: 10,
          }}
          isoCode={team?.country.alpha2 || 'MA'}
          size={30}
        />
      </Right>
    </TeamInfoWrapper>
  );
};

export default TeamTab;
