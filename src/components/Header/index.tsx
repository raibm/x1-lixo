import React from 'react';

import { Container, SubMenu, HomeIcon, DuelIcon } from './styles';

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
          {/* <HomeIcon/> */}
        </SubMenu>
        <SubMenu>
          {/* <HomeIcon/> */}
        </SubMenu>
        <SubMenu>
          {/* <HomeIcon/> */}
        </SubMenu>
    </Container>
  );
}

export default Header;