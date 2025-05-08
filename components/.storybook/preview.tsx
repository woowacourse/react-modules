import type { Preview } from "@storybook/react";
import React from "react"; // React 추가
import { Global } from "@emotion/react";
import { resetCss } from "@/styles/reset";

export const decorators = [
  (Story: React.ComponentType) => (
    <>
      <Global styles={resetCss} />
      <Story />
    </>
  ),
];

const preview: Preview = {
  parameters: {
    docs: {
      story: {
        height: "500px",
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
