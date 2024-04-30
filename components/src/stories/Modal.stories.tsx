import { Meta, StoryObj } from "@storybook/react";
import Modal from "../lib/Modal";

const meta = {
  title: "Modal",
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    onClick: () => {},
    title: "예시 제목",
    buttonText: "확인 버튼",
    position: "center",
  },
};
