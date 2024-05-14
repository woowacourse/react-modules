import type { Meta, StoryObj } from "@storybook/react";
// import { Modal } from "chlwlstlf-modal";
import { Modal } from "../lib";
import { fn } from "@storybook/test";
import { useState } from "react";

const meta = {
  title: "Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story, context) => {
      const [isOpen, setIsOpen] = useState(false);

      const handleClose = () => {
        setIsOpen(false);
      };

      return (
        <>
          <button onClick={() => setIsOpen(true)}>Open Modal</button>
          <div style={{ width: "1000px", height: "700px" }}>
            {isOpen && (
              <Story
                {...context}
                args={{
                  ...context.args,
                  isOpen: isOpen,
                  onClose: handleClose,
                }}
              />
            )}
          </div>
        </>
      );
    },
  ],

  argTypes: {
    isOpen: {
      control: "boolean",
      description: "모달 열림 상태",
    },
    onClose: {
      action: "closed",
      description: "모달을 닫을 때 호출되는 함수",
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
      description: "모달 컨테이너에 추가할 CSS 클래스 이름",
    },
    zIndex: {
      control: "number",
      description: "모달의 스택 순서 설정",
    },
    children: {
      description: "모달 컨테이너 내용",
    },
    portalRoot: {
      control: ["HTMLElement", "null"],
      description: "스크롤 막고자하는 요소",
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
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
    onClose: fn(),
  },
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
