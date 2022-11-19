import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Noto Sans KR', sans-serif;
    color: ${({ theme }) => theme.colors.black};
  }

  button {
    cursor: pointer;
    border: none;
  }

  input {
    border: none;
  }
`;

export default GlobalStyle;
