import styled from "styled-components";

export const Container = styled.div`
  background: var(--bar-color);
  width: 100%;
  height: 70px;
  position: fixed;

  @media (max-width: 420px){
    height: 50px;
  }

`;

export const Avatar = styled.img`
  background: red;
  height: 50px;
  width: 50px;
  
  border-radius: 50px;

  margin-left: 10px;
  margin-top: 10px;

  transition: 0.75s;

  :hover{
    height: 100px;
    width: 100px;
  }

  @media (max-width: 420px), (max-height: 360px){
    height: 60px;
    width: 60px;

    margin-top: 5px;
    margin-left: 5px;

    :hover{
      height: 90px;
      width: 90px;
    }
  }
`;