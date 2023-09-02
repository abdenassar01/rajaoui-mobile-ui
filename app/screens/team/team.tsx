import React from 'react';
import {Wrapper} from '../../commun/utils/utils';
import {Container} from './team.style';
import TeamTab from './blocks/team-tab';
import TabsInfos from './blocks/tabs-infos';

const Team = () => {
  return (
    <Wrapper>
      <Container>
        <TeamTab />
        <TabsInfos />
      </Container>
    </Wrapper>
  );
};

export default Team;
