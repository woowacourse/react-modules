import { PropsWithChildren } from "react";
import Modal from "../Modal";
import { useModalAction } from "..";
import { ModalWidth } from "../constant";

export interface Props {
  title: string;
  width?: number;
  theme?: ThemeType;
  confirmMessage?: string;
  cancelMessage?: string;
  onConfirm?: () => void;
}

const ConfirmModal = ({
  title,
  width,
  children,
  confirmMessage,
  cancelMessage,
  theme,
  onConfirm,
}: PropsWithChildren<Props>) => {
  const action = useModalAction();

  return (
    <Modal
      title={title}
      width={width}
      theme={theme}
      hasConfirmButton
      buttonDirection="row"
      confirmMessage={confirmMessage || "확인"}
      cancelMessage={cancelMessage || "취소"}
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
