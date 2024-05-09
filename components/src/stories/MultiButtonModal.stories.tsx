import Modal from "@/lib/Modal/Modal/Modal";
import type { StoryObj } from "@storybook/react";
import styled from "styled-components";

export default {
  title: "Components/Modal",
  component: Modal,
};

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const MultiButtonModal = () => {
  return (
    <Modal isOpen={true} position="center" onClose={() => {}}>
      <Modal.Title> 약관에 동의해 주세요</Modal.Title>
      <Modal.Content>[필수] 개인정보 수집약관 동의</Modal.Content>
      <ButtonWrapper>
        <Modal.StyledButton
          label="동의"
          onClickEvent={() => {}}
          backgroundColor="black"
          size={"small"}
        />
        <Modal.StyledButton
          label="거부"
          onClickEvent={() => {}}
          backgroundColor="white"
          size={"small"}
        />
        <Modal.StyledButton
          label="초기화"
          onClickEvent={() => {}}
          backgroundColor="#ce7272"
          textColor="white"
          size={"small"}
        />
      </ButtonWrapper>
      <Modal.CloseButton label="닫기" onClose={() => {}} />
    </Modal>
  );
};

type Story = StoryObj<typeof Modal>;

export const MultiButtonModalExample: Story = {
  render: () => <MultiButtonModal />,
};
