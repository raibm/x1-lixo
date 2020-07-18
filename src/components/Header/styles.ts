import styled, { css } from 'styled-components';

import { Home, DoubleArrow } from '../../styles/Icons';

export const Container = styled.div`
background: var(--bar-color);
  
  width: 100%;
  height: 70px;
  
  position: fixed;
  display: flex;

  & :first-child {
    border-left: solid 1px #262626;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  & :last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  justify-content: center;

  @media (max-width: 420px){
    height: 50px;
  }

`;

export const Avatar = styled.img`
  /* background: red;
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
  } */
`;

const iconCSS = css`
  height: 40px;
  width: 40px;

  > path {
      color: ghostwhite;
    }
  > polygon {
    color: ghostwhite;
  }
  
  border-left: none!important;

  @media(max-width: 420px), (max-height: 320px){
    height: 30px;
    width: 30px;
    margin-left: 5px;
    margin-top: 4px;
  }
`;

export const HomeIcon = styled(Home)`
 ${iconCSS};
`;

export const DuelIcon = styled(DoubleArrow)`
 ${iconCSS};
`;

export const SubMenu = styled.button`
  display: flex;

  height: 50px;
  width: 60px;
  margin-top: 10px;

  justify-content: center;
  align-items: center;

  border: none;
  border-bottom: solid 1px #262626;

  transform: skewX(20deg);
  transition: 0.30s;

  :hover {
    border-left: solid 5px #262626;
    border-bottom: solid 5px #262626;
    border-right: solid 1px #262626;
    border-top: solid 1px #262626;
  
  }

  :focus {
    outline: none;
    border-left: solid 5px #262626;
    border-bottom: solid 5px #262626;
    border-right: solid 1px #262626;
    border-top: solid 1px #262626;

    > svg {
      
      > path {
      color: #262626;
    }
    > polygon {
      color: #262626;
    }
    }
  } 


  @media(max-width: 420px), (max-height: 360px){
    height: 40px;
    width: 100px;

    margin-top: 5px;
  }

  background: linear-gradient(2deg, #b3cdd1 0%, #9fa4c4 74%);
`;