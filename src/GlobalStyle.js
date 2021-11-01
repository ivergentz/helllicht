import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

:root {

    --orange: #ec6842;
    --grey:   #333333;
    --blue: #204569;

}

body {
    margin: 0;
    padding: 0;
    font-size: 117.5%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

`
