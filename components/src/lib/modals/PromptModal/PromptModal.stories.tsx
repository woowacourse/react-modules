import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import PromptModal from "./PromptModal";
import { useState } from "react";

const meta: Meta<typeof PromptModal> = {
  title: "Modal/PromptModal",
  component: PromptModal,
  argTypes: {
    show: { control: "boolean" },
  },
  args: {
    show: true,
    position: "center",
    showBackdrop: true,
    title: "입력해주세요",
    content: "사용자 이름을 입력해주세요",
  },
  parameters: {
    docs: {
      description: {
        component: "사용자로부터 입력을 받을 수 있는 프롬프트 모달입니다.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PromptModal>;

export const Default: Story = {
  render: (args, { updateArgs }) => {
    const [value, setValue] = useState("");

    const handleHide = () => {
      updateArgs?.({ show: false });
    };

    const handleConfirm = () => {
      console.log("✅ 입력 완료:", value);
      updateArgs?.({ show: false });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <PromptModal {...args} onHide={handleHide} onConfirm={handleConfirm} onChange={handleChange} value={value} />
      </div>
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = await canvas.findByRole("textbox");
    await userEvent.type(input, "기린");

    const confirmButton = await canvas.findByRole("button", { name: /확인/i });
    await userEvent.click(confirmButton);
  },
};
