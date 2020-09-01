import styled, { css } from 'styled-components';
import { MoneyBillAlt, Eye, Share } from '../../styles/Icons';

const iconCSS = css`
  height: 20px;
  width: 20px;

  > path {
    color: var(--almost-black);
  }
  > polygon {
    color: var(--almost-black);
  }

  border-left: none !important;
  margin: 4px;

  transform: skew(10deg);


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

export const DonateIcon = styled(MoneyBillAlt)`
  ${iconCSS};
`;

export const WatchIcon = styled(Eye)`
  ${iconCSS};
`;

export const ShareIcon = styled(Share)`
  ${iconCSS};
`;

export const Container = styled.div`
  height: 90vh;
  width: 100%;

  display: flex;

  background: black;

  justify-content: center;
`;

export const ButtonOptions = styled.button`
  width: 120px;
  height: 50px;

  border: none;
  transform: skew(-10deg);

  display: flex;

  align-items: center;

  justify-content: center;

  background: var(--actived-icon-color);

  h1 {
    color: var(--almost-black);
    font-family: 'Sriracha', cursive;
    font-size: 2vw;
    transform: skew(10deg);
    font-size: small;
  }

`;
