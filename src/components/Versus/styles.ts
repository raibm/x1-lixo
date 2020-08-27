import styled from 'styled-components';

export const Container = styled.div`
  height: 90vh;
  width: 20%;

  background: rgb(24, 24, 24);
  background: linear-gradient(
    180deg,
    rgba(24, 24, 24, 1) 0%,
    rgba(24, 24, 24, 1) 75%,
    rgba(0, 0, 0, 1) 100%
  );

  justify-content: center;
  align-items: center;

  display: flex;

  @media (max-width: 800px) {
    width: 50%;
  }
`;

export const Banner = styled.div`
  width: 40vw;
  height: 30vw;

  background: var(--main-color);

  @media (max-width: 500px) {
    width: 20vw;
    height: 50vw;
  }
`;

export const VersusBox = styled.div`

  height: 60%;

  display: flex;
  
  justify-content: center;
  align-items: flex-end;
`;

export const VersusTitleRightLetter = styled.h1`
  position: relative;

  text-align: center;

  background: transparent;

  font: normal 100px 'Abel';
  font-size: 10vh;

  animation: ledQuebrados 0.3s linear infinite;

  @keyframes ledQuebrados {
    0% {
      color: black;
      text-shadow: none;
    }
    1% {
      color: #ff9900;
      text-shadow: 0px 0px 5px #ff2200, 0px 0px 9px #ff4300,
        0px 0px 30px #ff0000;
    }
    99% {
      color: #ff9900;
      text-shadow: 0px 0px 5px #ff2200, 0px 0px 9px #ff4300,
        0px 0px 30px #ff0000;
    }
  }

  @media (max-width: 500px) {
    font-size: 4vh;

    margin-right: -2vh;
  }
`;

export const VersusTitleLeftLetter = styled.h1`
  background: transparent;
  position: relative;

  text-align: center;

  font: normal 100px 'Abel';
  font-size: 10vh;

  animation: ledQuebradoLeft 5s linear infinite;

  @keyframes ledQuebradoLeft {
    0% {
      color: #ff9900;
      text-shadow: 0px 0px 5px #ff2200, 0px 0px 9px #ff4300,
        0px 0px 30px #ff0000;
    }

    100% {
      color: #ff9900;
      text-shadow: 0px 0px 5px #ff2200, 0px 0px 9px #ff4300,
        0px 0px 30px #ff0000;
    }
  }

  @media (max-width: 500px) {
    font-size: 4vh;

    margin-left: -2vh;
  }
`;

export const BattleDate = styled.h1`
  background: transparent;

  font: normal 20px 'Abel';
  text-align-last: center;

  animation: ledQuebradoLeft 5s linear infinite;

  p#hour {
    text-align: center;
  }

  @keyframes ledQuebradoLeft {
    0% {
      color: #ff9900;
      text-shadow: 0px 0px 5px #ff2200, 0px 0px 9px #ff4300,
        0px 0px 30px #ff0000;
    }

    100% {
      color: #ff9900;
      text-shadow: 0px 0px 5px #ff2200, 0px 0px 9px #ff4300,
        0px 0px 30px #ff0000;
    }
  }

  @media (max-width: 500px) {
    /* margin-top: 80px; */

    font-size: 15px;

    + h1 {
      /* margin-top: 104px; */
    }
  }
`;
