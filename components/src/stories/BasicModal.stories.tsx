import Modal from "../lib/Modal/Modal";
import DeleteIcon from "../assets/deleteIcon.svg?react";
import type { StoryObj } from "@storybook/react";

export default {
  title: "Components/Modal",
  component: Modal,
};

const DefaultModal = () => {
  return (
    <Modal isOpen={true} position="center" onClose={() => {}}>
      <Modal.Title> 약관에 동의해 주세요</Modal.Title>
      <Modal.CloseIcon onClick={() => {}}>
        <DeleteIcon />
      </Modal.CloseIcon>
      <Modal.Content>[필수] 개인정보 수집약관 동의</Modal.Content>
      <Modal.StyledButton
        label="동의"
        onClickEvent={() => {}}
        backgroundColor="white"
      />
      <Modal.CloseButton label="닫기" onClose={() => {}} />
    </Modal>
  );
};

const FullModal = () => {
  return (
    <Modal isOpen={true} position="center" onClose={() => {}} size="full">
      <Modal.Title> 약관에 동의해 주세요</Modal.Title>
      <Modal.CloseIcon onClick={() => {}}>
        <DeleteIcon />
      </Modal.CloseIcon>
      <Modal.Content>[필수] 개인정보 수집약관 동의</Modal.Content>
      <Modal.StyledButton
        label="동의"
        onClickEvent={() => {}}
        backgroundColor="white"
      />
      <Modal.CloseButton label="닫기" onClose={() => {}} />
    </Modal>
  );
};

const SmallModal = () => {
  return (
    <Modal isOpen={true} position="center" onClose={() => {}} size="small">
      <Modal.Title> 약관에 동의해 주세요</Modal.Title>
      <Modal.CloseIcon onClick={() => {}}>
        <DeleteIcon />
      </Modal.CloseIcon>
      <Modal.Content>[필수] 개인정보 수집약관 동의</Modal.Content>
      <Modal.StyledButton
        label="동의"
        onClickEvent={() => {}}
        backgroundColor="white"
      />
      <Modal.CloseButton label="닫기" onClose={() => {}} />
    </Modal>
  );
};

const LargeModal = () => {
  return (
    <Modal isOpen={true} position="center" onClose={() => {}} size="large">
      <Modal.Title> 약관에 동의해 주세요</Modal.Title>
      <Modal.CloseIcon onClick={() => {}}>
        <DeleteIcon />
      </Modal.CloseIcon>
      <Modal.Content>[필수] 개인정보 수집약관 동의</Modal.Content>
      <Modal.StyledButton
        label="동의"
        onClickEvent={() => {}}
        backgroundColor="white"
      />
      <Modal.CloseButton label="닫기" onClose={() => {}} />
    </Modal>
  );
};

type Story = StoryObj<typeof Modal>;

export const Small: Story = {
  render: () => <SmallModal />,
};

export const Large: Story = {
  render: () => <LargeModal />,
};

export const Full: Story = {
  render: () => <FullModal />,
};

export const Default: Story = {
  render: () => <DefaultModal />,
};
