import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
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
