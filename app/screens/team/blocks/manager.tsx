import React from 'react';
import {
  AbsoluteFlag,
  FlexColumnWropper,
  Label,
  ManagerAvatar,
  ManagerSectionTab,
  ManagerSectionWrapper,
} from '../team.style';
import Title from '../../../commun/title/title';
import CountryFlag from 'react-native-country-flag';

const Manager = () => {
  return (
    <ManagerSectionWrapper>
      <Title text="Manager" />
      <ManagerSectionTab>
        <ManagerAvatar
          source={{
            uri: 'https://api.sofascore.app/api/v1/manager/791192/image',
          }}
        />
        <FlexColumnWropper>
          <Label size="18px">Jozef Zinbaour</Label>
          <Label size="14px">Germany</Label>
          <Label size="14px">52 year</Label>
        </FlexColumnWropper>
        <AbsoluteFlag>
          <CountryFlag
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              borderRadius: 3,
            }}
            isoCode={'MA'}
            size={30}
          />
        </AbsoluteFlag>
      </ManagerSectionTab>
    </ManagerSectionWrapper>
  );
};

export default Manager;
