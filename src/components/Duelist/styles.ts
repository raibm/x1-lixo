import styled from 'styled-components';

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
    }

    :hover div#info-brother {
      width: 15vw;
    }
  }

  @media (max-width: 499px) {
    :hover div#info {
      width: 25vw;
      p {
        font-size: 8px;
      }
    }

    :hover div#info-brother {
      width: 25vw;
      p {
        font-size: 8px;
      }
    }
  }

  :hover img {
    transition: 0.6s;
    filter: grayscale(0);
  }

  :hover p {
    transition: 1s;
    font-size: 20px;
  }

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
  width: 0px;
  height: 21vw;

  transition: 1s;

  position: relative;

  background: #ff9000;

  margin-top: -24.5vw;
  margin-left: 2vw;

  p {
    font-family: 'Sriracha', cursive;
    font-size: 0px;
    text-indent: 0.2em;
  }

  p.last-words {
    font-family: 'Kalam', cursive;
    text-indent: 1em;
  }

  @media (min-width: 500px) {
    height: 16vw;

    margin-top: -17vw;
  }
`;
