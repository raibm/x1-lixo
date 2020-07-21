import React from 'react';

import { Container, Avatar, LittleMenu, LoginIcon, ExtensionPowerButton } from './styles';

const Header: React.FC = () => {
  return (
    <Container className="main-container">
 
      <Avatar>
        <LoginIcon/>
      </Avatar>
 
      <ExtensionPowerButton/>
 
        <LittleMenu>
        </LittleMenu>
    </Container>
  );
}

export default Header;