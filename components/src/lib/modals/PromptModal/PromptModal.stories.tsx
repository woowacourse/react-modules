import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import PromptModal from "./PromptModal";

const meta: Meta<typeof PromptModal> = {
  title: "Modal/PromptModal",
  component: PromptModal,
  argTypes: {
    show: { control: "boolean" },
  },
  args: {
    show: true,
    position: "center",
    background: true,
    gap: 16,
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
    const handleHide = () => {
      updateArgs?.({ show: false });
    };

    const handleConfirm = () => {
      console.log("✅ 입력 완료!");
      updateArgs?.({ show: false });
    };

    return (
      <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <PromptModal {...args} onHide={handleHide} onConfirm={handleConfirm} />
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
