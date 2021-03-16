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
 
<<<<<<< HEAD
      font-family:'NanumBarunpenR';
=======
>>>>>>> 53475f028ad5630d0f6b2e5ddd39850668de16fb
        box-sizing:border-box;
        font-size:16px;
    }
    
`;

export default GlobalStyles;
