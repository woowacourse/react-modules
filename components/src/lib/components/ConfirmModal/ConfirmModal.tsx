import { useModalHandler } from "../../hook";
import ModalButton from "../Modal/ModalButton";
import ModalContent from "../Modal/ModalContent";
import ModalFooter from "../Modal/ModalFooter";
import ModalHeader from "../Modal/ModalHeader";
import ModalMain from "../Modal/ModalMain";
interface ConfirmModalProp {
  title: string;
  content: string;
}
const ConfirmModal = ({ title, content }: ConfirmModalProp) => {
  const { modalOpen, openModal, closeModal } = useModalHandler();
  return (
    <>
      <button onClick={openModal}>confirm Modal open</button>
      {modalOpen && (
        <ModalMain setModalClose={closeModal} modalSize="M" position="center">
          <ModalHeader
            title={title}
            hasXButton={false}
            setModalClose={closeModal}
          ></ModalHeader>
          <ModalContent>{content}</ModalContent>
          <ModalFooter buttonPosition="right">
            <ModalButton
              onClick={closeModal}
              buttonSize="S"
              backgroundColor="white"
              fontColor="black"
              backgroundHoverColor="#E5E5E5"
              content="취소"
            ></ModalButton>
            <ModalButton onClick={closeModal} buttonSize="S"></ModalButton>
          </ModalFooter>
        </ModalMain>
      )}
    </>
  );
};

export default ConfirmModal;
