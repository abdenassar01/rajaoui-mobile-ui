import React from 'react';
import {Wrapper} from '../../commun/utils/utils';
import {Container, TabText} from './team.style';
import TeamTab from './blocks/team-tab';

const Team = () => {
  return (
    <Wrapper>
      <Container>
        <TeamTab />
        <TabText>Hellloooooow</TabText>
      </Container>
    </Wrapper>
  );
};

export default Team;
