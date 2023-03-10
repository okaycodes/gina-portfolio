import { createGlobalStyle } from "styled-components";

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
`;
