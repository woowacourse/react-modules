import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./index";

const meta = {
  title: "Component/Modal",
  component: Modal,
  tags: ["autodocs"],
  args: {
    onClose: () => {},
    position: "center",
  },
  subcomponents: {
    Header: Modal.Header,
    Title: Modal.Title,
    CloseButton: Modal.CloseButton,
    Content: Modal.Content,
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Modal {...args}>
      <Modal.Header>
        <Modal.Title>모달 타이틀</Modal.Title>
        <Modal.CloseButton onClick={args.onClose} />
      </Modal.Header>
      <Modal.Content>
        <p>모달 컨텐츠</p>
      </Modal.Content>
    </Modal>
  ),
};

export const BottomPosition: Story = {
  render: (args) => (
    <Modal {...args} position="bottom">
      <Modal.Header>
        <Modal.Title>모달 타이틀</Modal.Title>
        <Modal.CloseButton onClick={args.onClose} />
      </Modal.Header>
      <Modal.Content>
        <p>모달 컨텐츠</p>
      </Modal.Content>
    </Modal>
  ),
};

export const CustomHeader: Story = {
  render: (args) => (
    <Modal {...args}>
      <Modal.Header>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ color: "blue", fontSize: "24px" }}>🔔</span>
          <Modal.Title>커스텀 헤더 예제</Modal.Title>
        </div>
        <Modal.CloseButton onClick={args.onClose} />
      </Modal.Header>
      <Modal.Content>
        <p>커스텀 헤더 예제</p>
      </Modal.Content>
    </Modal>
  ),
};
