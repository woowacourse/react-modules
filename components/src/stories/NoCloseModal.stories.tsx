import Modal from "@/lib/Modal/Modal/Modal";
import { StoryObj } from "@storybook/react";
import styled from "styled-components";

export default {
  title: "Components/Modal",
  component: Modal,
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const NoCloseButtonModal = () => {
  return (
    <Modal isOpen={true} position="center" onClose={() => {}} size="large">
      <Modal.Title> 약관에 동의해 주세요</Modal.Title>
      <Modal.Content>[필수] 개인정보 수집약관 동의</Modal.Content>
      <ButtonWrapper>
        <Modal.StyledButton
          label="동의"
          onClickEvent={() => {}}
          backgroundColor="black"
          size={"small"}
        />
        <Modal.CloseButton label="닫기" onClose={() => {}} size={"small"} />
      </ButtonWrapper>
    </Modal>
  );
};

type Story = StoryObj<typeof Modal>;

export const NoCloseButtonModalExample: Story = {
  render: () => <NoCloseButtonModal />,
};
