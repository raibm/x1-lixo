import styled from 'styled-components';

export const Container = styled.div`
  background: black;

  height: 100%;
  width: 100vw;
`;

export const DuelBox = styled.div`
  height: 100%;
  width: 100%;

  display: flex;

  #brother {
    justify-content: flex-start;
  }
`;

export const DateBox = styled.div`
    background: var(--main-color);
    
    width: 30vw;
    height: 30vw;
`;

export const VersusTitleRightLetter = styled.h1`
  position: relative;
  align-self: center;

  margin-right: -5vh;

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

    margin-right: -2vh;
  }
`;

export const VersusTitleLeftLetter = styled.h1`
  position: relative;
  align-self: center;

  margin-left: -5vh;

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

    margin-left: -2vh;
  }
`;

export const BattleDate = styled.h1`
  position: relative;

  align-self: center;

  margin-top: 120px;
  margin-left: -5vh;


  background: transparent;

  font: normal 20px 'Abel';

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
    margin-top: 80px;

    font-size: 15px;

    + h1 {
      margin-top: 104px;
    }
  }
`;
