import type { Meta, StoryObj } from "@storybook/react";
import Modal from "../lib/Modal/Modal";
import { useState } from "react";
import { expect, screen, userEvent } from "@storybook/test";

const meta = {
  title: "Modal",
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OpenModal: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    children: <p>모달열림</p>,
  },
  play: async () => {
    expect(screen.getByText("모달열림")).toBeVisible();
  },
};

export const CloseByOverlayClick: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(true);

    return <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />;
  },
  args: {
    isOpen: true,
    onClose: () => {},
    children: <p>모달열림</p>,
  },
  play: async () => {
    expect(screen.getByText("모달열림")).toBeVisible();

    const overlay = screen.getByTestId("modal-overlay");
    await userEvent.click(overlay);

    expect(screen.queryByText("모달열림")).not.toBeInTheDocument();
  },
};

export const CloseByEsc: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(true);

    return <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />;
  },
  args: {
    isOpen: true,
    onClose: () => {},
    children: <p>모달열림</p>,
  },
  play: async () => {
    expect(screen.getByText("모달열림")).toBeVisible();

    await userEvent.keyboard("{Escape}");

    expect(screen.queryByText("모달열림")).not.toBeInTheDocument();
  },
};

export const Default = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onConfirm={() => setIsOpen(false)}
      children={<p>테스트</p>}
    />
  );
};

export const CenterModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} position="center">
      <Modal.Header>테스트 제목</Modal.Header>
      <Modal.Body>
        <p>모달열림</p>
      </Modal.Body>
      <Modal.Footer>
        <Modal.SecondaryButton>확인</Modal.SecondaryButton>
      </Modal.Footer>
    </Modal>
  );
};

export const BottomModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onConfirm={() => setIsOpen(false)}
      position="bottom"
    >
      <Modal.Header>테스트 제목</Modal.Header>
      <Modal.Body>
        <p>모달열림</p>
      </Modal.Body>
      <Modal.Footer>
        <Modal.SecondaryButton>확인</Modal.SecondaryButton>
      </Modal.Footer>
    </Modal>
  );
};

export const ConfirmButtonModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onConfirm={() => setIsOpen(false)}
      position="center"
    >
      <Modal.Header>테스트 제목</Modal.Header>
      <Modal.Body>
        <p>모달열림</p>
      </Modal.Body>
      <Modal.Footer>
        <Modal.SecondaryButton>확인</Modal.SecondaryButton>
      </Modal.Footer>
    </Modal>
  );
};

export const CloseButtonModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onConfirm={() => setIsOpen(false)}
      position="center"
    >
      <Modal.Header>테스트 제목</Modal.Header>
      <Modal.Body>
        <p>모달열림</p>
      </Modal.Body>
      <Modal.Footer>
        <Modal.PrimaryButton>취소</Modal.PrimaryButton>
      </Modal.Footer>
    </Modal>
  );
};
