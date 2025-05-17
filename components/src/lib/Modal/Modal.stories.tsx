import type { Meta, StoryObj } from "@storybook/react";
import Modal, { ModalProps } from "./index";

const meta = {
  title: "Component/Modal",
  component: Modal,
  tags: ["autodocs"],
  args: {
    onClose: () => {},
    position: "center",
    modalType: "alert",
    modalSize: "medium",
  },
  subcomponents: {
    Header: Modal.Header,
    Title: Modal.Title,
    CloseButton: Modal.CloseButton,
    Content: Modal.Content,
    Input: Modal.Input,
    Footer: Modal.Footer,
    Button: Modal.Button,
  },
} satisfies Meta<ModalProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Alert: Story = {
  args: {
    isOpen: true,
    modalType: "alert",
    onClose: () => {},
    children: (
      <>
        <Modal.Header>
          <Modal.Title>알림</Modal.Title>
          <Modal.CloseButton onClick={() => {}} />
        </Modal.Header>
        <Modal.Content>
          <p>알림 메시지입니다.</p>
        </Modal.Content>
        <Modal.Footer>
          <Modal.Button onClick={() => {}}>확인</Modal.Button>
        </Modal.Footer>
      </>
    ),
  },
};

export const Confirm: Story = {
  args: {
    isOpen: true,
    modalType: "confirm",
    onClose: () => {},
    children: (
      <>
        <Modal.Header>
          <Modal.Title>확인</Modal.Title>
          <Modal.CloseButton onClick={() => {}} />
        </Modal.Header>
        <Modal.Content>
          <p>확인 메시지입니다.</p>
        </Modal.Content>
        <Modal.Footer>
          <Modal.Button onClick={() => {}}>취소</Modal.Button>
          <Modal.Button onClick={() => {}} primary>
            확인
          </Modal.Button>
        </Modal.Footer>
      </>
    ),
  },
};

export const Prompt: Story = {
  args: {
    isOpen: true,
    modalType: "prompt",
    onClose: () => {},
    children: (
      <>
        <Modal.Header>
          <Modal.Title>입력</Modal.Title>
          <Modal.CloseButton onClick={() => {}} />
        </Modal.Header>
        <Modal.Content>
          <p>입력해주세요.</p>
          <Modal.Input
            value=""
            onChange={() => {}}
            placeholder="여기에 입력하세요"
          />
        </Modal.Content>
        <Modal.Footer>
          <Modal.Button onClick={() => {}}>취소</Modal.Button>
          <Modal.Button onClick={() => {}} primary>
            확인
          </Modal.Button>
        </Modal.Footer>
      </>
    ),
  },
};

export const BottomPosition: Story = {
  args: {
    isOpen: true,
    position: "bottom",
    onClose: () => {},
    children: (
      <>
        <Modal.Header>
          <Modal.Title>하단 모달</Modal.Title>
          <Modal.CloseButton onClick={() => {}} />
        </Modal.Header>
        <Modal.Content>
          <p>하단에서 올라오는 모달입니다.</p>
        </Modal.Content>
        <Modal.Footer>
          <Modal.Button onClick={() => {}}>확인</Modal.Button>
        </Modal.Footer>
      </>
    ),
  },
};
