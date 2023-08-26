import React from 'react';
import {
  BottomSection,
  CardWrapper,
  CenterSection,
  HeroWrapper,
  NameHeading,
  ProfileSection,
  TopSection,
  UserAvatar,
} from './hero.style';

const Hero = () => {
  return (
    <HeroWrapper horizontal>
      <CardWrapper source={{uri: 'https://i.imgur.com/mKZ1mN7.png'}}>
        <TopSection>
          <ProfileSection>
            <UserAvatar source={{uri: 'https://i.imgur.com/s8tPu7r.jpg'}} />
            <NameHeading>AbdeNassar Amimi</NameHeading>
          </ProfileSection>
        </TopSection>
        <CenterSection />
        <BottomSection />
      </CardWrapper>
    </HeroWrapper>
  );
};

export default Hero;
