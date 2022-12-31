import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  body {
    background: ${props => props.theme['black-700']};
    color: ${props => props.theme['white']};

  }
  
  body, input, textarea, button {
    font-family: 'Jura', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;