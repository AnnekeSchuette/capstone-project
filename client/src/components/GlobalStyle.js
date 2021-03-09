import { createGlobalStyle } from 'styled-components'
import '../fonts/Fonts'

export default createGlobalStyle`
  * {
    box-sizing: border-box
  }

  body {
    margin: 0;
    font-family: sans-serif;
    font-size: 112.5%;
    line-height: 1.5;
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
    border: 2px solid #ddd;
    padding: 4px;
    width: 100%;
  }

  button {
    border-radius: 4px;
    background: #ddd;
    border: none;
  }
`
