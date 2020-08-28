import React from 'react';

import {
  Container,
  Banner,
  InfoPlayer,
  PlayerName,
  BadgesTag,
  BadgesBox,
  InfoBox,
  WinIcon,
  LostIcon,
  DescriptionInfoBox,
} from './styles';

interface DuelistProps {
  img: string;
  nickname: string;
  id?: string;
  idInfo?: string;
  title?: string;
  lastWords?: string;
  idBanner?: string;
}

const Duelist: React.FC<DuelistProps> = (props) => {
  return (
    <Container id={props.idBanner}>
      <Banner>
        <img src={props.img} alt="" />
        <InfoPlayer id={props.idInfo}>
          <InfoBox>
            <p>{props.title}</p>
            <DescriptionInfoBox>
              <p className="last-words">"{props.lastWords}"</p>
            </DescriptionInfoBox>
          </InfoBox>
          {/* <BadgesBox>
            <BadgesTag>
              <WinIcon />
              <h2>Vitórias</h2>
              <h3>12</h3>
            </BadgesTag>
            <td />
            <BadgesTag>
              <LostIcon />
              <h2>Derrotas</h2>
              <h3>7</h3>
            </BadgesTag>
          </BadgesBox> */}
        </InfoPlayer>
        <PlayerName id={props.id}>
          <h1>{props.nickname}</h1>
        </PlayerName>
      </Banner>
    </Container>
  );
};

export default Duelist;
