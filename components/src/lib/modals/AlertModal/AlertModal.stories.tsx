import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";

import { useEffect, useState } from "react";
import AlertModal from "./AlertModal";

const meta: Meta<typeof AlertModal> = {
  title: "Modal/AlertModal",
  component: AlertModal,
  argTypes: {
    show: { control: "boolean" },
  },
  args: {
    show: true,
    position: "center",
    background: true,
    gap: 16,
    title: "경고",
    content: "정말로 삭제하시겠습니까?",
  },
  parameters: {
    docs: {
      description: {
        component: "사용자에게 메시지를 전달하고, 확인 버튼 하나만 제공하는 알림 모달입니다.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof AlertModal>;

export const Default: Story = {
  render: (args, { updateArgs }) => {
    const [internalShow, setInternalShow] = useState(args.show);

    useEffect(() => {
      setInternalShow(args.show);
    }, [args.show]);

    const handleHide = () => {
      setInternalShow(false);
      updateArgs?.({ show: false });
    };

    const handleConfirm = () => {
      console.log("✅ 확인 클릭됨!");
      handleHide();
    };

    return <AlertModal {...args} show={internalShow} onHide={handleHide} onConfirm={handleConfirm} />;
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const confirmButton = await canvas.findByRole("button", { name: /확인/i });
    await userEvent.click(confirmButton);
  },
};
