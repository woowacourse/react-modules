import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "../lib";

const meta = {
  title: "Modal",
  component: Modal,
  argTypes: {
    position: { name: "모달의 위치. center 혹은 bottom 값" },
    title: { name: "모달의 제목" },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

const Component = () => {
  return <div>child입니다.</div>;
};

export const Default: Story = {
  name: "기본 모달",
  args: {
    position: "center",
    title: "modal title",
    children: <Component />,
    onConfirm: () => console.log("확인"),
    onClose: () => console.log("닫기"),
    closeButtonPosition: "top",
    hasConfirmButton: false,
  },
};

export const ConfirmButton: Story = {
  name: "확인 버튼이 나타난다.",
  args: {
    position: "center",
    title: "modal title",
    children: <Component />,
    onConfirm: () => console.log("확인"),
    onClose: () => console.log("닫기"),
    closeButtonPosition: "top",
    hasConfirmButton: true,
  },
};

export const CloseButtonBottom: Story = {
  name: "취소 버튼이 아래에 나타난다",
  args: {
    position: "center",
    title: "modal title",
    children: <Component />,
    onConfirm: () => console.log("확인"),
    onClose: () => console.log("닫기"),
    closeButtonPosition: "bottom",
    hasConfirmButton: true,
  },
};

export const LongTitle: Story = {
  name: "타이틀에 긴 문자열이 들어갈 경우",
  args: {
    position: "center",
    title:
      "modal title blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah",
    children: <Component />,
    onConfirm: () => console.log("확인"),
    onClose: () => console.log("닫기"),
    closeButtonPosition: "top",
    hasConfirmButton: true,
  },
};
