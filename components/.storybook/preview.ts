import type { Preview } from "@storybook/react";
import "../src/reset.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    story: {
      inline: false,
      iframeHeight: 700,
    },
  },
};

export default preview;
