import type { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";
import Modal from "../..";

const meta: Meta<typeof Modal> = {
  title: "Modal/Dialog",
  component: Modal,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Modal>;

export const AlertModal: Story = {
  args: {
    position: "center",
  },
  render: function Render(args) {
    const [isOpen, setIsOpen] = useState(false);
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
          <Modal.Header>Alert Modal 입니다</Modal.Header>
          <Modal.Content>
            사용자에게 메시지를 전달하고 확인 버튼만 제공합니다.
          </Modal.Content>
          <Modal.Footer>
            <Modal.AlertButton onClick={() => setIsOpen(false)} />
          </Modal.Footer>
        </Modal>
      </>
    );
  },
};

export const ConfirmModal: Story = {
  args: {
    position: "center",
  },
  render: function Render(args) {
    const [isOpen, setIsOpen] = useState(false);
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
          <Modal.Header>Confirm Modal 입니다</Modal.Header>
          <Modal.Content>
            사용자에게 선택지를 제공하고 확인 및 취소 버튼을 제공합니다
          </Modal.Content>
          <Modal.Footer>
            <Modal.ConfirmButton
              onConfirm={() => window.alert("확인 버튼을 눌렀습니다")}
              onCancel={() => setIsOpen(false)}
            />
          </Modal.Footer>
        </Modal>
      </>
    );
  },
};

export const PromptModal: Story = {
  args: {
    position: "center",
  },
  render: function Render(args) {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState("");
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
          <Modal.Header>Prompt Modal 입니다</Modal.Header>
          <Modal.Content>
            사용자로부터 입력값을 받을 수 있는 입력 필드와 확인/최소 버튼을
            제공합니다
            <Modal.InputPrompt
              placeholder="input"
              value={value}
              onChange={(e) => setValue((e.target as HTMLInputElement).value)}
            />
          </Modal.Content>
          <Modal.Footer>
            <Modal.ConfirmButton
              onConfirm={() => window.alert("확인 버튼을 눌렀습니다")}
              onCancel={() => setIsOpen(false)}
            />
          </Modal.Footer>
        </Modal>
      </>
    );
  },
};
