import React from 'react';

import { Container, Avatar, LittleMenu, HomeIcon } from './styles';

const Header: React.FC = () => {
  return (
    <Container className="main-container">
      <Avatar src="https://spinoff.com.br/wp-content/uploads/Robert-Downey-Jr-Tony-Stark-Iron-Man-3-Marvel-Disney-1200x900.jpg"/>
        <LittleMenu>
          <HomeIcon/>
        </LittleMenu>
    </Container>
  );
}

export default Header;