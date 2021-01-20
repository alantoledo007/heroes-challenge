import { createGlobalStyle } from 'styled-components';

import { colors } from './theme'

import LatoThin from './fonts/Lato/Lato-Thin.ttf';
import LatoLight from './fonts/Lato/Lato-Light.ttf'
import LatoRegular from './fonts/Lato/Lato-Regular.ttf'
import LatoBold from './fonts/Lato/Lato-Bold.ttf'
import LatoBlack from './fonts/Lato/Lato-Black.ttf'

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: Lato;
    font-weight: 100;
    src:local('Lato') local('sans serif') url(${LatoThin}) format('truetype');
}
@font-face {
    font-family: Lato;
    font-weight: 300;
    src:local('Lato') local('sans serif') url(${LatoLight}) format('truetype');
}

@font-face {
    font-family: Lato;
    font-weight: normal;
    src:local('Lato') local('sans serif') url(${LatoRegular}) format('truetype');
}

@font-face {
    font-family: Lato;
    font-weight: 500;
    src:local('Lato') local('sans serif') url(${LatoBold}) format('truetype');
}
@font-face {
    font-family: Lato;
    font-weight: 900;
    src:local('Lato') local('sans serif') url(${LatoBlack}) format('truetype');
}

html {
    width: 100%;
    height: 100%; 
    scroll-behavior: smooth;
}

body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: Lato;
    font-size: 16px;
    font-weight: normal;
    color: ${colors.dark};
}

strong, 
.--strong {
    font-weight: 500;
}

.text-center {
  text-align:center;
}

::-webkit-scrollbar{
  width: 15px;
  appearance: none;
}
::-webkit-scrollbar-thumb {
  background: ${colors.white};
  border-radius: 7.5px;
  position:absolute;
  border: 3px solid ${colors.primary};
  box-shadow: -1px 2px 0 ${colors.primary};
}

.mt {
  margin-top: 40px;
}

.mb {
  margin-bottom: 40px;
}

/* Animaciones */
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.fast {
  -webkit-animation-duration: 0.4s;
  animation-duration: 0.4s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fadeIn {
  animation-name: fadeIn;
}
`

export default GlobalStyle;