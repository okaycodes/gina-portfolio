import { createGlobalStyle } from "styled-components";
import Mistral from "./assets/fonts/mistral/mistral.ttf";
import Rockwell from "./assets/fonts/rockwell/Rockwell.ttf";

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${(props) => props.theme.colors.bg};
        color: ${(props) => props.theme.colors.text};
        font-size: 16px;
        margin: 0;
        --color-primary: #5CE1EC;
        --color-secondary: #00C2CB;
    }

    *{
      box-sizing: border-box;
    }

    @font-face {
      font-family: "Mistral";
      src: url(${Mistral}) format("truetype");
      font-weight: bold;
     }

     @font-face {
      font-family: "Rockwell";
      src: url(${Rockwell}) format("truetype");
     }

     h1,h2,h3{
      font-family: Rockwell;
    }
`;
