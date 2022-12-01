import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      grey: string;
      primary: string;
      disabled: string;
      tag: string;
      placeholder: string;
    };
    margin: string;
  }
}
