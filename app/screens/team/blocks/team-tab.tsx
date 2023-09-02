import React from 'react';
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

const TeamTab = () => {
  return (
    <TeamInfoWrapper>
      <BackgroundLogo
        source={{uri: 'https://api.sofascore.app/api/v1/team/41757/image'}}
      />
      <TeamTabLeft>
        <TeamWrapper>
          <TeamLogo
            source={{uri: 'https://api.sofascore.app/api/v1/team/41757/image'}}
          />
          <FlexColumnWropper>
            <TeamTitle>Raja Club Athletic</TeamTitle>
            <Label>Morocco</Label>
          </FlexColumnWropper>
        </TeamWrapper>
        <Label>Foundation Date: 20 Mar 1949</Label>
      </TeamTabLeft>
      <TeamTabRight />
    </TeamInfoWrapper>
  );
};

export default TeamTab;
