import type { Meta, StoryObj } from "@storybook/react";
import PromptModal, { defaultInputAttributes } from "./index";

const meta = {
  title: "Component/PromptModal",
  component: PromptModal,
  tags: ["autodocs"],
  args: {
    title: "PromptModal Title",
    size: "medium",
    inputAttributes: defaultInputAttributes,
    onRequestClose: () => {},
    onSubmit: () => {},
  },
} satisfies Meta<typeof PromptModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
