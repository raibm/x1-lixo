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
    --main-color: #355C7D;
    --almost-purple: #6C5B7B;
    --bar-color: linear-gradient(2deg, #b3cdd1 0%, #9fa4c4 74%);
    --almost-pink: #C06C84;
    --pink: #F67280;
  }
`