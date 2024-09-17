import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 16px;
  }

  ::-webkit-scrollbar-thumb {
    border: 5px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: 10px;
    background-color: ${(p) => p.theme.palette.scrollbarBackgroundColor};
  }

  html,
  body,
  #root {
    height: 100%;
    user-select: none;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    background-color: ${(p) => p.theme.palette.base};
  }
  
  .margin-center {
    margin-right: auto;
    margin-left: auto;
  }
  
  .disabled {
    pointer-events: none;
    touch-action: none;
    opacity: 0.5;
  }

  .cursor-pointer {
    cursor: pointer;
  }
`;

export default GlobalStyles;
