import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};

    @font-face {      
      font-family:'NanumBarunpenR';
      src: url('font/NanumBarunpenR.ttf');
    }
    body{      
      font-family:'NanumBarunpenR';
      font-weight:lighter;
      color:#343a40;
    }
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
        font-size:16px;
    }
    
`;

export default GlobalStyles;
