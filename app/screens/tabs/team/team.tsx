import React, {useState} from 'react';
import {Wrapper} from '../../../commun/utils/utils';
import {Container} from './team.style';
import TeamTab from './blocks/team-tab';
import TabsInfos from './blocks/tabs-infos';
import Manager from './blocks/manager';

const Team = () => {
  const [managerId, setManagerId] = useState<string | undefined>(undefined);

  return (
    <Wrapper>
      <Container>
        <TeamTab setManagerId={setManagerId} />
        <TabsInfos />
        {managerId && <Manager managerId={managerId} />}
      </Container>
    </Wrapper>
  );
};

export default Team;
