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

  width: 39vw;
  height: 60vh;

  margin-top: 45px;

  background: var(--main-color);

  /* transform: skew(10deg); */

  img {
    transition: 1s;
    height: 60vh;
    width: 39vw;
    /* transform: skew(-10deg); */
  }

      div#player-name {
        margin-left: 410px;
      } 

      div#info-brother {
        margin-left: 410px;
      }

  :hover div#info{
      height: 400px;
  }

  :hover div#info-brother{
      height: 400px;
  }

  :hover img{
    transition: 1s;
    filter: grayscale(1);
  }

  :hover p{
    font-size: 20px;
  }
          
`;

export const PlayerName = styled.div`
  width: 300px;
  height: 45px;
  position: fixed;

  background: #FF9000;

  text-align-last: center;
  
  margin-top: -60px;
  margin-left: 40px;

  h1 {
    margin-top: 5px;
    color: var(--almost-black);
  }
  
  /* transform: skew(-10deg); */
`;


export const InfoPlayer = styled.div`
  width: 300px;
  height: 0px;
  position: fixed;

  transition: 1s;

  background: #FF9000;

  margin-top: -470px;
  margin-left: 40px;

  p {
    font-size: 0px;
  }

  /* transform: skew(-10deg); */
`;


