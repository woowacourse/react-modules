import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ConfirmModal from "./ConfirmModal";

const meta = {
  title: "Modal/Confirm",
  component: ConfirmModal,
  parameters: {
    docs: {
      description: {
        component: "확인 모달 컴포넌트",
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
    clickConfirm: {
      description: "확인 버튼 클릭했을 때 action",
    },
    confirmButtonText: {
      description: "확인 버튼 텍스트",
    },
    cancelButtonText: {
      description: "취소 버튼 텍스트",
    },
  },

  decorators: [
    (Story, context) => {
      const [openModal, setOpenModal] = React.useState(false);
      const closeModal = () => setOpenModal(false);
      const clickConfirm = () => alert("확인 버튼 클릭 완료!");

      return (
        <div>
          <button onClick={() => setOpenModal(true)}>모달 열기</button>
          {openModal && <Story args={{ ...context.args, closeModal, clickConfirm }} />}
        </div>
      );
    },
  ],
} satisfies Meta<typeof ConfirmModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CenterImgModal: Story = {
  args: {
    closeModal: () => {},
    modalTitle: "Confirm 모달 제목",
    modalContents: "내요오오오오오옹",
    clickConfirm: () => {},
  },
};
