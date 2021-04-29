import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --space-xxsmall: 5px;
    --space-xsmall: 10px;
    --space-small: 15px;
    --space-medium: 25px;
    --space-large: 35px;
    --space-xlarge: 50px;

    --color-ghost-white: #fbfbff;
    --color-cadet-grey: #9eb3c2;
    --color-midnight-blue: #04135e;
    --color-midnight-blue-light: #ebecf5;
    --color-oxford-blue: #010b3d;
    --color-popstar: #b84a62;
    --color-candy-pink: #e26e7d;

    --color-text: var(--color-oxford-blue);
    --color-background:var(--color-oxford-blue);
    --color-highlight: var(--color-popstar);
    --color-highlight-light: var(--color-candy-pink);
    --color-disabled: var(--color-cadet-grey);
  }

  * {
    box-sizing: border-box
  }

  html{
    height: -webkit-fill-available;
  }

  body {
    margin: 0;
    font-family: 'Josefin', sans-serif;
    font-weight: 300;
    font-size: 112.5%;
    line-height: 1.5;
    padding:0;
    background:var(--color-background);
    min-height: 100vh;
    min-height: -webkit-fill-available;

    @media screen and (min-width:667px){
      max-width:667px;
      margin:0 auto;
    }
  }

  input, button, textarea {
    font-family: inherit;
    font-size: 0.9em;

    &:focus {
      outline: none;
      border-color: transparent;
      box-shadow: 0 0 4px 1px var(--color-midnight-blue);
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
  margin:0;
}

h1 {
  font-size: 1.5em;
}

h2 {
    font-size: 1.3em;
    text-align: center;
}

p {

  &:first-child {margin-top:0;}
}

dl {
  font-size: 0.8em;
}

a {
  &:visited,
  :hover,
  :focus {
    color: var(--color-oxford-blue);
  }
}
`
