import type { Meta, StoryObj } from "@storybook/react";
import Modal from "../lib/Modal";

const meta = {
  title: "Modal",
  component: Modal,
  parameters: {
    docs: {
      description: {
        component:
          "Modal은 위치와 배경 설정이 가능하며, 하위 컴포넌트로 유연하게 구성할 수 있는 재사용 가능한 오버레이 UI입니다.",
      },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ModalComponent: Story = {
  args: {
    show: true,
    onHide: () => {},
    background: true,
    position: "center",
    gap: 16,
    children: (
      <>
        <Modal.Header closeButton>
          <Modal.Title>Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Body</Modal.Body>
        <Modal.Footer>Footer</Modal.Footer>
      </>
    ),
  },

  render: (args) => {
    return (
      <Modal background={args.background} show={args.show} onHide={args.onHide} position={args.position} gap={args.gap}>
        {args.children}
      </Modal>
    );
  },
};
