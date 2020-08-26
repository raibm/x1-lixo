import styled from "styled-components";

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

  animation: ledQuebrados 0.3s linear infinite;

  @keyframes ledQuebrados {
    0% {
      color: black; 
      text-shadow: none;
    }
    1% {
      color: #FF9900;
      text-shadow: 0px 0px 5px #FF2200, 0px 0px 9px #FF4300, 0px 0px 30px #FF0000;
    }
    99% {
      color: #FF9900;
      text-shadow: 0px 0px 5px #FF2200, 0px 0px 9px #FF4300, 0px 0px 30px #FF0000;
    }
  }
`;

export const VersusTitleLeftLetter = styled.h1`
  position: fixed;
  align-self: center;

  margin-left: -20px;

  z-index: 6;

  background: transparent;

  font: normal 100px 'Abel';

  animation: ledQuebradoLeft 5s linear infinite;

  @keyframes ledQuebradoLeft {
    0% {
      color: #FF9900;
      text-shadow: 0px 0px 5px #FF2200, 0px 0px 9px #FF4300, 0px 0px 30px #FF0000;
    }

    100% {
      color: #FF9900;
      text-shadow: 0px 0px 5px #FF2200, 0px 0px 9px #FF4300, 0px 0px 30px #FF0000;
    }
  }
`;

export const BattleDate = styled.h1`
  position: fixed;

  align-self: center;

  margin-top: 60px;
  
  z-index: 6;

  background: transparent;

  font: normal 20px 'Abel';

  animation: ledQuebradoLeft 5s linear infinite;


  + h1 {
    margin-top: 90px; 
  }

  @keyframes ledQuebradoLeft {
    0% {
      color: #FF9900;
      text-shadow: 0px 0px 5px #FF2200, 0px 0px 9px #FF4300, 0px 0px 30px #FF0000;
    }

    100% {
      color: #FF9900;
      text-shadow: 0px 0px 5px #FF2200, 0px 0px 9px #FF4300, 0px 0px 30px #FF0000;
    }
  }
`;
