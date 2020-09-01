import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    font-size: 15px;
    font-family: Helvetica, Arial;
    overflow-x: hidden;
  }

  html {
    background: var(--main-color);
  }
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}


  :root {
    --main-color: #262626;
    --almost-black: #181818;
    --default-icon-color: #F8F8FF;
    --actived-icon-color: #FF9000;
  }
`;
