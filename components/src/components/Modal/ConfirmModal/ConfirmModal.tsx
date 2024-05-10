import { PropsWithChildren } from "react";
import Modal from "../Modal";
import { useModalAction } from "..";

export interface Props {
  title: string;
  width?: number;
  theme?: ThemeType;
  onConfirm?: () => void;
}

const ConfirmModal = ({ title, width, children, theme, onConfirm }: PropsWithChildren<Props>) => {
  const action = useModalAction();

  return (
    <Modal
      title={title}
      width={width}
      theme={theme}
      hasConfirmButton
      buttonAlign="row"
      confirmMessage="확인"
      cancelMessage="취소"
      onConfirm={() => {
        if (onConfirm) onConfirm();
        action.handleClose();
      }}
      closeButtonPosition="bottom"
    >
      {children}
    </Modal>
  );
};

enum ModalWidth {
  Small = 320,
  Medium = 480,
  Large = 600,
}

const SmallConfirmModal = ({ ...props }: PropsWithChildren<Props>) => {
  return <ConfirmModal {...props} width={ModalWidth.Small}></ConfirmModal>;
};
const MediumConfirmModal = ({ ...props }: PropsWithChildren<Props>) => {
  return <ConfirmModal {...props} width={ModalWidth.Medium}></ConfirmModal>;
};
const LargeConfirmModal = ({ ...props }: PropsWithChildren<Props>) => {
  return <ConfirmModal {...props} width={ModalWidth.Large}></ConfirmModal>;
};

ConfirmModal.Small = SmallConfirmModal;
ConfirmModal.Medium = MediumConfirmModal;
ConfirmModal.Large = LargeConfirmModal;

export default ConfirmModal;
