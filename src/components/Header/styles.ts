import styled from 'styled-components';

import { Home } from '../../styles/Icons';

export const Container = styled.div`
  background: var(--almost-purple);
  
  width: 100%;
  height: 70px;
  
  position: fixed;
  display: flex;

  justify-content: center;

  @media (max-width: 420px){
    height: 50px;
  }

`;

export const Avatar = styled.img`
  background: red;
  height: 50px;
  width: 60px;

  filter: grayscale(1);

  transition: 0.75s;

  cursor: pointer;

  :hover{
    height: 100px;
    width: 100px;
    transform: skewX(-30deg);
    margin-left: -50px;
     filter: grayscale(0);
  }

  @media (max-width: 420px), (max-height: 360px){
    height: 40px;
    width: 40px;

    margin-top: 5px;
    margin-right: 90px;

    z-index: 1;

    :hover{
      height: 90px;
      width: 90px;
      clip-path: polygon(0% 0%,0% 100%,10000% 0%);
    }
  }
`;

export const HomeIcon = styled(Home)`
  height: 50px;
  width: 50px;
  transform: skewX(-30deg);
  margin-left: 5px;

  > path {
      color: var(--main-color);
    }

  @media(max-width: 420px), (max-height: 320px){
    height: 30px;
    width: 30px;
    margin-left: 5px;
    margin-top: 4px;
  }
`;

export const SubMenu = styled.div`
  height: 50px;
  width: 60px;

  margin-top: 10px;

  transform: skewX(30deg);

  display: flex;

  @media(max-width: 420px), (max-height: 360px){
    height: 40px;
    width: 100px;

    margin-top: 5px;
  }

  background: var(--bar-color);
`;