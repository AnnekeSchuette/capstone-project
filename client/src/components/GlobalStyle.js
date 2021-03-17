import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --color-text: var(--color-space-cadet);
    --color-background:var(--color-midnight);
    --color-primary: var(--color-indigo);
    --color-secondary: var(--color-purple-munsell);

    --color-midnight: #010b3d;
    --color-midnight-punch: #04135e;
    --color-midnight-punch-light: #04135e10;
    --color-space-cadet: #171941ff;
    --color-pink-pantone: #dc469fff;

    --space-xsmall: 5px;
    --space-small: 15px;
    --space-medium: 25px;
    --space-large: 35px;
    --space-xlarge: 50px;
  }
  * {
    box-sizing: border-box
  }

  body {
    margin: 0;
    font-family: 'Josefin', sans-serif;
    font-weight: 300;
    font-size: 112.5%;
    line-height: 1.5;
    padding:0;
  }

  input, button, textarea {
    font-family: inherit;
    font-size: 0.9em;

    &:focus {
      outline: none;
      border-color: transparent;
      box-shadow: 0 0 4px 1px plum;
    }
  }

  input, textarea {
    border: 1px solid #ddd;
    padding: 4px;
    width: 100%;
  }

  button {
    border-radius: 4px;
    background: #ddd;
    border: none;
  }

h2,h3,h4,h5,h6 {
  font-family: 'Josefin', sans-serif;
  font-weight:300;
}

h1 {
  font-size: 1.5em;
}

h2 {
  font-size: 1.1em;
}
`
