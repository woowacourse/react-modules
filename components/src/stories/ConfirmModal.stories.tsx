import type { Meta, StoryObj } from "@storybook/react";
import ConfirmModal from "../Modal/variants/ConfirmModal/ConfirmModal";

const meta: Meta<typeof ConfirmModal> = {
  title: "Components/ConfirmModal",
  component: ConfirmModal,
};
export default meta;

type Story = StoryObj<typeof ConfirmModal>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
  },
  render: (args) => (
    <ConfirmModal
      {...args}
      title="Confirm 모달"
      content="Confirm 모달 내용입니다."
    />
  ),
};
