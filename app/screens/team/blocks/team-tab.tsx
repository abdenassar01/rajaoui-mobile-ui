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
      <TeamTabRight>
        <CountryFlag
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            borderRadius: 3,
          }}
          isoCode="MA"
          size={30}
        />
      </TeamTabRight>
    </TeamInfoWrapper>
  );
};

export default TeamTab;
