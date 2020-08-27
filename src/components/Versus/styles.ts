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
