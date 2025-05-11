import ModalHeader from "./ModalHeader";
import { ModalBoxContainer, ModalBottomCloseBtn } from "./ModalStyle";
import { ModalProps } from "../../../types/modalTypes";

const ModalBox = ({
  modalPosition,
  titleText = "",
  children,
  closeType,
  onClose,
  isCloseFocus = false,
}: ModalProps) => {
  const hasHeaderCloseButton = closeType === "top" ? true : false;
  const hasBottomCloseButton = closeType === "bottom" ? true : false;
  return (
    <ModalBoxContainer modalPosition={modalPosition}>
      <ModalHeader
        titleText={titleText}
        hasCloseButton={hasHeaderCloseButton}
        onClose={onClose}
        isCloseFocus={isCloseFocus}
      />
      {children}
      {hasBottomCloseButton && (
        <ModalBottomCloseBtn
          onClick={onClose}
          {...(isCloseFocus ? { autoFocus: true } : {})}
        >
          닫기
        </ModalBottomCloseBtn>
      )}
    </ModalBoxContainer>
  );
};

export default ModalBox;
