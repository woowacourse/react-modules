import { useModalHandler } from "../../hook";
import ModalButton from "../Modal/ModalButton";
import ModalContent from "../Modal/ModalContent";
import ModalFooter from "../Modal/ModalFooter";
import ModalHeader from "../Modal/ModalHeader";
import ModalMain from "../Modal/ModalMain";

interface AlertModalProp {
  title: string;
  content: string;
}

const AlertModal = ({ title, content }: AlertModalProp) => {
  const { modalOpen, openModal, closeModal } = useModalHandler();
  return (
    <>
      <button onClick={openModal}>alert Modal open</button>
      {modalOpen && (
        <ModalMain setModalClose={closeModal}>
          <ModalHeader
            title={title}
            setModalClose={closeModal}
            hasXButton={false}
          ></ModalHeader>
          <ModalContent>{content}</ModalContent>
          <ModalFooter buttonPosition="right">
            <ModalButton onClick={closeModal}></ModalButton>
          </ModalFooter>
        </ModalMain>
      )}
    </>
  );
};

export default AlertModal;
