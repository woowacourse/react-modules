import Modal from "./Modal";

import { StoryObj, Meta } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "모달 컴포넌트",
      },
    },
  },
  argTypes: {
    isOpen: {
      control: "boolean",
      default: true,
      description: "모달의 상태",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    onClose: {
      description: "modal을 열고 닫기 위한 핸들러 함수",
    },
    style: {
      control: "object",
      table: {
        type: {
          summary: "object",
        },
      },
      description: "모달 스타일을 자유롭게 정의하는 속성",
    },
    position: {
      control: { type: "radio" },
      options: ["top", "bottom", "center"],
      description: "모달 위치를 페이지 상단, 중앙, 하단으로 선택하는 속성",
    },
  },
  args: {
    onClose: fn(),
  },
  render: ({ style, ...args }) => {
    return (
      <Modal style={style} {...args}>
        <Modal.ModalContent style={style}>
          <span>올리와 썬데이의 기본 모달</span>
        </Modal.ModalContent>
      </Modal>
    );
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

export const 기본: Story = {
  parameters: {
    docs: {
      description: {
        story: "내용만 있는 기본 모달",
      },
    },
  },
  args: {
    isOpen: true,
    position: "center",
  },
};

export const 제목이있는모달: Story = {
  args: {
    isOpen: true,
    position: "center",
  },
  parameters: {
    docs: {
      description: {
        story: "제목이 있는 모달",
      },
    },
  },
  render: (args) => (
    <Modal {...args}>
      <Modal.ModalHeader>
        <Modal.ModalTitle>올리와 썬데이</Modal.ModalTitle>
      </Modal.ModalHeader>
      <Modal.ModalContent>
        <span>올리와 썬데이의 제목이 있는 모달</span>
      </Modal.ModalContent>
    </Modal>
  ),
};

export const 상단닫기버튼이있는모달: Story = {
  args: {
    isOpen: true,
    position: "center",
    onClose: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: "상단 닫기 버튼이 있는 모달",
      },
    },
  },

  render: (args) => (
    <Modal isOpen={args.isOpen} onClose={args.onClose} position={args.position}>
      <Modal.ModalHeader>
        <Modal.ModalTitle>올리와 썬데이</Modal.ModalTitle>
        <Modal.ModalCloseButton onClick={args.onClose}>
          X
        </Modal.ModalCloseButton>
      </Modal.ModalHeader>
      <Modal.ModalContent>
        <span>올리와 썬데이의 상단 닫기 버튼이 있는 모달</span>
      </Modal.ModalContent>
    </Modal>
  ),
};

export const 하단닫기버튼이있는모달: Story = {
  args: {
    isOpen: true,
    position: "center",
    onClose: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: "하단 닫기 버튼이 있는 모달",
      },
    },
  },

  render: (args) => (
    <Modal isOpen={args.isOpen} onClose={args.onClose} position={args.position}>
      <Modal.ModalHeader>
        <Modal.ModalTitle>올리와 썬데이</Modal.ModalTitle>
      </Modal.ModalHeader>
      <Modal.ModalContent>
        <span>올리와 썬데이의 하단 닫기 버튼이 있는 모달</span>
      </Modal.ModalContent>
      <Modal.ModalFooter>
        <Modal.ModalLongButton>확인</Modal.ModalLongButton>
      </Modal.ModalFooter>
    </Modal>
  ),
};
