import ModalLayout from "./common/ModalLayout";
import { ModalProps } from "../../types/modalTypes";

const BasicModal = ({
  modalPosition,
  modalSize,
  titleText,
  children,
  closeType,
  onClose,
}: ModalProps) => {
  return (
    <ModalLayout
      modalPosition={modalPosition}
      modalSize={modalSize}
      titleText={titleText}
      closeType={closeType}
      onClose={onClose}
    >
      {children}
    </ModalLayout>
  );
};

export default BasicModal;
