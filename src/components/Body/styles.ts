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

  @media(max-width: 500px){}
`;

