import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import Modal from "../lib/Modal";
import { useState } from "react";
import { expect, screen, userEvent, within } from "@storybook/test";

const meta = {
  title: "Modal",
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OpenModal: Story = {
  args: {
    title: "테스트",
    isOpen: true,
    onClose: () => {},
    children: <p>모달열림</p>,
  },
  play: async () => {
    expect(screen.getByText("모달열림")).toBeVisible();
  },
};

export const CloseByButton: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(true);

    return <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />;
  },
  args: {
    title: "테스트 모달",
    isOpen: true,
    onClose: () => {},
    children: <p>모달열림</p>,
    hasTopCloseButton: true,
  },
  play: async () => {
    expect(screen.getByText("모달열림")).toBeVisible();

    const closeButton = screen.getByRole("button", { name: "✕" });
    await userEvent.click(closeButton);

    expect(screen.queryByText("모달열림")).not.toBeInTheDocument();
  },
};

export const CloseByOverlayClick: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(true);

    return <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />;
  },
  args: {
    title: "테스트 모달",
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
    title: "테스트 모달",
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
      title="테스트"
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
    <Modal
      title="테스트"
      children={<p>테스트</p>}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      position="center"
    />
  );
};

export const BottomModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal
      title="테스트"
      children={<p>테스트</p>}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      position="bottom"
    />
  );
};

export const ConfirmButtonModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal
      title="테스트"
      children={<p>테스트</p>}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onConfirm={() => setIsOpen(false)}
      primaryButton={true}
      primaryButtonText="확인"
      position="center"
    />
  );
};

export const CloseButtonModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal
      title="테스트"
      children={<p>테스트</p>}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onConfirm={() => setIsOpen(false)}
      primaryButton={true}
      primaryButtonText="확인"
      hasTopCloseButton={false}
      secondaryButton={true}
      secondaryButtonText="닫기"
      position="center"
    />
  );
};
