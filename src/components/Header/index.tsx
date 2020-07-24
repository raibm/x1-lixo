import React from 'react';

import { Container, SubMenu, HomeIcon, DuelIcon, DefeatIcon, ConquestIcon, ProfileIcon, Avatar, Menu } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
        <Avatar src="https://vignette.wikia.nocookie.net/leagueoflegends/images/2/2d/Hoppin_Mad_Emote.png/revision/latest/top-crop/width/300/height/300?cb=20171120231742"/>

      <Menu>        
        <SubMenu className="menu-button">
          <HomeIcon/>
        </SubMenu>
        <SubMenu className="menu-button">
          <DuelIcon/>
        </SubMenu>
        <SubMenu className="menu-button">
          <DefeatIcon/>
        </SubMenu>
        <SubMenu className="menu-button">
          <ConquestIcon/>
        </SubMenu>
        <SubMenu className="menu-button">
          <ProfileIcon/>
        </SubMenu>
      </Menu>

    </Container>
  );
}

export default Header;