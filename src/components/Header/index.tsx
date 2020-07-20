import React from 'react';

import { Container, SubMenu, HomeIcon, DuelIcon, DefeatIcon, ConquestIcon, ProfileIcon, SocialMenu } from './styles';

const Header: React.FC = () => {
  return (
    <Container className="main-container">
        <SubMenu className="main-menu-button">
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
        {/* <SocialMenu>
          
        </SocialMenu> */}
    </Container>
  );
}

export default Header;