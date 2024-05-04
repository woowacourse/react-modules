import type { Meta, StoryObj } from "@storybook/react";
import Modal from "../Modal";

const meta = {
  title: "Modal",
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: "모달 컴포넌트",
      },
    },
  },
  argTypes: {
    position: {
      description: "modal의 위치",
    },
    modalSize: {
      description: "modal의 크기",
    },
    closeButton: {
      description: "modal을 닫는 closeButton의 형태",
    },
    closeModal: {
      description: "modal을 닫을 떄의 action",
    },
    title: {
      description: "modal의 제목",
    },
    children: {
      description: "modal의 내용",
    },
    buttonText: {
      description: "(optional) button의 text",
    },
    buttonClick: {
      description: "(optional) 버튼을 클릭했을 때 action",
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CenterImgModal: Story = {
  args: {
    position: "center",
    children: "칠드런",
    closeButton: "img",
    closeModal: () => {},
    title: "제목임",
    buttonText: "버튼임",
    buttonClick: () => {},
  },
};

export const BottomTextModal: Story = {
  args: {
    position: "bottom",
    children: "칠드런",
    modalSize: "m",
    closeButton: "text",
    closeModal: () => {},
    title: "제목임",
    buttonText: "버튼임",
    buttonClick: () => {},
  },
};
