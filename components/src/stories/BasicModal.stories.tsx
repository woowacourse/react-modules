import Modal from "../lib/Modal/Modal";
import DeleteIcon from "../assets/deleteIcon.svg?react";
import type { StoryObj } from "@storybook/react";
import styled from "styled-components";

export default {
  title: "Modal",
  component: Modal,
};

const ButtonBox = styled.div`
  display: flex;
  align-items: end;
  width: 100%;
`;

const SmallModal = () => {
  return (
    <Modal isOpen={true} position="center" onClose={() => {}} size="small">
      <Modal.Title> 약관에 동의해 주세요</Modal.Title>
      <Modal.CloseIcon onClick={() => {}}>
        <DeleteIcon />
      </Modal.CloseIcon>
      <Modal.Content>[필수] 개인정보 수집약관 동의</Modal.Content>
      <ButtonBox>
        <Modal.StyledButton
          label="동의하고 저장하기"
          onClickEvent={() => {}}
          backgroundColor="black"
          size="full"
        />
      </ButtonBox>
    </Modal>
  );
};

const MediumModal = () => {
  return (
    <Modal isOpen={true} position="center" onClose={() => {}} size="medium">
      <Modal.Title> 약관에 동의해 주세요</Modal.Title>
      <Modal.CloseIcon onClick={() => {}}>
        <DeleteIcon />
      </Modal.CloseIcon>
      <Modal.Content>[필수] 개인정보 수집약관 동의</Modal.Content>
      <Modal.StyledButton
        label="동의"
        onClickEvent={() => {}}
        backgroundColor="black"
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
        backgroundColor="black"
      />
      <Modal.CloseButton label="닫기" onClose={() => {}} />
    </Modal>
  );
};

type Story = StoryObj<typeof Modal>;

export const Small: Story = {
  render: () => <SmallModal />,
};

export const Medium: Story = {
  render: () => <MediumModal />,
};

export const Large: Story = {
  render: () => <LargeModal />,
};
