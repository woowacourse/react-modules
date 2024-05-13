import type { Meta, StoryObj } from "@storybook/react";
// import { Modal } from "chlwlstlf-modal";
import { Modal } from "../lib";
import { fn } from "@storybook/test";

const meta = {
  title: "Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "1000px", height: "700px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "모달 열림 상태",
    },
    type: {
      options: ["alert", "confirm", "prompt", "default"],
      control: { type: "radio" },
      description: "모달 타입",
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
      description: "모달 컨테이너 크기",
    },
    position: {
      options: ["center", "bottom"],
      control: { type: "radio" },
      description: "모달 컨테이너 위치",
    },
    className: {
      control: "text",
      description: "모달 컨테이너의 클래스명",
    },
    zIndex: {
      control: "number",
      description: "모달 컨테이너의 z-index",
    },
    children: {
      description: "모달 컨테이너 내용",
    },
    portalRoot: {
      control: ["HTMLElement", "null"],
      description: "스크롤 막고자하는 요소",
    },
  },
  args: {
    onClose: fn(),
    onConfirm: fn(),
    onCancel: fn(),
    onSubmit: fn(),
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    type: "default",
    size: "medium",
    position: "center",
    children: [
      <>
        <Modal.Title>제목</Modal.Title>
        <Modal.CloseButton></Modal.CloseButton>
        <div>모달 content</div>
        <Modal.Button variant="primary">동의하고 저장하기</Modal.Button>
        <Modal.Button variant="secondary">닫기</Modal.Button>
      </>,
    ],
  },
};

export const 모달_타입_변경: Story = {
  args: {
    isOpen: true,
    onClose: fn(),
    type: "default",
  },
  parameters: {
    docs: {
      description: {
        story: "모달의 타입을 변경하는 스토리입니다.",
      },
    },
  },
  argTypes: {
    type: {
      options: ["alert", "confirm", "prompt", "default"],
      control: { type: "radio" },
    },
  },
  render: (args) => (
    <Modal
      isOpen={args.isOpen}
      onClose={args.onClose}
      type={args.type}
    >
      <Modal.Title>모달 타입 변경 스토리</Modal.Title>
      <Modal.Message>모달의 타입은 {args.type}입니다.</Modal.Message>
      {args.type === "prompt" && <Modal.Message>prompt는 보통 submit을 할 때 쓰입니다.</Modal.Message>}
    </Modal>
  ),
};

export const 모달_크기_변경: Story = {
  args: {
    isOpen: true,
    onClose: fn(),
    size: "medium",
  },
  parameters: {
    docs: {
      description: {
        story: "모달의 크기를 변경하는 스토리입니다.",
      },
    },
  },
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
  },
  render: (args) => (
    <Modal
      isOpen={args.isOpen}
      onClose={args.onClose}
      size={args.size}
    >
      <Modal.Title>모달 크기 변경 스토리</Modal.Title>
      <Modal.Message>모달의 크기는 {args.size}입니다.</Modal.Message>
      <Modal.Message>모달의 크기는 반응형에서 활용할 수 있습니다.</Modal.Message>
    </Modal>
  ),
};

export const 모달_위치_변경: Story = {
  args: {
    isOpen: true,
    onClose: fn(),
    position: "center",
  },
  parameters: {
    docs: {
      description: {
        story: "모달의 위치를 변경하는 스토리입니다.",
      },
    },
  },
  argTypes: {
    position: {
      options: ["center", "bottom"],
      control: { type: "radio" },
    },
  },
  render: (args) => (
    <Modal
      isOpen={args.isOpen}
      onClose={args.onClose}
      position={args.position}
    >
      <Modal.Title>모달 위치 변경 스토리</Modal.Title>
      <Modal.Message>모달의 위치는 {args.position}입니다.</Modal.Message>
    </Modal>
  ),
};
