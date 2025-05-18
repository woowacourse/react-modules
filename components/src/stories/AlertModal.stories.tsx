import type { Meta, StoryObj } from "@storybook/react";
import { AlertModal } from "../Modal/variants/AlertModal/AlertModal";

const meta: Meta<typeof AlertModal> = {
  title: "Components/AlertModal",
  component: AlertModal,
};
export default meta;

type Story = StoryObj<typeof AlertModal>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: "Alert 모달",
    content: "Alert 모달 내용을 확인하시겠습니까?",
  },
  render: (args) => <AlertModal {...args} />,
};
