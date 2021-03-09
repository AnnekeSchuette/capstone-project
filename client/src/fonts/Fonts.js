import { createGlobalStyle } from 'styled-components'
import Merriweather300Woff2 from './merriweather/merriweather-v22-latin-300.woff2'
import Merriweather300Woff from './merriweather/merriweather-v22-latin-300.woff'
import Merriweather300Ttf from './merriweather/merriweather-v22-latin-300.ttf'
import Merriweather300Svg from './merriweather/merriweather-v22-latin-300.svg'
import Merriweather300Eot from './merriweather/merriweather-v22-latin-300.eot'

import Merriweather400Woff2 from './merriweather/merriweather-v22-latin-regular.woff2'
import Merriweather400Woff from './merriweather/merriweather-v22-latin-regular.woff'
import Merriweather400Ttf from './merriweather/merriweather-v22-latin-regular.ttf'
import Merriweather400Svg from './merriweather/merriweather-v22-latin-regular.svg'
import Merriweather400Eot from './merriweather/merriweather-v22-latin-regular.eot'

import Merriweather700Woff2 from './merriweather/merriweather-v22-latin-700.woff2'
import Merriweather700Woff from './merriweather/merriweather-v22-latin-700.woff'
import Merriweather700Ttf from './merriweather/merriweather-v22-latin-700.ttf'
import Merriweather700Svg from './merriweather/merriweather-v22-latin-700.svg'
import Merriweather700Eot from './merriweather/merriweather-v22-latin-700.eot'

import Lora400Woff2 from './lora/lora-v17-latin-regular.woff2'
import Lora400Woff from './lora/lora-v17-latin-regular.woff'
import Lora400Ttf from './lora/lora-v17-latin-regular.ttf'
import Lora400Svg from './lora/lora-v17-latin-regular.svg'
import Lora400Eot from './lora/lora-v17-latin-regular.eot'

import Lora600Woff2 from './lora/lora-v17-latin-600.woff2'
import Lora600Woff from './lora/lora-v17-latin-600.woff'
import Lora600Ttf from './lora/lora-v17-latin-600.ttf'
import Lora600Svg from './lora/lora-v17-latin-600.svg'
import Lora600Eot from './lora/lora-v17-latin-600.eot'

import Josefin300Woff2 from './josefin/josefin-sans-v17-latin-300.woff2'
import Josefin300Woff from './josefin/josefin-sans-v17-latin-300.woff'
import Josefin300Ttf from './josefin/josefin-sans-v17-latin-300.ttf'
import Josefin300Svg from './josefin/josefin-sans-v17-latin-300.svg'
import Josefin300Eot from './josefin/josefin-sans-v17-latin-300.eot'

import Josefin400Woff2 from './josefin/josefin-sans-v17-latin-regular.woff2'
import Josefin400Woff from './josefin/josefin-sans-v17-latin-regular.woff'
import Josefin400Ttf from './josefin/josefin-sans-v17-latin-regular.ttf'
import Josefin400Svg from './josefin/josefin-sans-v17-latin-regular.svg'
import Josefin400Eot from './josefin/josefin-sans-v17-latin-regular.eot'

export default createGlobalStyle`
   /* merriweather-300 - latin */
   @font-face {
      font-family: 'Merriweather';
      src: local('Merriweather'), local('Merriweather'),
      url(${Merriweather300Eot}) format('embedded-opentype'),
      url(${Merriweather300Woff2}) format('woff2'),
      url(${Merriweather300Woff}) format('woff'),
      url(${Merriweather300Ttf}) format('truetype'),
      url(${Merriweather300Svg}) format('svg');
      font-weight: 300;
      font-style: normal;
  }

  /* merriweather-regular - latin */
  @font-face {
    font-family: 'Merriweather';
      src: local('Merriweather'), local('Merriweather'),
      url(${Merriweather400Eot}) format('embedded-opentype'),
      url(${Merriweather400Woff2}) format('woff2'),
      url(${Merriweather400Woff}) format('woff'),
      url(${Merriweather400Ttf}) format('truetype'),
      url(${Merriweather400Svg}) format('svg');
    font-style: normal;
    font-weight: 400;
  }

  /* merriweather-700 - latin */
  @font-face {
    font-family: 'Merriweather';
      src: local('Merriweather'), local('Merriweather'),
      url(${Merriweather700Eot}) format('embedded-opentype'),
      url(${Merriweather700Woff2}) format('woff2'),
      url(${Merriweather700Woff}) format('woff'),
      url(${Merriweather700Ttf}) format('truetype'),
      url(${Merriweather700Svg}) format('svg');
    font-style: normal;
    font-weight: 700;
  }

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
