import React from 'react';
import {CallToActionText, Container} from './home.style';
import Header from '../../commun/header/header';
import {Wrapper} from '../../commun/utils/utils';
import Hero from './blocks/hero';
import NextMatch from './blocks/next-match/next-match';

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <CallToActionText>Get your card</CallToActionText>
        <Hero />
        <NextMatch />
      </Container>
    </Wrapper>
  );
};

export default Home;
