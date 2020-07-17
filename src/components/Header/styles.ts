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
  width: 50px;
  
  clip-path: polygon(0% 100%, 100% 170%, 0% 0%);

  margin-right: 800px;
  margin-top: 10px;

  z-index: 1;

  transition: clip-path 1s;

  cursor: pointer;

  :hover{
    height: 100px;
    width: 100px;
    clip-path: polygon(0% 0%,0% 100%,10000% 0%);
  }

  @media (max-width: 420px), (max-height: 360px){
    height: 60px;
    width: 60px;

    margin-top: 5px;
    margin-left: 5px;

    :hover{
      height: 90px;
      width: 90px;
    }
  }
`;

export const MenuActions = styled.div`
    display: flex;
`;

export const HomeIcon = styled(Home)`
  height: 50px;
  width: 50px;
  transform: skewX(-30deg);
  margin-left: 5px;

  > path {
      color: var(--main-color);
    }
`;

export const LittleMenu = styled.div`
  height: 50px;
  width: 800px;

  margin-top: 10px;

  transform: skewX(30deg);


  position: absolute;

  background: var(--bar-color);
`;