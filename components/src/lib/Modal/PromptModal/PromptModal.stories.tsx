import React, { ChangeEventHandler } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import PromptModal from "./PromptModal";

const meta = {
  title: "Modal/Prompt",
  component: PromptModal,
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
    inputValue: {
      description: "입력값",
    },
    handleInputChange: {
      description: "입력값 변경 함수",
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
      const [inputValue, setInputValue] = React.useState("");
      const closeModal = () => setOpenModal(false);
      const clickConfirm = () => alert("확인 버튼 클릭 완료!");
      const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) =>
        setInputValue(e.target.value);

      return (
        <div>
          <button onClick={() => setOpenModal(true)}>모달 열기</button>
          {openModal && (
            <Story
              args={{ ...context.args, closeModal, clickConfirm, inputValue, handleInputChange }}
            />
          )}
        </div>
      );
    },
  ],
} satisfies Meta<typeof PromptModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CenterImgModal: Story = {
  args: {
    closeModal: () => {},
    modalTitle: "prompt 모달 제목",
    inputValue: "",
    handleInputChange: () => {},
    clickConfirm: () => {},
  },
};
