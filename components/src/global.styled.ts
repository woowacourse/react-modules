import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  body {
    line-height: 1.2;
  }
`;

export default GlobalStyle;
