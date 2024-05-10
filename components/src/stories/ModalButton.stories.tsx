import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import ModalButton from "../lib/Modal/ModalButton";
import { fn } from "@storybook/test";

const meta = {
  title: "ModalButton",

  component: ModalButton,

  parameters: {
    layout: "centered",
  },

  argTypes: {
    theme: {
      options: ["dark", "white"],
      control: {
        type: "radio",
      },
    },

    size: {
      options: ["small", "medium", "large", "xLarge"],
      control: {
        type: "radio",
      },
    },

    width: {
      options: ["full", "fit", "fixed"],
      control: {
        type: "radio",
      },
    },
  },

  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof ModalButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Button_Story_Playground: Story = {
  parameters: {
    docs: {
      description: {
        story: "모달 컴포넌트 내부의 모달 버튼 컴포넌트 ",
      },
    },
  },

  args: {
    children: "Button",
  },

  render: (args) => (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ModalButton onClick={args.onClick} {...args}>
        {args.children}
      </ModalButton>
    </div>
  ),
};
