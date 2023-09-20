import React from 'react';
import {
  Avatar,
  FloatingHeaderWrapper,
  HeaderWrapper,
  LineSeparator,
  Logo,
  Title,
} from './header.style';
// image : https://i.imgur.com/mKZ1mN7.png
const Header = () => {
  return (
    <FloatingHeaderWrapper>
      <HeaderWrapper>
        <Logo source={require('../../../assets/images/logo.png')} />
        <Title>Raja Club Athletic</Title>
        <Avatar source={{uri: 'https://i.imgur.com/s8tPu7r.jpg'}} />
      </HeaderWrapper>
      <LineSeparator />
    </FloatingHeaderWrapper>
  );
};

export default Header;
