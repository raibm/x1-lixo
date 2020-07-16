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
    font-family: sans-serif;
  }

  html {
    background: var(--main-color);
  }


  :root {
    --main-color: #D5C4B4;
    --sinister-white: #F4EFEB;
    --bar-color: #D4805C;
  }
`