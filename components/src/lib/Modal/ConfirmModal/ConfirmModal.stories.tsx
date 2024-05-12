// import "soosoo-react-payments-components/dist/style.css";
// import { ConfirmModal } from "soosoo-react-payments-components";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import ConfirmModal from "./ConfirmModal";
// import "../../index.css";

const meta = {
  title: "ConfirmModal",
  component: ConfirmModal,
  parameters: {
    docs: {
      description: {
        component: "ConfirmModal",
      },
    },
  },
} satisfies Meta<typeof ConfirmModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    position: "center",
    size: "medium",
    title: { position: "left", content: "🍀호프를 삭제하시겠습니까?🍀" },
    isOpen: true,
    onConfirm: fn(),
    onCancel: fn(),
    children: "삭제하면 복구하실 수 없습니다.",
  },
};
