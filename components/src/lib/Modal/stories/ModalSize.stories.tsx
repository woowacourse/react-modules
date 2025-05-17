import type { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";
import Modal from "../..";

const meta: Meta<typeof Modal> = {
  title: "Modal/Size",
  component: Modal,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Modal>;

const ModalSizeStory = ({
  size,
  title,
}: {
  size: "sm" | "md" | "lg";
  title: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        data-testid="trigger-button"
      >
        모달창 trigger
      </button>
      <Modal
        position="center"
        size={size}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <Modal.Header hasCloseButton>{title}</Modal.Header>
        <Modal.Content>모달 내용입니다.</Modal.Content>
        <Modal.Footer>
          <Modal.AlertButton onClick={() => setIsOpen(false)} />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const Small: Story = {
  render: () => <ModalSizeStory size="sm" title="작은 사이즈 모달입니다" />,
};

export const Medium: Story = {
  render: () => <ModalSizeStory size="md" title="중간 사이즈 모달입니다" />,
};

export const Large: Story = {
  render: () => <ModalSizeStory size="lg" title="큰 사이즈 모달입니다" />,
};
