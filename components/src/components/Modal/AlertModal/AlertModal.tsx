import { PropsWithChildren } from "react";
import Modal from "../Modal";
import { useModalAction } from "..";
import { ModalWidth } from "../constant";

export interface Props {
  title: string;
  width?: number;
  theme?: ThemeType;
  confirmMessage?: string;
  onConfirm?: () => void;
}

const AlertModal = ({ title, width, children, theme, confirmMessage, onConfirm }: PropsWithChildren<Props>) => {
  const action = useModalAction();

  return (
    <Modal
      title={title}
      width={width}
      theme={theme}
      hasConfirmButton
      buttonAlign="row"
      confirmMessage={confirmMessage || "확인"}
      onConfirm={() => {
        if (onConfirm) onConfirm();
        action.handleClose();
      }}
    >
      {children}
    </Modal>
  );
};

const SmallAlertModal = ({ ...props }: PropsWithChildren<Props>) => {
  return <AlertModal {...props} width={ModalWidth.Small}></AlertModal>;
};
const MediumAlertModal = ({ ...props }: PropsWithChildren<Props>) => {
  return <AlertModal {...props} width={ModalWidth.Medium}></AlertModal>;
};
const LargeAlertModal = ({ ...props }: PropsWithChildren<Props>) => {
  return <AlertModal {...props} width={ModalWidth.Large}></AlertModal>;
};

AlertModal.Small = SmallAlertModal;
AlertModal.Medium = MediumAlertModal;
AlertModal.Large = LargeAlertModal;

export default AlertModal;
