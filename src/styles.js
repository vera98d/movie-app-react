import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {

  },

  fontFamily: {
    primaryFont: "Roboto",
  },
  fontSize: {
    header: "60px",
    text: "24px",
    tiles: "30px",
  },
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  html, body{
    font-family: "Roboto", sans-serif;
    font-size: 18px;
  }

  p {
    font-size: 1rem;  
  }

  h1 {
      font-size: 2.5rem;
  }

  h2 {
      font-size: 1.5rem;
  }

  figcaption {
    font-size: 0.8rem;
  }

  @media screen and (min-width: 380px) {
    html {
      font-size: 90%;
    }
}

@media screen and (min-width: 520px) {
    html {
      font-size: 100%;
    }
}

  @media screen and (min-width: 768px) {
    html {
      font-size: 110%;
    }
}

  @media screen and (min-width: 1024px) {
      html {
        font-size: 120%;
      }
  }

  @media screen and (min-width: 1200px) {
    html {
      font-size: 130%;
    }
  }
  `;