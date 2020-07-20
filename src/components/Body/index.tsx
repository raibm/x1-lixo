import React from 'react';

import { Container } from './styles';

import Duelist from '../Duelist';

const Body: React.FC = () => {
  return (
    <Container>
      <Duelist/>
      <Duelist/>
    </Container>
  );
}

export default Body;