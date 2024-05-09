import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DesignModal } from "../index";

const meta = {
  title: "DesignModalExample",
  component: DesignModal,
  parameters: {
    docs: {
      description: {
        component: "모달 컴포넌트",
      },
    },
  },
  argTypes: {
    type: {
      description: "modal의 타입 (alert, confirm, prompt)",
    },
    size: {
      description: "modal의 사이즈",
    },
    title: {
      description: "modal의 제목",
    },
    children: {
      description: "modal의 내용",
    },
    confirmClick: {
      description: "'확인' 버튼, 사용자가 특정 action을 추가하거나 modal을 닫게 함",
    },
    cancelClick: {
      description: "(optional) '취소' 버튼, 사용자가 특정 action을 추가하거나 modal을 닫게 함",
    },
  },

  decorators: [
    (Story, context) => {
      const [openModal, setOpenModal] = React.useState(false);
      const confirmClick = () => {
        alert("확인 버튼 클릭 성공");
        setOpenModal(false);
      };

      const cancelClick = () => {
        setOpenModal(false);
      };

      return (
        <div>
          <button onClick={() => setOpenModal(true)}>모달 열기</button>
          {openModal && <Story args={{ ...context.args, confirmClick, cancelClick }} />}
        </div>
      );
    },
  ],
} satisfies Meta<typeof DesignModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ConfirmSmallModal: Story = {
  args: {
    type: "confirm",
    size: "small",
    children: "ConfirmModal 입니다.",
    title: "ConfirmModal",
    confirmClick: () => {},
    cancelClick: () => {},
  },
};

export const AlertMediumModal: Story = {
  args: {
    type: "alert",
    size: "medium",
    children: "AlertModal 입니다.",
    title: "AlertModal",
    confirmClick: () => {},
  },
};

export const PromptLargeModal: Story = {
  args: {
    type: "prompt",
    size: "large",
    children: "PromptModal 입니다.",
    title: "PromptModal",
    confirmClick: () => {},
    cancelClick: () => {},
  },
};
