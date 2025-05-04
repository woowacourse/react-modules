import type { Preview } from "@storybook/react";
import { Global } from "@emotion/react";
import { resetCss } from "@/styles/reset";
import {
  MINIMAL_VIEWPORTS,
  INITIAL_VIEWPORTS,
} from "@storybook/addon-viewport";

export const decorators = [
  (Story) => (
    <>
      <Global styles={resetCss} />
      <Story />
    </>
  ),
];

const customViewports = {
  largePC: {
    name: "Large PC",
    styles: {
      width: "1920px",
      height: "1080px",
    },
    type: "desktop",
  },
  mediumPC: {
    name: "Medium PC",
    styles: {
      width: "1366px",
      height: "768px",
    },
    type: "desktop",
  },
  tabletLandscape: {
    name: "Tablet Landscape",
    styles: {
      width: "1024px",
      height: "768px",
    },
    type: "tablet",
  },
};

const preview: Preview = {
  parameters: {
    docs: {
      story: {
        height: "700px",
      },
    },
    viewport: {
      viewports: {
        ...customViewports,
        ...MINIMAL_VIEWPORTS,
        ...INITIAL_VIEWPORTS,
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
