import ModalLayout from "./common/ModalLayout";
import { ModalProps } from "../../types/modalTypes";

const BasicModal = ({
  modalPosition,
  modalSize,
  titleText,
  children,
  closeType,
  onClose,
  isCloseFocus = false,
}: ModalProps) => {
  return (
    <ModalLayout
      modalPosition={modalPosition}
      modalSize={modalSize}
      titleText={titleText}
      closeType={closeType}
      onClose={onClose}
      isCloseFocus={isCloseFocus}
    >
      {children}
    </ModalLayout>
  );
};

export default BasicModal;
