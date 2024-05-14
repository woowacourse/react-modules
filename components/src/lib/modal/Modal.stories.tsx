import Modal from "./Modal";
import AlertModal from "./AlertModal";
import ConfirmModal from "./ConfirmModal";
import PromptModal from "./PromptModal";

import { StoryObj, Meta } from "@storybook/react";
import { fn } from "@storybook/test";
import { action } from "@storybook/addon-actions";

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
    size: {
      control: { type: "radio" },
      options: ["S", "M", "L"],
      description: "모달의 크기(너비)를 조정하는 속성",
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

export const 제목이_있는_모달: Story = {
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

export const 상단_닫기_버튼이_있는_모달: Story = {
  args: {
    isOpen: true,
    size: "M",
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
    <Modal
      isOpen={args.isOpen}
      onClose={args.onClose}
      size={"M"}
      position={args.position}
    >
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

export const 하단_닫기_버튼이_있는_모달: Story = {
  args: {
    isOpen: true,
    size: "M",
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
    <Modal
      isOpen={args.isOpen}
      onClose={args.onClose}
      size={"M"}
      position={args.position}
    >
      <Modal.ModalHeader>
        <Modal.ModalTitle>올리와 썬데이</Modal.ModalTitle>
      </Modal.ModalHeader>
      <Modal.ModalContent>
        <span>올리와 썬데이의 하단 닫기 버튼이 있는 모달</span>
      </Modal.ModalContent>
      <Modal.ModalFooter align={"center"}>
        <Modal.ModalButton size={"L"} onClick={args.onClose}>
          확인
        </Modal.ModalButton>
      </Modal.ModalFooter>
    </Modal>
  ),
};

export const S_사이즈_모달: Story = {
  args: {
    isOpen: true,
    size: "S",
    position: "center",
    onClose: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: "S 사이즈 모달",
      },
    },
  },

  render: (args) => (
    <Modal
      isOpen={args.isOpen}
      onClose={args.onClose}
      size={"S"}
      position={args.position}
    >
      <Modal.ModalHeader>
        <Modal.ModalTitle>작은 사이즈의 모달!</Modal.ModalTitle>
      </Modal.ModalHeader>
      <Modal.ModalContent>
        <span>작은 모달</span>
      </Modal.ModalContent>
      <Modal.ModalFooter align={"center"}>
        <Modal.ModalButton size={"L"} onClick={args.onClose}>
          확인
        </Modal.ModalButton>
      </Modal.ModalFooter>
    </Modal>
  ),
};

export const M_사이즈_모달: Story = {
  args: {
    isOpen: true,
    size: "M",
    position: "center",
    onClose: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: "M 사이즈 모달",
      },
    },
  },

  render: (args) => (
    <Modal
      isOpen={args.isOpen}
      onClose={args.onClose}
      size={"M"}
      position={args.position}
    >
      <Modal.ModalHeader>
        <Modal.ModalTitle>보통 사이즈의 모달!</Modal.ModalTitle>
      </Modal.ModalHeader>
      <Modal.ModalContent>
        <span>평범한 모달</span>
      </Modal.ModalContent>
      <Modal.ModalFooter align={"center"}>
        <Modal.ModalButton size={"L"} onClick={args.onClose}>
          확인
        </Modal.ModalButton>
      </Modal.ModalFooter>
    </Modal>
  ),
};

export const L_사이즈_모달: Story = {
  args: {
    isOpen: true,
    size: "L",
    position: "center",
    onClose: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: "L 사이즈 모달",
      },
    },
  },

  render: (args) => (
    <Modal
      isOpen={args.isOpen}
      onClose={args.onClose}
      size={"L"}
      position={args.position}
    >
      <Modal.ModalHeader>
        <Modal.ModalTitle>큰 사이즈의 모달!</Modal.ModalTitle>
      </Modal.ModalHeader>
      <Modal.ModalContent>
        <span>큰 모달</span>
      </Modal.ModalContent>
      <Modal.ModalFooter align={"center"}>
        <Modal.ModalButton size={"L"} onClick={args.onClose}>
          확인
        </Modal.ModalButton>
      </Modal.ModalFooter>
    </Modal>
  ),
};

export const 알림_모달: Story = {
  args: {
    isOpen: true,
    size: "M",
    position: "center",
    onClose: fn(),
  },

  parameters: {
    docs: {
      description: {
        story: "M 사이즈 AlertModal",
      },
    },
  },

  render: (args) => {
    return (
      <AlertModal
        isOpen={args.isOpen}
        onClose={args.onClose}
        title={"아이디를 입력해 주세요."}
        content={"아이디는 필수로 입력해야 합니다."}
        size={"M"}
        position={args.position}
      ></AlertModal>
    );
  },
};

export const 제목이_없는_알림_모달: Story = {
  args: {
    isOpen: true,
    size: "M",
    position: "center",
    onClose: fn(),
  },

  parameters: {
    docs: {
      description: {
        story: "title 없는 AlertModal",
      },
    },
  },

  render: (args) => {
    return (
      <AlertModal
        isOpen={args.isOpen}
        onClose={args.onClose}
        content={"아이디는 필수로 입력해야 합니다."}
        size={"M"}
        position={args.position}
      ></AlertModal>
    );
  },
};

export const 확인_모달: Story = {
  args: {
    isOpen: true,
    size: "M",
    position: "center",
    onClose: fn(),
  },

  parameters: {
    docs: {
      description: {
        story: "M 사이즈 ConfirmModal",
      },
    },
  },

  render: (args) => {
    return (
      <ConfirmModal
        isOpen={args.isOpen}
        onClose={args.onClose}
        title={"카드를 삭제하시겠습니까?"}
        content={"삭제하면 복구하실 수 없습니다."}
        size={"M"}
        position={args.position}
        onConfirm={action("confirm-button-click")}
      ></ConfirmModal>
    );
  },
};

export const 입력_모달: Story = {
  args: {
    isOpen: true,
    size: "M",
    position: "center",
    onClose: fn(),
  },

  parameters: {
    docs: {
      description: {
        story: "M 사이즈 PromptModal",
      },
    },
  },

  render: (args) => {
    return (
      <PromptModal
        isOpen={args.isOpen}
        onClose={args.onClose}
        labelText={["쿠폰 번호를 입력해 주세요."]}
        htmlFor={["coupon"]}
        inputType={["text"]}
        size={args.size}
        position={args.position}
      />
    );
  },
};

export const 입력이_3개인_모달: Story = {
  args: {
    isOpen: true,
    size: "M",
    position: "center",
    onClose: fn(),
  },

  parameters: {
    docs: {
      description: {
        story: "Input 필드가 3개인 PromptModal",
      },
    },
  },

  render: (args) => {
    return (
      <PromptModal
        isOpen={args.isOpen}
        onClose={args.onClose}
        labelText={[
          "아이디를 입력해 주세요.",
          "비밀번호를 입력해 주세요.",
          "비밀번호를 확인해주세요.",
        ]}
        htmlFor={["id", "pwd", "re-pwd"]}
        inputType={["text", "password", "password"]}
        size={args.size}
        position={args.position}
      />
    );
  },
};
