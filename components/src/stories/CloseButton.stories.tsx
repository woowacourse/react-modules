import type { Meta, StoryObj } from "@storybook/react";
import CloseButton from "../lib/Modal/CloseButton/CloseButton";

const meta = {
  title: "CloseButton",
  component: CloseButton,

  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "desktop",
    },
  },
} satisfies Meta<typeof CloseButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onCloseButtonClick: () => {
      console.log("Button clicked");
    },
  },
};
