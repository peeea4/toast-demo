import { createGlobalStyle } from "styled-components";

import { COLOR, FONT_COLOR, FONT_SIZE } from "./styles";

export const GlobalStyles = createGlobalStyle`
* {

    margin: 0;
    padding: 0;

    box-sizing: border-box;
    
    font-family: "Montserrat";

    font-size: ${FONT_SIZE.default};

    color: ${FONT_COLOR.default};
}

html, body {
    width: 100%;
    height: 100%;
}

body {  
    & > #root {
        width: 100%;
        height: 100%;
        background-color: ${COLOR.default};
    }
}

body {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

h1 {
    padding: 0;
    margin: 0;
}

#modal-root {
    position: absolute;
    top: 0;
    left: 0;
}
`;
