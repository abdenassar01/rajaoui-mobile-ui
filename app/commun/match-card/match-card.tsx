import React from 'react';
import {MatchCardWrapper} from './match-card.style';

const MatchCard = () => {
  return (
    <MatchCardWrapper
      // eslint-disable-next-line react-native/no-inline-styles
      imageStyle={{borderRadius: 10}}
      source={require('../../../assets/images/next-match-background.png')}>
      {/* hello world */}
    </MatchCardWrapper>
  );
};

export default MatchCard;
