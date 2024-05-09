import Modal from "@/lib/Modal/Modal/Modal";
import DeleteIcon from "../assets/deleteIcon.svg?react";
import type { StoryObj } from "@storybook/react";

export default {
  title: "Components/Modal",
  component: Modal,
};

const DefaultModal = () => {
  return (
    <Modal isOpen={true} position="bottom" onClose={() => {}}>
      <Modal.Title> 약관에 동의해 주세요</Modal.Title>
      <Modal.CloseIcon onClick={() => {}}>
        <DeleteIcon />
      </Modal.CloseIcon>
      <Modal.Content>[필수] 개인정보 수집약관 동의</Modal.Content>
      <Modal.StyledButton
        label="동의"
        size="small"
        onClickEvent={() => {}}
        backgroundColor="black"
      />
      <Modal.CloseButton label="닫기" size="small" onClose={() => {}} />
    </Modal>
  );
};

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => <DefaultModal />,
};
