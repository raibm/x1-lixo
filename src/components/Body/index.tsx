import React from 'react';

import { Container, VersusTitle } from './styles';

import Duelist from '../Duelist';

const Body: React.FC = () => {
  return (
    <Container>
      <Duelist/>
      <VersusTitle>
        VS
      </VersusTitle>
      <Duelist/>
    </Container>
  );
}

export default Body;