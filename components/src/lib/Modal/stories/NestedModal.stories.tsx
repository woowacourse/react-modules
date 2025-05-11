import type { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";
import Modal from "../..";

const meta: Meta<typeof Modal> = {
  title: "Modal/Nested",
  component: Modal,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Modal>;

export const NestedModal: Story = {
  args: {
    position: "center",
  },
  render: function Render(args) {
    const [isOpen, setIsOpen] = useState(false);
    const [isNestedOpen, setIsNestedOpen] = useState(false);

    return (
      <>
        <button onClick={() => setIsOpen((prev) => !prev)}>
          모달창 trigger
        </button>
        <Modal
          {...args}
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <Modal.Header>중첩된 부모 모달창</Modal.Header>
          <Modal.Content>
            <button onClick={() => setIsNestedOpen((prev) => !prev)}>
              2번째 모달창 trigger
            </button>
            <Modal
              {...args}
              isOpen={isNestedOpen}
              onClose={() => {
                setIsNestedOpen(false);
              }}
            >
              <Modal.Header>중첩된 자식 모달창</Modal.Header>
              <Modal.Content>중첩된 모달창 내용</Modal.Content>
            </Modal>
          </Modal.Content>
        </Modal>
      </>
    );
  },
};
