import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        body: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        background: none;
        outline: none;
        border: none;
    }
    body{
        background: #284f8f;
    }
`

export default GlobalStyle
