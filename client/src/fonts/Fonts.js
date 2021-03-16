import { createGlobalStyle } from 'styled-components'

import Lora400Woff2 from 'fonts/lora/lora-v17-latin-regular.woff2'
import Lora400Woff from 'fonts/lora/lora-v17-latin-regular.woff'
import Lora400Ttf from 'fonts/lora/lora-v17-latin-regular.ttf'
import Lora400Svg from 'fonts/lora/lora-v17-latin-regular.svg'
import Lora400Eot from 'fonts/lora/lora-v17-latin-regular.eot'

import Lora600Woff2 from 'fonts/lora/lora-v17-latin-600.woff2'
import Lora600Woff from 'fonts/lora/lora-v17-latin-600.woff'
import Lora600Ttf from 'fonts/lora/lora-v17-latin-600.ttf'
import Lora600Svg from 'fonts/lora/lora-v17-latin-600.svg'
import Lora600Eot from 'fonts/lora/lora-v17-latin-600.eot'

import Josefin300Woff2 from 'fonts/josefin/josefin-sans-v17-latin-300.woff2'
import Josefin300Woff from 'fonts/josefin/josefin-sans-v17-latin-300.woff'
import Josefin300Ttf from 'fonts/josefin/josefin-sans-v17-latin-300.ttf'
import Josefin300Svg from 'fonts/josefin/josefin-sans-v17-latin-300.svg'
import Josefin300Eot from 'fonts/josefin/josefin-sans-v17-latin-300.eot'

import Josefin400Woff2 from 'fonts/josefin/josefin-sans-v17-latin-regular.woff2'
import Josefin400Woff from 'fonts/josefin/josefin-sans-v17-latin-regular.woff'
import Josefin400Ttf from 'fonts/josefin/josefin-sans-v17-latin-regular.ttf'
import Josefin400Svg from 'fonts/josefin/josefin-sans-v17-latin-regular.svg'
import Josefin400Eot from 'fonts/josefin/josefin-sans-v17-latin-regular.eot'

export default createGlobalStyle`

  /* lora-regular - latin */
  @font-face {
    font-family: 'Lora';
    src: local('Lora'), local('Lora'),
      url(${Lora400Eot}) format('embedded-opentype'),
      url(${Lora400Woff2}) format('woff2'),
      url(${Lora400Woff}) format('woff'),
      url(${Lora400Ttf}) format('truetype'),
      url(${Lora400Svg}) format('svg');
    font-style: normal;
    font-weight: 400;
  }

  /* lora-600 - latin */
  @font-face {
    font-family: 'Lora';
    src: local('Lora'), local('Lora'),
      url(${Lora600Eot}) format('embedded-opentype'),
      url(${Lora600Woff2}) format('woff2'),
      url(${Lora600Woff}) format('woff'),
      url(${Lora600Ttf}) format('truetype'),
      url(${Lora600Svg}) format('svg');
    font-style: normal;
    font-weight: 600;
  }
  /* josefin-300 - latin */
  @font-face {
      font-family: 'Josefin';
      src: local('Josefin'), local('Josefin'),
      url(${Josefin300Eot}) format('embedded-opentype'),
      url(${Josefin300Woff2}) format('woff2'),
      url(${Josefin300Woff}) format('woff'),
      url(${Josefin300Ttf}) format('truetype'),
      url(${Josefin300Svg}) format('svg');
      font-weight: 300;
      font-style: normal;
  }
  /* josefin-regular - latin */
  @font-face {
    font-family: 'Josefin';
    src: local('Josefin'), local('Josefin'),
      url(${Josefin400Eot}) format('embedded-opentype'),
      url(${Josefin400Woff2}) format('woff2'),
      url(${Josefin400Woff}) format('woff'),
      url(${Josefin400Ttf}) format('truetype'),
      url(${Josefin400Svg}) format('svg');
    font-style: normal;
    font-weight: 400;
  }
`
