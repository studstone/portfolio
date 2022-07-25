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
    color: var(--color-text);
    overflow-x: hidden;
    min-height: 2000rem;
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
    font-family: 'Pacifico', cursive;
    padding: 0;
    margin: 0;
  }

  p {
    padding: 0;
    margin: 0;
  }

  button {
    cursor: pointer;
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
  --color-background: #2a2a2a;
  --color-icon: #00c4f0;
  --background-button: linear-gradient(87.32deg, #E2A300 4.47%, #E29500 95.53%);
  --color-text: #e4e4e4;
  --color-border:  #E2A300;
}
`;

export default ClobalStyle;
