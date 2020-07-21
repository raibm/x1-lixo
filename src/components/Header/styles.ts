import styled, { css } from 'styled-components';

import { PowerSettingsNew } from '../../styles/Icons';

export const Container = styled.div`
  background: var(--almost-purple);
  
  width: 100%;
  height: 68px;
  
  position: fixed;
  display: flex;

  justify-content: center;

  @media (max-width: 420px){
    height: 50px;
  }

`;

export const Avatar = styled.button`
  background: var(--main-color);
  height: 60px;
  width: 60px;
  
  clip-path: polygon(0% 100%, 100% 170%, 0% 0%);

  margin-top: 5px;
  margin-left: -390px;

  position: absolute;
  
  border: none;

  cursor: pointer;

  :focus {
    outline: none;
  }

  @media (max-width: 420px), (max-height: 360px){
    height: 40px;
    width: 40px;

    margin-top: 5px;
    margin-right: 90px;

    :hover{
      height: 90px;
      width: 90px;
    }
  }
`;

const iconPowerCSS = css`
  height: 18px;
  width: 18px;

  margin: inherit;
  margin-top: 16px;
  margin-left: -2.5px;
  
  > path {
      color: #fef678;
    }

  @media(max-width: 420px), (max-height: 320px){
    height: 30px;
    width: 30px;
    margin-left: 5px;
    margin-top: 4px;
  }
`;

export const LoginIcon = styled(PowerSettingsNew)`
  ${iconPowerCSS}
`;

export const LittleMenu = styled.div`
  height: 43px;
  width: 800px;

  margin-top: 10px;

  transform: skewX(30deg);


  position: absolute;


  @media(max-width: 420px), (max-height: 360px){
    height: 40px;
    width: 100px;

    margin-top: 5px;
  }

  background: var(--bar-color);
`;

export const ExtensionPowerButton = styled.div`
  background: var(--main-color);
  width: 810px;
  height: 8px;

  transform: skewX(30deg);
  margin-right: -25px;

  margin-top: auto; 
  margin-bottom: 3px;
`;