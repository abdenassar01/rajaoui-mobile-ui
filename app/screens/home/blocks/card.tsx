import React from 'react';
import {
  BottomSection,
  CardWrapper,
  Label,
  NameHeading,
  NameSection,
  ProfileSection,
  TopSection,
  UserAvatar,
} from './hero.style';
import {StyleSheet} from 'react-native';

const Card = () => {
  return (
    <CardWrapper
      imageStyle={styles.image}
      blurRadius={5}
      resizeMode="cover"
      source={require('../../../../assets/images/card-background.jpg')}>
      <TopSection>
        <ProfileSection>
          <UserAvatar source={{uri: 'https://i.imgur.com/s8tPu7r.jpg'}} />
          <NameSection>
            <NameHeading>
              <Label>Nom:</Label> AMIMI
            </NameHeading>
            <NameHeading>
              <Label>Prenom:</Label> ABDENASSAR
            </NameHeading>
            <NameHeading>
              <Label>Id:</Label> 2022 1949
            </NameHeading>
          </NameSection>
        </ProfileSection>
      </TopSection>
      <BottomSection />
    </CardWrapper>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
  },
});

export default Card;
