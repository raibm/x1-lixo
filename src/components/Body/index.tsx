import React from 'react';

import { Container,DuelBox } from './styles';

import Duelist from '../Duelist';
import CommentBody from '../CommentBody';
import Versus from '../Versus';


import firstHero from '../../assets/champions/deus.png';
import secondHero from '../../assets/champions/ezreal.png';

let lastWordsLeft = "Eu prefiro morrer do que perder a vida!";
let lastWordsRight = "Se um dia à velocidade me matar, saiba que morri tentando frear.";

const Body: React.FC = () => {
  return (
    <Container>
      <DuelBox>
      <Duelist idInfo="info" title="Últimas palavras:" img={firstHero} nickname="passfail3d"
       lastWords={lastWordsLeft}/>
      <Versus/>
      <Duelist idBanner="brother" idInfo="info-brother" title="Últimas palavras:" id="player-name" img={secondHero} nickname="bvoy"
      lastWords={lastWordsRight}/>
      </DuelBox>
      <CommentBody/>
    </Container>
  );
}

export default Body;