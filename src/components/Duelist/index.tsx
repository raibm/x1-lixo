import React from 'react';

import { Container, Banner, InfoPlayer, PlayerName } from './styles';


interface DuelistProps {
  img: string;
  nickname: string;
  id?: string;
  idInfo?: string;
  title?: string;
}

const Duelist: React.FC<DuelistProps> = (props) => {
  return (
    <Container>
      <Banner>
        <img src={props.img} alt=""/>
      <InfoPlayer id={props.idInfo}>
        <p>{props.title}</p>
      </InfoPlayer>
      <PlayerName id={props.id}>
        <h1>{props.nickname}</h1>
      </PlayerName>
      </Banner>
    </Container>
  );
}

export default Duelist;