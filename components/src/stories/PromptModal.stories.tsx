import type { Meta, StoryObj } from "@storybook/react";
import PromptModal from "../lib/PromptModal/PromptModal";
import { useState, ChangeEvent } from "react";

const meta: Meta<typeof PromptModal> = {
  title: "Components/PromptModal",
  component: PromptModal,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof PromptModal>;

export const Interactive: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
      setValue(e.target.value);

    return (
      <PromptModal {...args} inputValue={value} onChangeInput={handleChange} />
    );
  },
  args: {
    isModalOpen: true,
    title: "아이디를 입력해 주세요.",
    onClose: () => {},
  },
};
