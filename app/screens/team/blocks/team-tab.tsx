import React from 'react';
import {
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
      <TeamTabLeft>
        <TeamWrapper>
          <TeamLogo
            source={{uri: 'https://api.sofascore.app/api/v1/team/41757/image'}}
          />
          <TeamTitle />
        </TeamWrapper>
        <Label>Foundation Date: 20 Mar 1949</Label>
      </TeamTabLeft>
      <TeamTabRight />
    </TeamInfoWrapper>
  );
};

export default TeamTab;
