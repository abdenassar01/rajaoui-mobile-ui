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

type Props = {
  cover: string;
  profile: string;
  firstName: string;
  lastName: string;
  userId: string;
  type?: string;
};

const Card = ({profile, firstName, lastName, userId, cover}: Props) => {
  return (
    <CardWrapper
      imageStyle={styles.image}
      resizeMode="cover"
      source={{uri: cover}}>
      <TopSection>
        <ProfileSection>
          <UserAvatar source={{uri: profile}} />
          <NameSection>
            <NameHeading>
              <Label>Nom:</Label> {lastName}
            </NameHeading>
            <NameHeading>
              <Label>Prenom:</Label> {firstName}
            </NameHeading>
            <NameHeading>
              <Label>Id:</Label> {userId}
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
