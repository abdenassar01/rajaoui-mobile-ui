import React from 'react';
import {Wrapper} from '../../commun/utils/utils';
import {Container} from './team.style';
import TeamTab from './blocks/team-tab';
import TabsInfos from './blocks/tabs-infos';
import Manager from './blocks/manager';

const Team = () => {
  return (
    <Wrapper>
      <Container>
        <TeamTab />
        <TabsInfos />
        <Manager managerId={791192} />
      </Container>
    </Wrapper>
  );
};

export default Team;
