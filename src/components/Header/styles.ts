import styled, { css } from 'styled-components';

import { Home, Sword, Skull, Medal, User } from '../../styles/Icons';

const smallPhone = css`
  height: 50px;
  width: 50px;

  margin-top: 55px;
  margin-left: 40vw;

  z-index: 1;

  :hover {
    height: 90px;
    width: 90px;
    clip-path: polygon(0% 0%, 0% 100%, 10000% 0%);

    margin-top: 55px;
    margin-left: 36vw;
  }
`;

const normalPhone = css`
  position: fixed;
  height: 50px;
  width: 50px;

  margin-top: 55px;
  margin-left: 41vw;

  z-index: 1;

  :hover {
    height: 90px;
    width: 90px;
    clip-path: polygon(0% 0%, 0% 100%, 10000% 0%);

    margin-left: 36vw;
  }
`;

const iconCSS = css`
  height: 20px;
  width: 20px;

  > path {
    color: var(--default-icon-color);
  }
  > polygon {
    color: var(--default-icon-color);
  }

  border-left: none !important;

  @media (max-width: 420px), (max-height: 320px) {
    height: 25px;
    width: 25px;
    margin-left: 5px;
    margin-top: 4px;
  }

  @media (max-width: 320px), (max-height: 320px) {
    height: 20px;
    width: 20px;
    margin-left: 3px;
    margin-top: 4px;
  }
`;

/////////////////// tags ///////////////////

export const Container = styled.div`
  background: var(--main-color);

  width: 100%;
  height: 45px;

  position: fixed;
  display: flex;

  justify-content: center;

  z-index: 7;

  @media (max-width: 420px) {
    height: 50px;
  }
`;

export const Menu = styled.div`
  display: flex;

  /* & :first-child {
    border-left: solid 1px var(--default-icon-color); */
  /* border-top-left-radius: 10px;
    border-bottom-left-radius: 10px; */
  /* } */

  & :last-child {
    /* border-top-right-radius: 10px;
    border-bottom-right-radius: 10px; */
  }
`;

export const Avatar = styled.img`
  background: var(--main-color);
  height: 35px;
  width: 35px;

  /* border-radius: 10px; */
  border-left: solid 1px var(--default-icon-color);
  border-bottom: solid 1px var(--default-icon-color);

  margin-left: -40vw;
  margin-top: 5px;

  position: fixed;

  filter: grayscale(1);

  transition: 0.75s;

  cursor: pointer;

  :hover {
    height: 100px;
    width: 100px;
    filter: grayscale(0);
  }

  @media (max-width: 475px) {
    ${normalPhone};
  }

  @media (max-width: 320px) {
    ${smallPhone};
  }
`;

export const HomeIcon = styled(Home)`
  ${iconCSS};
`;

export const DuelIcon = styled(Sword)`
  ${iconCSS};
`;

export const DefeatIcon = styled(Skull)`
  ${iconCSS};
`;

export const ConquestIcon = styled(Medal)`
  ${iconCSS};
`;

export const ProfileIcon = styled(User)`
  ${iconCSS};
`;

export const SubMenu = styled.button`
  display: flex;

  height: 35px;
  width: 60px;
  margin-top: 5px;

  justify-content: center;
  align-items: center;

  border: none;
  border-bottom: solid 1px var(--default-icon-color);

  transition: 0.2s;

  :hover {
    border-bottom: solid 1px #ff9000;
    svg {
      width: 25px;
      height: 25px;
    }
  }

  :focus {
    outline: none;
  }

  &.active {
    outline: none;
    border-left: solid 1px #ff9000;
    border-bottom: solid 1px #ff9000;
    border-right: solid 1px #ff9000;

    > svg {
      width: 25px;
      height: 25px;
      > path {
        color: #ff9000;
      }
      > polygon {
        color: #ff9000;
      }
    }
  }

  @media (max-width: 420px) {
    height: 40px;
    width: 74px;

    margin-top: 5px;

    &.active {
      > svg {
        width: 30px;
        height: 30px;
      }
    }
  }

  @media (max-width: 360px) {
    height: 40px;
    width: 60px;

    margin-top: 5px;
  }

  background: var(--main-color);
`;
