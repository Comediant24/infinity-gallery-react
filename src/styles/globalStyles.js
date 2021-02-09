import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize};
  body {
    min-width: 320px;
  }
`;

export default GlobalStyle;
