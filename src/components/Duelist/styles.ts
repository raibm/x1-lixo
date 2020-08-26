import styled from 'styled-components';

export const Container = styled.div`
  height: 80vh;
  width: 100%;

  background: var(--almost-black);

  justify-content: center;
  align-items: center;

  display: flex;

  @media (max-width: 800px) {
    width: 50%;
  }
`;

export const Banner = styled.div`
  width: 30vw;
  height: 30vw;

  margin-top: 45px;

  background: var(--main-color);

  position: fixed;

  /* transform: skew(10deg); */

  img {
    transition: 1s;
    height: 100%;
    width: 100%;
    object-fit: cover;
    filter: grayscale(1);
    /* transform: skew(-10deg); */
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
  position: fixed;

  background: #ff9000;

  text-align-last: center;

  margin-top: -3vw;
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
  position: fixed;

  transition: 1s;

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

  @media (max-width: 500px) {
    width: 25vw;
    height: 21vw;

    h1 {
      font-size: 4vw;
    }
  }
`;
