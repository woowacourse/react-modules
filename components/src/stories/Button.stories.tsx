import { StoryFn, Meta } from "@storybook/react";
import ModalButton from "../lib/components/ModalButton";

const meta: Meta<typeof ModalButton> = {
  title: "ModalButton",
  component: ModalButton,

  tags: ["autodocs"],
  argTypes: {
    buttonSize: {
      description: "모달 제목",
      control: { type: "select", options: ["S", "M", "L", "MAX"] },
    },
    content: {
      description: "모달의 버튼 내용",
      control: "text",
    },

    backgroundColor: {
      description: "버튼 색 설정.",
      color: /(background|color)$/i,
    },

    backgroundHoverColor: {
      description: "버튼에 마우스 hover 시 색 설정",
      color: /(background|color)$/i,
    },
    fontColor: {
      description: "버튼 폰트 색 설정",
      color: /(background|color)$/i,
    },
  },
} as Meta;

export default meta;

export const Template: StoryFn<typeof ModalButton> = (args) => {
  return (
    <>
      <ModalButton
        onClick={() => alert("버튼 클릭")}
        content={args.content}
        buttonSize={args.buttonSize}
      />
    </>
  );
};
