import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { useModal } from "../lib/Modal";
import { Modal } from "../lib/Modal/Modal";
import { ModalProps } from "../lib/Modal/ModalType";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  tags: ["autodocs"],
  component: Modal,
  parameters: {
    docs: {
      source: {
        state: "open",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "400px", height: "200px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    modalPosition: {
      description: "모달의 위치",
      control: {
        type: "radio",
        options: ["center", "bottom"],
      },
    },
    title: {
      description: "모달의 제목",
    },
    closeButtonPosition: {
      description: "닫기 버튼의 위치",
      control: {
        type: "radio",
        options: ["top", "bottom"],
      },
    },
    children: {
      description: "모달의 내용",
      control: {
        type: "text",
      },
    },
    size: {
      description: "모달의 크기",
      control: {
        type: "radio",
        options: ["small", "medium", "large"],
      },
    },
    modalType: {
      description: "모달의 타입",
      control: {
        type: "radio",
        options: ["confirm", "alert", "prompt"],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const Template: Story = {
  render: (args: ModalProps) => {
    const { closeModal } = useModal();

    return (
      <Modal {...args} isOpen={true} onClose={closeModal}>
        {args.children}
      </Modal>
    );
  },
};

export const 기본_모달: Story = {
  ...Template,
  args: {
    modalPosition: "center",
    title: "모달 제목",
    closeButtonPosition: "top",
    children: "모달 내용",
    isOpen: false,
    size: "small",
  },
};

export const 중앙에_위치한_모달에_상단_X닫기_버튼: Story = {
  ...Template,
  args: {
    modalPosition: "center",
    title: "중앙에 위치한 모달",
    closeButtonPosition: "top",
    children: "이것은 중앙에 위치한 모달의 내용입니다.",
    isOpen: true,
  },
};

export const 중앙에_위치한_모달에_하단_사각형닫기_버튼: Story = {
  ...Template,
  args: {
    modalPosition: "center",
    title: "중앙에 위치한 모달",
    closeButtonPosition: "bottom",
    children:
      "이것은 중앙에 위치한 모달의 내용입니다. 이것은 중앙에 위치한 모달의 내용입니다. 이것은 중앙에 위치한 모달의 내용입니다. 이것은 중앙에 위치한 모달의 내용입니다. 이것은 중앙에 위치한 모달의 내용입니다. 이것은 중앙에 위치한 모달의 내용입니다. 이것은 중앙에 위치한 모달의 내용입니다.",
    isOpen: true,
  },
};

export const 하단에_위치한_모달메_상단_X닫기_버튼: Story = {
  ...Template,
  args: {
    modalPosition: "bottom",
    title: "하단에 위치한 모달",
    closeButtonPosition: "top",
    children:
      "이것은 하단에 위치한 모달의 내용입니다. 이것은 하단에 위치한 모달의 내용입니다. 이것은 하단에 위치한 모달의 내용입니다. 이것은 하단에 위치한 모달의 내용입니다.",
    isOpen: true,
  },
};

export const 하단에_위치한_모달메_하단_사각형닫기_버튼: Story = {
  ...Template,
  args: {
    modalPosition: "bottom",
    title: "하단에 위치한 모달",
    closeButtonPosition: "bottom",
    children: "이것은 하단에 위치한 모달의 내용입니다.",
    isOpen: true,
  },
};

export const 중앙에_위치한_small_모달: Story = {
  ...Template,
  args: {
    modalPosition: "center",
    title: "중앙에 위치한 small 모달",
    closeButtonPosition: "bottom",
    children: "이것은 중앙에 위치한 small 사이즈 모달의 내용입니다.",
    isOpen: true,
    size: "small",
  },
};

export const 중앙에_위치한_medium_모달: Story = {
  ...Template,
  args: {
    modalPosition: "center",
    title: "중앙에 위치한 medium 모달",
    closeButtonPosition: "bottom",
    children: "이것은 중앙에 위치한 medium 사이즈 모달의 내용입니다.",
    isOpen: true,
    size: "medium",
  },
};

export const 중앙에_위치한_large_모달: Story = {
  ...Template,
  args: {
    modalPosition: "center",
    title: "중앙에 위치한 large 모달",
    closeButtonPosition: "bottom",
    children: "이것은 중앙에 위치한 large사이즈 모달의 내용입니다.",
    isOpen: true,
    size: "large",
  },
};

export const 중앙에_위치한_alert_모달: Story = {
  ...Template,
  args: {
    modalPosition: "center",
    title: "Alert 모달",
    closeButtonPosition: "bottom",
    children: "이것은 중앙에 위치한 Alert 모달의 내용입니다.",
    isOpen: true,
    modalType: "alert",
  },
};

export const 중앙에_위치한_confirm_모달: Story = {
  ...Template,
  args: {
    modalPosition: "center",
    title: "Confirm 모달",
    children: "이것은 중앙에 위치한 Confirm 모달의 내용입니다.",
    isOpen: true,
    modalType: "confirm",
  },
};

export const 중앙에_위치한_prompt_모달: Story = {
  ...Template,
  args: {
    modalPosition: "center",
    title: "Prompt 모달",
    children: "이것은 중앙에 위치한 Prompt 모달의 내용입니다.",
    isOpen: true,
    modalType: "prompt",
  },
};
