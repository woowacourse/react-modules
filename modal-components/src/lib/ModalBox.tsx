import ModalHeader from "./ModalHeader";
import { ModalBoxContainer, ModalBottomCloseBtn } from "./styles/ModalStyle";
import { ModalProps } from "./types/modalTypes";

const ModalBox = ({
  modalPosition,
  titleText = "",
  children,
  closeType,
  onClose,
}: ModalProps) => {
  const hasHeaderCloseButton = closeType === "top" ? true : false;
  return (
    <ModalBoxContainer modalPosition={modalPosition}>
      <ModalHeader
        titleText={titleText}
        hasCloseButton={hasHeaderCloseButton}
        onClose={onClose}
      />
      {children}
      {!hasHeaderCloseButton && (
        <ModalBottomCloseBtn onClick={onClose}>닫기</ModalBottomCloseBtn>
      )}
    </ModalBoxContainer>
  );
};

export default ModalBox;
