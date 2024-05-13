import type { Meta, StoryObj } from "@storybook/react";
import { ModalProps } from "./Modal";

import { Modal, ModalProvider, useModalAction } from "../../lib";
import { useEffect } from "react";
import { ModalWidth } from "./constant";

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

const Component = () => {
  return <div>child입니다.</div>;
};

const DEFAULT_PROPS_OBJ = {
  position: "center",
  title: "modal title",
  closeButtonPosition: "top",
  hasConfirmButton: false,
  children: <Component />,
  confirmMessage: "동의하고 계속하기",
  cancelMessage: "닫기",
  theme: "light",
  onConfirm: () => console.log("확인"),
  onClose: () => console.log("닫기"),
} as const;

const meta = {
  title: "Modal",
  component: TestModal,
  argTypes: {
    position: { name: "모달의 위치" },
    title: { name: "모달의 제목" },
    theme: { name: "모달의 색상 테마" },
    closeButtonPosition: { name: "닫기 버튼의 위치" },
    hasConfirmButton: { name: "확인 버튼의 유무" },
    confirmMessage: { name: "확인 버튼의 내부 요소. 메세지" },
    cancelMessage: { name: "취소 버튼의 내부 요소. 메세지" },
  },
  args: DEFAULT_PROPS_OBJ,
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

export const Default: Story = {
  name: "기본 모달",
};

export const ConfirmButton: Story = {
  name: "확인 버튼이 나타난다.",
  args: {
    hasConfirmButton: true,
  },
};

export const CloseButtonBottom: Story = {
  name: "취소 버튼이 아래에 나타난다",
  args: {
    closeButtonPosition: "bottom",
  },
};

export const LongTitle: Story = {
  name: "타이틀에 긴 문자열이 들어갈 경우",
  args: {
    title: "modal title blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah",
  },
};

export const CustomWidth: Story = {
  name: "width값을 지정한 경우. position이 bottom일 경우 적용되지 않는다.",
  args: {
    width: 555,
  },
};

export const Theme: Story = {
  name: "다크모드일 경우",
  args: {
    hasConfirmButton: true,
    closeButtonPosition: "bottom",
    theme: "dark",
  },
};

export const ButtonAlignRow: Story = {
  name: "버튼 정렬 row",
  args: {
    buttonAlign: "row",
  },
};

export const ButtonAlignRowAndConfirm: Story = {
  name: "버튼 정렬 row, 확인 버튼을 가짐",
  args: {
    buttonAlign: "row",
    hasConfirmButton: true,
  },
};

export const HasAllButton: Story = {
  name: "버튼 정렬 row, 확인, 취소 버튼을 가짐",
  args: {
    buttonAlign: "row",
    hasConfirmButton: true,
    closeButtonPosition: "bottom",
  },
};

export const HasAllButtonAndSmallWidth: Story = {
  name: "버튼 정렬 row, 확인 버튼을 가짐. 작은 사이즈",
  args: {
    buttonAlign: "row",
    hasConfirmButton: true,
    closeButtonPosition: "bottom",
    width: ModalWidth.Small,
  },
};

export const HasAllButtonAndMediumWidth: Story = {
  name: "버튼 정렬 row, 확인 버튼을 가짐. 중간 사이즈",
  args: {
    buttonAlign: "row",
    hasConfirmButton: true,
    closeButtonPosition: "bottom",
    width: ModalWidth.Medium,
  },
};

export const HasAllButtonAndLargeWidth: Story = {
  name: "버튼 정렬 row, 확인 버튼을 가짐. 큰 사이즈",
  args: {
    buttonAlign: "row",
    hasConfirmButton: true,
    closeButtonPosition: "bottom",
    width: ModalWidth.Large,
  },
};
