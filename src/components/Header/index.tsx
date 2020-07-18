import React from 'react';

import { Container, SubMenu, HomeIcon, DuelIcon, DefeatIcon, ConquestIcon, ProfileIcon } from './styles';

const Header: React.FC = () => {
  return (
    <Container className="main-container">
        <SubMenu>
          <HomeIcon/>
        </SubMenu>
        <SubMenu>
          <DuelIcon/>
        </SubMenu>
        <SubMenu>
          <DefeatIcon/>
        </SubMenu>
        <SubMenu>
          <ConquestIcon/>
        </SubMenu>
        <SubMenu>
          <ProfileIcon/>
        </SubMenu>
    </Container>
  );
}

export default Header;