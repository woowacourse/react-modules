import { Meta, StoryFn } from "@storybook/react";
import { Modal, useModalHandler } from "../lib";

const meta: Meta<typeof Modal> = {
  title: "AlertModal",
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
            title="아이디를 입력해 주세요."
            setModalClose={closeModal}
          />
          <Modal.Content>아이디는 필수로 입력해야 합니다.</Modal.Content>
          <Modal.Footer>
            <Modal.Button onClick={closeModal} buttonSize="S" />
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};
