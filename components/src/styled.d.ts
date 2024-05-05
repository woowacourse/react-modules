import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      white: string;
      grey: string;
      lightGrey: string;
      darkGrey: string;
      black: string;
    };
  }
}
