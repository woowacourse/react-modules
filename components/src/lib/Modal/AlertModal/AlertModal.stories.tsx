import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import AlertModal from "./AlertModal";

const meta = {
  title: "Modal/Alert",
  component: AlertModal,
  parameters: {
    docs: {
      description: {
        component: "기본 모달 컴포넌트",
      },
    },
  },
  argTypes: {
    modalTitle: {
      description: "모달 헤더의 텍스트",
    },
    modalContents: {
      description: "모달 내용",
    },
    modalSize: {
      description: "modal의 크기",
      control: { type: "radio" },
      options: ["s", "m", "l"],
    },
    closeModal: {
      description: "modal을 닫을 떄의 action",
    },
    confirmButtonText: {
      description: "확인 버튼 텍스트",
    },
  },

  decorators: [
    (Story, context) => {
      const [openModal, setOpenModal] = React.useState(false);
      const closeModal = () => setOpenModal(false);

      return (
        <div>
          <button onClick={() => setOpenModal(true)}>모달 열기</button>
          {openModal && <Story args={{ ...context.args, closeModal }} />}
        </div>
      );
    },
  ],
} satisfies Meta<typeof AlertModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CenterImgModal: Story = {
  args: {
    closeModal: () => {},
    modalTitle: "Alert 모달 제목",
    modalContents: "내요오오오오오옹",
  },
};
