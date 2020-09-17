import React from "react"
import { createGlobalStyle, ThemeProvider} from "styled-components"
import Theme from "./src/themes/theme.js"

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border;
        margin: 0;
        padding: 0;
    }

    body, html {
        font-famaly: ${ props => props.theme.fonts.main };
        height: 100%;
        background-color: ${ props => props.theme.color.light1 };
    }
`

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={Theme}>
        <GlobalStyles />
        { element }
    </ThemeProvider>
)