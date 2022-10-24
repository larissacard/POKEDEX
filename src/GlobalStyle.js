import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        height: 100vh;
        width: 100vw;
        font-family: 'Poppins', sans-serif;
        background-color: var(--grey500);
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

`;

export default GlobalStyle;