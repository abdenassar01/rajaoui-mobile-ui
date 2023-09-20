import React from 'react';
import {HeaderWrapper, Heading, LineSeparator} from './title.style';

type Props = {
  text: string;
};

const Title = ({text}: Props) => {
  return (
    <HeaderWrapper>
      <Heading>{text}</Heading>
      <LineSeparator />
    </HeaderWrapper>
  );
};

export default Title;
