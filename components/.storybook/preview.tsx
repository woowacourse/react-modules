import type { Preview } from "@storybook/react";
import { Global } from "@emotion/react";
import { resetCss } from "@/styles/reset";

export const decorators = [
  (Story) => (
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
        height: "700px",
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
