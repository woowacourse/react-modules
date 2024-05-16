import { useModalHandler } from "../../hook";
import ModalButton from "../Modal/ModalButton";
import ModalContent from "../Modal/ModalContent";
import ModalFooter from "../Modal/ModalFooter";
import ModalHeader from "../Modal/ModalHeader";
import ModalMain from "../Modal/ModalMain";

interface PromptModalProp {
  title: string;
  children: JSX.Element;
  inputHandler: () => void;
}
const PromptModal = ({ title, children, inputHandler }: PromptModalProp) => {
  const { modalOpen, openModal, closeModal } = useModalHandler();

  const confirmHandler = () => {
    closeModal();
    inputHandler();
  };

  return (
    <>
      <button onClick={openModal}>prompt Modal open</button>
      {modalOpen && (
        <ModalMain setModalClose={closeModal} modalSize="M">
          <ModalHeader title={title} setModalClose={closeModal}></ModalHeader>
          <ModalContent>{children}</ModalContent>
          <ModalFooter buttonPosition="right">
            <ModalButton
              onClick={closeModal}
              buttonSize="S"
              backgroundColor="white"
              fontColor="black"
              backgroundHoverColor="#E5E5E5"
              content="취소"
            ></ModalButton>
            <ModalButton
              onClick={() => confirmHandler()}
              buttonSize="S"
            ></ModalButton>
          </ModalFooter>
        </ModalMain>
      )}
    </>
  );
};

export default PromptModal;
