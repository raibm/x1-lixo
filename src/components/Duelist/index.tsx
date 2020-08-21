import React from 'react';

import { Container, Banner, InfoPlayer, PlayerName } from './styles';


interface DuelistProps {
  img: string;
  nickname: string;
}

const Duelist: React.FC<DuelistProps> = (props) => {
  return (
    <Container>
      <Banner>
        <img src={props.img} alt=""/>
      <PlayerName className="info-player">
        <h1>{props.nickname}</h1>
      </PlayerName>
      </Banner>
    </Container>
  );
}

export default Duelist;