import React from 'react';

import { Container, VersusTitleLeftLetter, VersusTitleRightLetter } from './styles';

import Duelist from '../Duelist';


import firstHero from '../../assets/champions/yasuo.png';
import secondHero from '../../assets/champions/deus.png';

const Body: React.FC = () => {
  return (
    <Container>
      <Duelist img={firstHero} nickname="courtesy"/>
      <VersusTitleLeftLetter>
        V
      </VersusTitleLeftLetter>
      <VersusTitleRightLetter>
        S
      </VersusTitleRightLetter>
      <Duelist img={secondHero} nickname="passfail3d"/>
    </Container>
  );
}

export default Body;