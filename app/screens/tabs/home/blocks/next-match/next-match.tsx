import React from 'react';
import {useQuery} from '@tanstack/react-query';
import NextMatchLoader from './next-match-loader';
import {nextMatch} from '../../../../../../resources';
import {EventDetails} from '../../../../../../types/eventDetails';
import Title from '../../../../../commun/title/title';
import MatchCard from '../../../../../commun/match-card/match-card';

const NextMatch = () => {
  const {data, isLoading, error} = useQuery<EventDetails>(
    ['getting next match'],
    nextMatch,
  );

  if (error) {
    return null;
  }

  return (
    <React.Fragment>
      <Title text="next match" />
      {isLoading ? <NextMatchLoader /> : <MatchCard match={data} />}
    </React.Fragment>
  );
};

export default NextMatch;
