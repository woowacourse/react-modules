import type { Preview } from "@storybook/react";
import GlobalStyles from "../src/style/global";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/style/theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];

export default preview;
