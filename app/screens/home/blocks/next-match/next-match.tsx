import MatchCard from '../../../../commun/match-card/match-card';
import Title from '../../../../commun/title/title';
import React from 'react';
import {useQuery} from '@tanstack/react-query';
import NextMatchLoader from './next-match-loader';
import axios from 'axios';
import {EventDetails} from '../../../../../types/eventDetails';
import {Text} from 'react-native';

const NextMatch = () => {
  const {data, isLoading, error} = useQuery<EventDetails>(
    ['getting next match'],
    async () => {
      const res = await axios.get(
        'https://api.sofascore.com/api/v1/team/41757/events/next/0',
      );
      return res.data.events[0];
    },
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
