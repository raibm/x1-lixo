import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* align-items: center;
  justify-content: center; */

  height: 70px;

  background: var(--sinister-orange);

  @media (max-width: 420px){
    height: 50px;
  }
`;

export const Avatar = styled.div`
  background: red;
  height: 100px;
  width: 100px;
  
  border-radius: 10px;

  align-self: center;
  margin-left: 10px;
  margin-top: 55px;

  @media (max-width: 420px ){
    height: 50px;
    width: 50px;
    margin-top: 22px;
  }
`;
