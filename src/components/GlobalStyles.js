import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};

    @font-face {      
      font-family:'NanumBarunpenR';
      font-weight:400;
      src:
      url('/font/NanumBarunpenR.woff') format('woff'),
      url('/font/NanumBarunpenR.otf') format('otf'),
      url('/font/NanumBarunpenR.ttf') format('truetype');
    }
    
    @font-face {      
      font-family:'NanumBarunpenB';
      font-weight:600;
      src:
      url('/font/NanumBarunpenB.woff') format('woff'),
      url('/font/NanumBarunpenB.otf') format('otf'),
      url('/font/NanumBarunpenB.ttf') format('truetype');
    }
    
    @font-face {
      font-family:'NanumBarunGothicUltraLight' ;
      src: url('/font/NanumBarunGothicUltraLight.otf') format('otf'),
      url('/font/NanumBarunGothicUltraLight.ttf') format('ttf'),
      ;
    }

    body{
	    background-color: rgba(0, 0, 0, 0.02);      
      font-family:'NanumBarunGothicUltraLight';
      font-weight:400;
      letter-spacing: -10px;
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
    }
    textarea{
      font-family: "NanumBarunpenR";
    }
    button{
      font-family:'NanumBarunpenR';
      letter-spacing: -0.5px;
    }
    header{
      font-family: "NanumBarunpenB";
    }
    #Login{
      font-family: "NanumBarunpenR";
    }
    #Signin{
      font-family: "NanumBarunpenR";
    }
`;

export default GlobalStyles;
