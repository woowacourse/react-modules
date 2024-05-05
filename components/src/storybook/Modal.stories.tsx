import type { Meta, StoryObj } from "@storybook/react";
import { ModalProps } from "../components/Modal/Modal";

import { Modal, ModalProvider, useModalAction } from "../lib";
import { useEffect } from "react";

const TestModal: React.FC<ModalProps> = (props) => {
  const action = useModalAction();

  useEffect(() => {
    action.handleOpen();
  }, [action]);

  return (
    <>
      <button onClick={action.handleOpen}>모달을 오픈하는 버튼입니다.</button>
      <Modal {...props} />
    </>
  );
};

const meta = {
  title: "Modal",
  component: TestModal,
  argTypes: {
    position: { name: "모달의 위치" },
    title: { name: "모달의 제목" },
    theme: { name: "모달의 색상 테마" },
    closeButtonPosition: { name: "닫기 버튼의 위치" },
    hasConfirmButton: { name: "확인 버튼의 유무" },
  },
  decorators: [
    (Story) => (
      <ModalProvider>
        <Story />
      </ModalProvider>
    ),
  ],
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
    closeButtonPosition: "top",
    hasConfirmButton: false,
    children: <Component />,
    onConfirm: () => console.log("확인"),
    onClose: () => console.log("닫기"),
  },
};

export const ConfirmButton: Story = {
  name: "확인 버튼이 나타난다.",
  args: {
    position: "center",
    title: "modal title",
    closeButtonPosition: "top",
    hasConfirmButton: true,
    children: <Component />,
    onConfirm: () => console.log("확인"),
    onClose: () => console.log("닫기"),
  },
};

export const CloseButtonBottom: Story = {
  name: "취소 버튼이 아래에 나타난다",
  args: {
    position: "center",
    title: "modal title",
    closeButtonPosition: "bottom",
    hasConfirmButton: true,
    children: <Component />,
    onConfirm: () => console.log("확인"),
    onClose: () => console.log("닫기"),
  },
};

export const LongTitle: Story = {
  name: "타이틀에 긴 문자열이 들어갈 경우",
  args: {
    position: "center",
    title: "modal title blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah",
    closeButtonPosition: "top",
    hasConfirmButton: true,
    children: <Component />,
    onConfirm: () => console.log("확인"),
    onClose: () => console.log("닫기"),
  },
};

export const CustomWidth: Story = {
  name: "width값을 지정한 경우. position이 bottom일 경우 적용되지 않는다.",
  args: {
    position: "center",
    title: "modal title",
    width: 555,
    closeButtonPosition: "top",
    hasConfirmButton: true,
    children: <Component />,
    onConfirm: () => console.log("확인"),
    onClose: () => console.log("닫기"),
  },
};
