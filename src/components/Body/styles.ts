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

  background: transparent;

  font: normal 100px 'Abel', Helvetica, Arial;

  animation: ledQuebrado 20s linear infinite;

  @keyframes ledQuebrado {
    0% {
      color: #FF9900;
      text-shadow: 0px 0px 5px #FF2200, 0px 0px 9px #FF4300, 0px 0px 30px #FF0000;
    }
    99% {
      color: #FF9900;
      text-shadow: 0px 0px 5px #FF2200, 0px 0px 9px #FF4300, 0px 0px 30px #FF0000;
    }
    100% {
      color: black;
      text-shadow: none;
    }
  }
`;

export const VersusTitleLeftLetter = styled.h1`
  position: fixed;
  align-self: center;

  margin-left: -20px;

  background: transparent;

  font: normal 100px 'Abel', Helvetica, Arial;

  animation: ledQuebrado 5s infinite;

  @keyframes ledQuebrado {
    0% {
      color: #FF9900;
      text-shadow: 0px 0px 5px #FF2200, 0px 0px 9px #FF4300, 0px 0px 30px #FF0000;
    }

    50% {
      color: black;
      text-shadow: none;
    }

    100% {
      color: #FF9900;
      text-shadow: 0px 0px 5px #FF2200, 0px 0px 9px #FF4300, 0px 0px 30px #FF0000;
    }
  }
`;

