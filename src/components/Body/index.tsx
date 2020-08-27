import React from 'react';

import { Container, VersusTitleLeftLetter, VersusTitleRightLetter, BattleDate, DuelBox, DateBox } from './styles';

import Duelist from '../Duelist';
import CommentBody from '../CommentBody';
import Versus from '../Versus';


import firstHero from '../../assets/champions/deus.png';
import secondHero from '../../assets/champions/ryze.png';

let lastWordsLeft = "Eu prefiro morrer do que perder a vida!";
let lastWordsRight = "Se um dia à velocidade me matar, saiba que morri tentando frear.";

const Body: React.FC = () => {
  return (
    <Container>
      <DuelBox>
      <Duelist idInfo="info" title="Últimas palavras:" img={firstHero} nickname="courtesy"
       lastWords={lastWordsLeft}/>
      {/* <VersusTitleLeftLetter>
        V
      </VersusTitleLeftLetter>
      <VersusTitleRightLetter>
        S
      </VersusTitleRightLetter> */}
      {/* <DateBox>
      <BattleDate>
        21/09/2020
        <br/>
        <p id="hour">21:00</p>
      </BattleDate>
      </DateBox> */}
      <Versus/>
      <Duelist idBanner="brother" idInfo="info-brother" title="Últimas palavras:" id="player-name" img={secondHero} nickname="passfail3d"
      lastWords={lastWordsRight}/>
      </DuelBox>
      <CommentBody/>
    </Container>
  );
}

export default Body;