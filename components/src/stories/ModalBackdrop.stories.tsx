import type { Meta, StoryObj } from "@storybook/react";

import BackDrop from "../lib/Modal/BackDrop/BackDrop";

const meta = {
  title: "BackDrop",
  component: BackDrop,

  parameters: {
    layout: "fullscreen",
    controls: { exclude: "children" },
    viewport: {
      defaultViewport: "desktop",
    },
  },
} satisfies Meta<typeof BackDrop>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClose: () => {
      console.log("backdrop clicked");
    },
  },
};
