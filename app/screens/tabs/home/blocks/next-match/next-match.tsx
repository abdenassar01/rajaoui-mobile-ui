import MatchCard from '../../../../commun/match-card/match-card';
import Title from '../../../../commun/title/title';
import React from 'react';
import {useQuery} from '@tanstack/react-query';
import NextMatchLoader from './next-match-loader';
import {EventDetails} from '../../../../../types/eventDetails';
import {Text} from 'react-native';
import {nextMatch} from '../../../../../resources';

const NextMatch = () => {
  const {data, isLoading, error} = useQuery<EventDetails>(
    ['getting next match'],
    nextMatch,
  );

  if (error) {
    return <Text>Error</Text>;
  }

  return (
    <React.Fragment>
      <Title text="next match" />
      {isLoading ? <NextMatchLoader /> : <MatchCard match={data} />}
    </React.Fragment>
  );
};

export default NextMatch;
