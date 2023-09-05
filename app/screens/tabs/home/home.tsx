import React from 'react';
import {CallToActionText, Container, Spacer} from './home.style';
import Header from '../../../commun/header/header';
import {Wrapper} from '../../../commun/utils/utils';
import Hero from './blocks/hero';
import NextMatch from './blocks/next-match/next-match';
import LastMatches from './blocks/next-match/last-matches';

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <CallToActionText>Get your card</CallToActionText>
        <Hero />
        <NextMatch />
        <LastMatches />
        <Spacer />
      </Container>
    </Wrapper>
  );
};

export default Home;
