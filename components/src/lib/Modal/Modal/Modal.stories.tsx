import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";

const meta = {
  title: "Modal/Default",
  component: Modal,
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
    position: {
      description: "modal의 위치",
    },
    modalSize: {
      description: "modal의 크기",
    },
    closeModal: {
      description: "modal을 닫을 떄의 action",
    },
    children: {
      description: "modal의 내용",
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
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CenterImgModal: Story = {
  args: {
    position: "center",
    children: "칠드런",
    closeModal: () => {},
    modalTitle: "기본 모달이에용",
  },
};

export const BottomTextModal: Story = {
  args: {
    position: "bottom",
    children: "칠드런",
    modalSize: "m",
    closeModal: () => {},
    modalTitle: "제목임",
  },
};
