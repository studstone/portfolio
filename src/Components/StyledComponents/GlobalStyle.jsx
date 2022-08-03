import { createGlobalStyle } from "styled-components";

const ClobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    background-color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: var(--color-text);
    overflow-x: hidden;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  h1,
  h2,
  h3 {
    font-family: 'Noto Sans', sans-serif;
    font-weight: 700;
    padding: 0;
    margin: 0;
  }

  p {
    padding: 0;
    margin: 0;
  }

  button {
    cursor: pointer;
    border: none;
  }

  input, button {
    font: inherit;
  }

  input[type='number'] {
    -moz-appearance: textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

:root {
  --background: linear-gradient(101.56deg, #2C2C2C 1.56%, #1C1C1C 95.55%);
  --background-wrapper: #2a2a2a;
  --shadow-wrapper: 0px 4px 6px rgb(0 0 0 / 47%);
  --shadow-image: 0px 0px 0px 6px #686868;
  --color-icon: #00c4f0;
  --background-button: #E2A300;
  --button-hover: rgb(255, 230, 0);
  --color-text: #e4e4e4;
  --color-border:  #E2A300;
  --background-circle: linear-gradient(130.68deg, #414141 0%, #2D2D2D 100.52%);
  --button-shadow: 0rem 0.2rem 1.3rem rgba(251, 255, 0, 0.48);
  --button-shadow-hover: 0rem 0.2rem 1.3rem rgba(255, 230, 0, 0.747);
}
`;

export default ClobalStyle;
