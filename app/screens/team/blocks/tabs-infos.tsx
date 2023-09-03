import React from 'react';
import {TabsWrapper} from '../team.style';
import Trophies from './trophies';
import Players from './players';
import ForeignPlayets from './foreign-playets';
import Transfers from './transfers';
import Manager from './manager';

const TabsInfos = () => {
  return (
    <TabsWrapper>
      <Trophies />
      <Players />
      <ForeignPlayets />
      <Transfers />
      <Manager />
    </TabsWrapper>
  );
};

export default TabsInfos;
