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

export const Small: Story = {
  args: {
    position: "center",
    size: "sm",
  },
  render: function Render(args) {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <button onClick={() => setIsOpen((prev) => !prev)} id="trigger-button">
          모달창 trigger
        </button>
        <Modal
          {...args}
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <Modal.Header hasCloseButton>작은 사이즈 모달입니다,</Modal.Header>
          <Modal.Content>모달 내용입니다.</Modal.Content>
          <Modal.Footer>
            <Modal.AlertButton onClick={() => setIsOpen(false)} />
          </Modal.Footer>
        </Modal>
      </>
    );
  },
};

export const Medium: Story = {
  args: {
    position: "center",
    size: "md",
  },
  render: function Render(args) {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <button onClick={() => setIsOpen((prev) => !prev)} id="trigger-button">
          모달창 trigger
        </button>
        <Modal
          {...args}
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <Modal.Header hasCloseButton>중간 사이즈 모달입니다,</Modal.Header>
          <Modal.Content>모달 내용입니다.</Modal.Content>
          <Modal.Footer>
            <Modal.AlertButton onClick={() => setIsOpen(false)} />
          </Modal.Footer>
        </Modal>
      </>
    );
  },
};

export const Large: Story = {
  args: {
    position: "center",
    size: "lg",
  },
  render: function Render(args) {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <button onClick={() => setIsOpen((prev) => !prev)} id="trigger-button">
          모달창 trigger
        </button>
        <Modal
          {...args}
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <Modal.Header hasCloseButton>큰 사이즈 모달입니다,</Modal.Header>
          <Modal.Content>모달 내용입니다.</Modal.Content>
          <Modal.Footer>
            <Modal.AlertButton onClick={() => setIsOpen(false)} />
          </Modal.Footer>
        </Modal>
      </>
    );
  },
};
