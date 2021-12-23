import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Andika+New+Basic:wght@400;700&display=swap');
    
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Andika New Basic', sans-serif;
    }

    body{
        background: #F9F7F7;
        max-width: 100%;
        font-size: 1.15rem;
        /* overflow-x: hidden; */
    }
`;

export default GlobalStyles;
