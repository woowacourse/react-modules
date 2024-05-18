import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Button from "../lib/Modal/Button/Button";

const meta = {
  title: "Button",
  component: Button,

  parameters: {
    layout: "fullscreen",
    controls: { exclude: "children" },
    viewport: {
      defaultViewport: "desktop",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "dark",
    size: "large",
    onClick: () => {
      console.log("Button clicked");
    },
    children: <span>닫기</span>,
  },
};
