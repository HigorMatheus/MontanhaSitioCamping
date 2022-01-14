import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root{
    /* a cada 1rem será considera 10px */
    font-size: 62.5%;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    z-index: 0;
  }

  body{
    background: rgba(32, 57, 11, 0.47);
  }

  @media (max-width: 1000px){

    :root{
      font-size: 52.5%;
    }
  }
  @media (max-width: 850px){

    :root{
      font-size: 42.5%;
    }
  }
`;
