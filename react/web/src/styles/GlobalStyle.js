import { createGlobalStyle } from "styled-components";
import pixelada from "../font/pixelada/vppixel-simplified-webfont.woff";
import pixelada2 from "../font/pixelada/vppixel-simplified-webfont.woff2";
const GlobalStyle = createGlobalStyle`
    
    @font-face {
    font-family: 'pixelada';
    src: url(${pixelada2}) format('woff2'),
         url(${pixelada}) format('woff');
    font-weight: normal;
    font-style: normal;

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        height: 100vh;
        width: 100vw;
        font-family: 'Poppins', sans-serif;
        background-color: var(--grey100);
        overflow: hidden;
    }

    :root {
        --grey100: #F5F7FA;
        --grey200: #D2D4D6;
        --grey300: #7D7E80;
        --grey400: #4B4B4D;
        --grey500: #1E1E1F;

        --label: #343232;

        --warning: #7F55F6;
        --success: #45B572;
        --danger: #FF3326;

        --yellow: #FFCB05;
        --blue: #3B5CA8;

        /* light mode */
        --bg--light: var(--grey100);
        --txt--light: var(--grey500);
        --txtsecondary--light: var(--grey300);
        --header--light: var(--yellow);
        --labels--light: var(--label);
    

      /* dark mode */
        --bg--dark: var(--grey500);
        --txt--dark: var(--yellow);
        --txtsecondary--dark: var(--grey300);
        --header--dark: var(--grey400);
        --label--dark: var(--grey100);
    }
    justify-items: center;
    @media(prefers-color-scheme: dark){
        :root {
            --bg--dark: var(--grey500);
            --txt--dark: var(--yellow);
            --txtsecondary--dark: var(--grey300);
            --header--dark: var(--grey400);
            --label--dark: var(--grey100);
            color-scheme: dark;
        }
    }

    :root[color-scheme="dark"]{
            --bg--dark: var(--grey500);
            --txt--dark: var(--yellow);
            --txtsecondary--dark: var(--grey300);
            --header--dark: var(--grey400);
            --label--dark: var(--grey100);
            color-scheme: dark;
    }

    @media (prefers-color-scheme: light) {
        :root {
            --bg--light: var(--grey100);
            --txt--light: var(--grey500);
            --txtsecondary--light: var(--grey300);
            --header--light: var(--yellow);
            --labels--light: var(--label);
            color-scheme: light;
        }
    } 
    
    :root[color-scheme="light"]{
            --bg--light: var(--grey100);
            --txt--light: var(--grey500);
            --txtsecondary--light: var(--grey300);
            --header--light: var(--yellow);
            --labels--light: var(--label);
            color-scheme: light;
    }

    .active-link{
        font-weight: 600;
        border-bottom: 2px solid var(--grey500);
        width: 100px;
        text-align: center;
    }

    .curretpage {
        background-color: #FF3326;
        color: white;
    }

`;

export default GlobalStyle;