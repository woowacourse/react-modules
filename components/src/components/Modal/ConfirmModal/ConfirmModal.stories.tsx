import "../../../index.css";
import type { Meta, StoryObj } from "@storybook/react";

import { ModalProvider, useModalAction } from "../../../lib";
import { useEffect } from "react";
import ConfirmModal, { Props } from "./ConfirmModal";

const TestModal: React.FC<Props> = (props) => {
  const action = useModalAction();

  useEffect(() => {
    action.handleOpen();
  }, [action]);

  return (
    <>
      <button onClick={action.handleOpen}>모달을 오픈하는 버튼입니다.</button>
      <ConfirmModal {...props} />
    </>
  );
};

function Children() {
  return <div>삭제하면 복구할 수 없습니다.</div>;
}

const meta = {
  title: "ConfirmModal",
  component: TestModal,
  argTypes: {
    title: { name: "모달의 제목" },
    width: { name: "모달의 너비" },
    theme: { name: "색상 테마" },
    children: { name: "버튼 내부 요소" },
  },
  args: {
    title: "삭제하시겠습니까?",
    width: 300,
    children: <Children />,
  },
  decorators: [
    (Story) => (
      <ModalProvider>
        <Story />
      </ModalProvider>
    ),
  ],
} satisfies Meta<typeof ConfirmModal>;

export default meta;

type Story = StoryObj<typeof ConfirmModal>;

export const Default: Story = {
  name: "기본 Confirm 모달",
};

export const ReverseTheme: Story = {
  name: "반대 되는 테마 속성",
  args: {
    theme: window.matchMedia("(prefers-color-scheme: light)").matches ? "dark" : "light",
  },
};

export const ConfirmMessage: Story = {
  name: "확인 버튼 메세지",
  args: {
    confirmMessage: "Confirm",
  },
};

export const TooLongConfirmMessage: Story = {
  name: "확인 버튼 메세지가 매우 길어졌을 경우",
  args: {
    confirmMessage: "확인을할까말까확인을할까말까확인을할까말까확인을할까말까확인을할까말까확인을할까말까",
  },
};

export const CancelMessage: Story = {
  name: "취소 버튼 메세지",
  args: {
    cancelMessage: "Cancel",
  },
};

export const TooLongCancelMessage: Story = {
  name: "취소 버튼 메세지가 매우 길어졌을 경우",
  args: {
    cancelMessage: "취소를할까말까취소를할까말까취소를할까말까취소를할까말까취소를할까말까취소를할까말까취소를할까말까",
  },
};
