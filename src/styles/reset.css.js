import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    html, body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        font-size: 14px;
        margin: 0;
        padding: 0;
        height: 100%;
    }
    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        #root {
          height: 100%;
        }
    }

    *, ::after, ::before{
        box-sizing: border-box;
    }
`;
