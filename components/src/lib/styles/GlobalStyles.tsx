import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
      }
    `}
  />
);

export default GlobalStyles;
