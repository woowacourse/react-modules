import { Meta, StoryFn } from "@storybook/react";
import { Modal, useModalHandler } from "../lib";

// 스토리 메타 정보 설정
const meta: Meta<typeof Modal> = {
  title: "ConfirmModal",
  component: Modal,

  tags: ["autodocs"],
} as Meta;

export default meta;

export const Template: StoryFn<typeof meta> = () => {
  const { modalOpen, openModal, closeModal } = useModalHandler();

  return (
    <>
      <button onClick={openModal}>모달 열기</button>
      {modalOpen && (
        <Modal setModalClose={openModal}>
          <Modal.Header
            title="카드를 삭제하시겠습니까?"
            setModalClose={closeModal}
          />
          <Modal.Content>삭제하면 복구하실 수 없습니다.</Modal.Content>
          <Modal.Footer>
            <Modal.Button
              onClick={closeModal}
              buttonSize="S"
              backgroundColor="white"
              fontColor="black"
              backgroundHoverColor="#E5E5E5"
              content="취소"
            />
            <Modal.Button onClick={closeModal} buttonSize="S" />
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};
