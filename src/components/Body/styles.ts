import styled from 'styled-components';

export const Container = styled.div`
  background: black;

  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const VersusTitleRightLetter = styled.h1`
  position: fixed;
  align-self: center;

  margin-left: 20px;

  z-index: 6;

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

    margin-left: 10px;
  }
`;

export const VersusTitleLeftLetter = styled.h1`
  position: fixed;
  align-self: center;

  margin-left: -20px;

  z-index: 6;

  background: transparent;

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

    margin-left: -10px;
  }
`;

export const BattleDate = styled.h1`
  position: fixed;

  align-self: center;

  margin-top: 50px;

  z-index: 6;

  background: transparent;

  font: normal 20px 'Abel';

  animation: ledQuebradoLeft 5s linear infinite;

  + h1 {
    margin-top: 70px;
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
    margin-top: 80px;

    font-size: 15px;

    + h1 {
      margin-top: 104px;
    }
  }
`;
