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
    }

    :root {
        --grey100: #F5F7FA;
        --grey200: #D2D4D6;
        --grey300: #7D7E80;
        --grey400: #4B4B4D;
        --grey500: #1E1E1F;

        --warning: #7F55F6;
        --success: #45B572;
        --danger: #FF3326;

        --yellow: #FFCB05;
        --blue: #3B5CA8;
    }

`;

export default GlobalStyle;