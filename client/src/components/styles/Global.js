import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
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
