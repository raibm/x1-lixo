import React from 'react';

import { Container, ButtonOptions, DonateIcon, WatchIcon, ShareIcon } from './styles';

const CommentBody: React.FC = () => {
  return (
    <Container>
      <ButtonOptions>
        <DonateIcon/>
        <h1>Doar</h1>
      </ButtonOptions>
      <ButtonOptions>
        <WatchIcon/>
        <h1>Acompanhar</h1>
      </ButtonOptions>
      <ButtonOptions>
        <ShareIcon/>
        <h1>Compartilhar</h1>
      </ButtonOptions>
    </Container>
  );
}

export default CommentBody;
