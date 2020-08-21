import { createGlobalStyle } from "styled-components";

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
  }

  html {
    background: var(--main-color);
  }


  :root {
    --main-color: #262626;
    --almost-black: #181818;
    --default-icon-color: #F8F8FF;
    --actived-icon-color: #FF4300;
  }
`