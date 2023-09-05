import Title from '../../../../commun/title/title';
import React from 'react';
import {useQuery} from '@tanstack/react-query';
import NextMatchLoader from './next-match-loader';
import {View, Text} from 'react-native';
import {Event} from '../../../../../types/events';
import SimpleMatchCard from '../../../../commun/simple-match-card/simple-match-card';
import {lastMatches} from '../../../../../resources';

const LastMatches = () => {
  const {data, isLoading, error} = useQuery<Event[]>(
    ['getting last matches'],
    lastMatches,
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
