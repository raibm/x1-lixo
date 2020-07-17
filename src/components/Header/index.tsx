import React from 'react';

import { Container, Avatar } from './styles';

const Header: React.FC = () => {
  return (
    <Container className="main-container">
      <Avatar src="https://lastfm.freetls.fastly.net/i/u/770x0/1f1d1906c4cabf1c7c374f318da80d73.jpg"/>
    </Container>
  );
}

export default Header;