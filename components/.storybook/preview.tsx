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
      canvas: {
        iframeHeight: 700,
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
