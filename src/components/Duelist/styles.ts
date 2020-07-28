import styled from "styled-components";

export const Container = styled.div`
  height: 80vh;
  width: 100%;

  background: var(--almost-black);

  justify-content: center;
  align-items: center;
  
  display: flex;

  @media(max-width: 800px){
    width: 50%;
  }
`;

export const Banner = styled.div`

  width: 40vw;
  height: 60vh;

  margin-top: 45px;

  background: var(--main-color);

  border-radius: 50px;
`;

export const VersusImage = styled.img`
  
`;

