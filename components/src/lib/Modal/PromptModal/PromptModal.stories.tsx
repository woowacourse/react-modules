// import "soosoo-react-payments-components/dist/style.css";
// import { PromptModal } from "soosoo-react-payments-components";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import PromptModal from "./PromptModal";
// import "../../index.css";

const meta = {
  title: "PromptModal",
  component: PromptModal,
  parameters: {
    docs: {
      description: {
        component: "PromptModal",
      },
    },
  },
} satisfies Meta<typeof PromptModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    position: "center",
    title: { position: "left", content: "🍀호프 번호를 입력해 주세요.🍀" },
    isOpen: true,
    onConfirm: fn(),
    onCancel: fn(),
  },
};
