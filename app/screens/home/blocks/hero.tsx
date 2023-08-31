import React from 'react';
import Card from './card';
import {HeroWrapper} from './home-blocks.style';

const Hero = () => {
  const cards = [
    {
      id: 1,
      cover: 'https://i.imgur.com/MyTaWDO.jpg',
      profile: 'https://i.imgur.com/s8tPu7r.jpg',
      firstName: 'ABDENASSAR',
      lastName: 'AMIMI',
      userId: '4872-1949',
      type: 'rajawe',
    },
    {
      id: 2,
      cover: 'https://i.imgur.com/5lmSA5V.jpg',
      // cover: '../../../../assets/images/cards/subscription.png',
      profile: 'https://i.imgur.com/s8tPu7r.jpg',
      firstName: 'ABDENASSAR',
      lastName: 'AMIMI',
      userId: '4872-1949',
      type: 'subsciption',
    },
  ];

  return (
    <HeroWrapper horizontal>
      {cards.map(card => (
        <Card
          key={card.id}
          cover={card.cover}
          firstName={card.firstName}
          lastName={card.lastName}
          profile={card.profile}
          userId={card.userId}
        />
      ))}
    </HeroWrapper>
  );
};

export default Hero;
