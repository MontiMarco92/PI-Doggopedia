import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    :root{
        /* colors */

        --text: #112d4e;
        --text2: #393e46;
        --scrollbar-track: #3f72af;
        --scrollbar-hover: #0f4c75;
        --white: #fff;
        --green: #ADC2A9;
        --bg: #F7F7F7;
        --nav: #5584AC;
        --filter: #dbe2ef;
        --filter2: #F5EEDC;
        --errorMsg: #f6416c;
        --purple: #6639a6;
        --black: #000000;
        --border-black: #1a1a1a;
        
    }

    @import url('https://fonts.googleapis.com/css2?family=Andika+New+Basic:wght@400;700&display=swap');
    
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Andika New Basic', sans-serif;
    }

    html{
        height: 100%;
    }
    body{
        background: #F9F7F7;
        font-size: 1rem;
        overflow: auto;
    }
    #root, body{
        min-height: 100vh;
        display:flex;
        flex-direction: column;
        
    }
`;

export default GlobalStyles;
