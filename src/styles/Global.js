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
    src: url(${LatoThin});
}
@font-face {
    font-family: Lato;
    font-weight: 300;
    src: url(${LatoLight});
}

@font-face {
    font-family: Lato;
    font-weight: normal;
    src: url(${LatoRegular});
}

@font-face {
    font-family: Lato;
    font-weight: 500;
    src: url(${LatoBold});
}
@font-face {
    font-family: Lato;
    font-weight: 700;
    src: url(${LatoBlack});
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
`

export default GlobalStyle;