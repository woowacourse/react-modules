import { Meta, StoryObj } from "@storybook/react";
import PromptModal from "./PromptModal";

const meta = {
  title: "Modal/PromptModal",

  component: PromptModal,

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
} satisfies Meta<typeof PromptModal>;

export default meta;

type Story = StoryObj<typeof PromptModal>;

export const Default: Story = {
  args: {
    title: "쿠폰 번호를 입력해 주세요",
    isOpen: true,
  },
};
