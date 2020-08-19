import React from 'react';

import { Container, VersusTitleLeftLetter, VersusTitleRightLetter } from './styles';

import Duelist from '../Duelist';


import firstHero from '../../assets/champions/kassadin.png';
import secondHero from '../../assets/champions/jarvan.png';

const Body: React.FC = () => {
  return (
    <Container>
      <Duelist img={firstHero}/>
      <VersusTitleLeftLetter>
        V
      </VersusTitleLeftLetter>
      <VersusTitleRightLetter>
        S
      </VersusTitleRightLetter>
      <Duelist img={secondHero}/>
    </Container>
  );
}

export default Body;