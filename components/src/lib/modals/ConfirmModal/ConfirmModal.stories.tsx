import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import ConfirmModal from "./ConfirmModal";

const meta: Meta<typeof ConfirmModal> = {
  title: "Modal/ConfirmModal",
  component: ConfirmModal,
  argTypes: {
    show: { control: "boolean" },
  },
  args: {
    show: true,
    position: "center",
    background: true,
    title: "정말로 삭제하시겠습니까?",
    content: "이 작업은 되돌릴 수 없습니다.",
  },
  parameters: {
    docs: {
      description: {
        component: "사용자에게 확인/취소 선택을 제공하는 모달입니다.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ConfirmModal>;

export const Default: Story = {
  render: (args, { updateArgs }) => {
    const handleHide = () => {
      updateArgs?.({ show: false });
    };

    const handleConfirm = () => {
      console.log("✅ 확인 버튼이 클릭되었습니다.");
      updateArgs?.({ show: false });
    };

    return (
      <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <ConfirmModal {...args} onHide={handleHide} onConfirm={handleConfirm} />
      </div>
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const confirmButton = await canvas.findByRole("button", { name: /확인/i });
    await userEvent.click(confirmButton);
  },
};
