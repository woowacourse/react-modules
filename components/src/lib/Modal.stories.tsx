import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./index";
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
    customStyle: {
      control: "object",
      description: "모달 컨테이너 인라인 스타일",
    },
    portalRoot: {
      control: ["HTMLElement", "null"],
      description: "스크롤 막고자하는 요소",
    },
  },
  args: {
    onClose: fn(),
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

const children = (
  <>
    <Modal.Title>제목</Modal.Title>
    <Modal.CloseButton></Modal.CloseButton>
    <div>모달 content</div>
    <Modal.Button variant="primary">동의하고 저장하기</Modal.Button>
    <Modal.Button variant="secondary">닫기</Modal.Button>
  </>
);

export const Default: Story = {
  args: {
    isOpen: true,
    position: "center",
    children: children,
  },
};
