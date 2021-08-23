import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-background: #fafafa;
    --color-primary: #3A362D;
    --color-secondary: #FFFFFF;
    --color-card: #ffffff;
    --color-highlight: #28A0B0;
    --color-detail: #C4C4C4;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html {
    @media(max-width:1080px) {
      font-size: 93.75%;
    }

    @media(max-width:720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--color-background);
    -webkit-font-smoothing: antialiased;
    color: var(--color-primary);
  }

  body, input, button {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`