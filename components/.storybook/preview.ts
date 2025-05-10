import type { Preview } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
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
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default preview;
