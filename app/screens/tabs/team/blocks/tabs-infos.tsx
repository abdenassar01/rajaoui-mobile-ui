import React from 'react';
import {TabsWrapper} from '../team.style';
import Trophies from './trophies';
import Players from './players';
import ForeignPlayets from './foreign-playets';
import Transfers from './transfers';

const TabsInfos = () => {
  return (
    <TabsWrapper>
      <Trophies />
      <Players />
      <ForeignPlayets />
      <Transfers />
    </TabsWrapper>
  );
};

export default TabsInfos;
