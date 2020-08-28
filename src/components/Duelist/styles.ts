import styled, { css } from 'styled-components';

import { CheckCircle, Cancel } from '../../styles/Icons';

export const Container = styled.div`
  height: 90vh;
  width: 100%;

  background: rgb(24, 24, 24);
  background: linear-gradient(
    180deg,
    rgba(24, 24, 24, 1) 0%,
    rgba(24, 24, 24, 1) 75%,
    rgba(0, 0, 0, 1) 100%
  );

  justify-content: flex-end;

  align-items: center;

  display: flex;

  @media (max-width: 800px) {
    width: 50%;
  }
`;

export const Banner = styled.div`
  width: 30vw;
  height: 30vw;

  background: var(--main-color);

  /* transform: skew(10de); */

  img {
    transition: 1s;
    height: 100%;
    width: 100%;
    object-fit: cover;
    filter: grayscale(1);
  }

  div#player-name {
    margin-left: 13vw;
  }

  div#info-brother {
    margin-left: 13vw;
  }

  @media (min-width: 500px) {
    :hover div#info {
      width: 15vw;
      div {
        width: 14vw;
       }
      p {
        font-size: 1.3vw;
      }
    }

    :hover div#info-brother {
      width: 15vw;
       div {
        width: 14vw;
       }
       p {
        font-size: 1.3vw;
      }
    }
  }

  @media (max-width: 499px) {
    :hover div#info {
      width: 25vw;
      div {
        width: 24vw;
       }
      p {
        font-size: 8px;
      }
    }

    :hover div#info-brother {
      width: 25vw;
      div {
        width: 24vw;
       }
      p {
        font-size:8px;
      }
    }
  }

  :hover img {
    transition: 0.6s;
    filter: grayscale(0);
  }

  /* :hover p {
    transition: 1s;
    font-size: 20px;
  } */

  @media (max-width: 500px) {
    width: 40vw;
    height: 50vw;
    object-fit: cover;
  }
`;

export const PlayerName = styled.div`
  width: 15vw;
  height: 2.5vw;

  background: #ff9000;

  position: relative;

  text-align-last: center;

  margin-top: -1vw;
  margin-left: 2vw;

  h1 {
    margin-top: -0.2vw;
    color: var(--almost-black);
    font-family: 'Sriracha', cursive;
    font-size: 1.5vw;
  }

  @media (max-width: 500px) {
    width: 25vw;
    height: 6vw;

    h1 {
      font-size: 4vw;
    }
  }

  /* transform: skew(-10deg); */
`;

export const InfoPlayer = styled.div`
  width: 0;
  height: 21vw;

  transition: 0.5s;

  position: relative;

  background: #ff9000;

  margin-top: -24.5vw;
  margin-left: 2vw;

  p {
    font-family: 'Sriracha', cursive;
    font-size: 0;
    /* text-indent: 0.5em; */
  }

  p.last-words {
    font-family: 'Kalam', cursive;
    font-size: 1.3vw;
    /* text-indent: 1em; */
  }

  @media (min-width: 500px) {
    height: 16vw;

    margin-top: -17vw;
  }
`;

export const BadgesBox = styled.div`
  width: 15vw;
  height: 8vw;
  padding: 2vh 0vh 0vh 0vh;
`;

export const InfoBox = styled.div`
  width: 15vw;
  height: 9vw;
  margin: 0 auto;
  padding: 0vh 0.2vw 0.5vw 0vw;
  position: relative;
`;

export const DescriptionInfoBox = styled.div`
  width: 0;
  height: 14vh;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5px;

  word-break: break-word;
  
  overflow-y: scroll;
  
  transition: 0.7s;
  
   @media (max-width: 700px) {
    height: 8vh;
  }
`;

export const BadgesTag = styled.div`
  width: 15vw;
  height: 5vh;

  align-items: center;
  display: flex;

  h2 {
    font-size: 15px;
  }

  h3 {
    margin: auto;
  }
`;

const iconCSS = css`
  height: 25px;
  width: 25px;

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

export const WinIcon = styled(CheckCircle)`
  ${iconCSS};
  > path {
    color: var(--almost-black);
  }
`;

export const LostIcon = styled(Cancel)`
  ${iconCSS};
  > path {
    color: var(--almost-black);
  }
`;
