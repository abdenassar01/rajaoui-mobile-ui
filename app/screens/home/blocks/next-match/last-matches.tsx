import Title from '../../../../commun/title/title';
import React from 'react';
import {useQuery} from '@tanstack/react-query';
import NextMatchLoader from './next-match-loader';
import axios from 'axios';
import {View, Text} from 'react-native';
import {Event} from '../../../../../types/events';
import SimpleMatchCard from '../../../../commun/simple-match-card/simple-match-card';

const LastMatches = () => {
  const {data, isLoading, error} = useQuery<Event[]>(
    ['getting last matches'],
    async () => {
      const res = await axios.get(
        'https://api.sofascore.com/api/v1/team/41757/events/last/0',
      );
      return res.data.events;
    },
  );

  if (error) {
    return <Text>Error</Text>;
  }

  return (
    <React.Fragment>
      <Title text="last matches" />
      {isLoading ? (
        <NextMatchLoader />
      ) : (
        <View>
          {data?.map(event => (
            <SimpleMatchCard key={event.id} event={event} />
          ))}
        </View>
      )}
    </React.Fragment>
  );
};

export default LastMatches;
