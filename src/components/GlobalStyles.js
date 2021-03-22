import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};

    @font-face {      
      font-family:'NanumBarunpenR';
      src: url('/font/NanumBarunpenR.ttf') format('truetype');
    }
    body{      
      font-family:'NanumBarunpenR';
      font-weight:lighter;
      color:#343a40;
	    letter-spacing: 0.5px;
    }
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
        font-size:16px;
    }
    input{
      font-family: "NanumBarunpenR";
	    letter-spacing: 0.5px;
    }
    textarea{
      font-family: "NanumBarunpenR";
    }
`;

export default GlobalStyles;
