import React from 'react';

import { Container, VersusTitleLeftLetter, VersusTitleRightLetter, BattleDate } from './styles';

import Duelist from '../Duelist';


import firstHero from '../../assets/champions/yasuo.png';
import secondHero from '../../assets/champions/ryze.png';

let lastWordsLeft = "Eu prefiro morrer do que perder a vida!";
let lastWordsRight = "Se um dia à velocidade me matar, saiba que morri tentando frear.";

const Body: React.FC = () => {
  return (
    <Container>
      <Duelist idInfo="info" title="Últimas palavras:" img={firstHero} nickname="courtesy"
       lastWords={lastWordsLeft}/>
      <VersusTitleLeftLetter>
        V
      </VersusTitleLeftLetter>
      <VersusTitleRightLetter>
        S
      </VersusTitleRightLetter>
      <BattleDate>
        21/09/2020
      </BattleDate>
      <BattleDate>
        21:00
      </BattleDate>
      <Duelist idInfo="info-brother" title="Últimas palavras:" id="player-name" img={secondHero} nickname="passfail3d"
      lastWords={lastWordsRight}/>
    </Container>
  );
}

export default Body;