import React from 'react';
import Card from './card';
import {HeroWrapper} from './hero.style';

const Hero = () => {
  return (
    <HeroWrapper horizontal>
      <Card />
      <Card />
    </HeroWrapper>
  );
};

export default Hero;
