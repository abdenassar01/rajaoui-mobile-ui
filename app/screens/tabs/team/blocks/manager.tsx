import React from 'react';
import {
  AbsoluteFlag,
  FlexColumnWropper,
  Label,
  ManagerAvatar,
  ManagerSectionTab,
  ManagerSectionWrapper,
} from '../team.style';
import Title from '../../../../commun/title/title';
import CountryFlag from 'react-native-country-flag';
import {useQuery} from '@tanstack/react-query';
import {managerDetails} from '../../../../../resources';
import {Chase} from 'react-native-animated-spinkit';
import {ManagerType} from '../../../../../types/manager';
import {getRelativeTime} from '../../../../utils/helpers/date-converter';

type Props = {
  managerId: string;
};

const Manager = ({managerId}: Props) => {
  const {
    data: manager,
    isError,
    isLoading,
  } = useQuery<ManagerType>(['manager data'], () => managerDetails(managerId));

  return (
    <ManagerSectionWrapper>
      <Title text="Manager" />
      <ManagerSectionTab>
        {isError && <Label size="18px">error occured</Label>}
        {isLoading ? (
          <Chase />
        ) : (
          <>
            <ManagerAvatar
              source={{
                uri: `https://api.sofascore.app/api/v1/manager/${managerId}/image`,
              }}
            />
            <FlexColumnWropper>
              <Label size="18px">{manager?.name}</Label>
              <Label size="14px">{manager?.country.name}</Label>
              <Label size="14px">
                {getRelativeTime(manager?.dateOfBirthTimestamp || 0)}
              </Label>
            </FlexColumnWropper>
            <AbsoluteFlag>
              <CountryFlag
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  borderRadius: 10,
                }}
                isoCode={'MA'}
                size={30}
              />
            </AbsoluteFlag>
          </>
        )}
      </ManagerSectionTab>
    </ManagerSectionWrapper>
  );
};

export default Manager;
