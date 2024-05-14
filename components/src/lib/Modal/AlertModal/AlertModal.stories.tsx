import { Meta, StoryObj } from "@storybook/react";

import AlertModal from "./AlertModal";

const meta = {
  title: "Modal/AlertModal",

  component: AlertModal,

  parameters: {
    controls: { exclude: ["isOpen", "onClose", "children"] },
  },

  argTypes: {
    position: {
      options: ["top", "center", "bottom"],
      control: {
        type: "radio",
      },
    },

    size: {
      options: ["full", "large", "medium", "small"],
      control: {
        type: "radio",
      },
    },

    device: {
      options: ["desktop", "tablet", "mobile"],
      control: {
        type: "radio",
      },
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof AlertModal>;

export default meta;

type Story = StoryObj<typeof AlertModal>;

export const Default: Story = {
  args: {
    title: "아이디를 입력해 주세요",
    alertText: "아이디는 필수로 입력해야 합니다.",
    isOpen: true,
  },
};
