import { PropsWithChildren } from "react";
import Modal from "./Modal";

interface Props {
  title: string;
  width?: number;
}

const AlertModal = ({ title, width, children }: PropsWithChildren<Props>) => {
  return (
    <Modal title={title} width={width} hasConfirmButton buttonAlign="row" confirmMessage="확인">
      {children}
    </Modal>
  );
};

enum ModalWidth {
  Small = 320,
  Medium = 480,
  Large = 600,
}

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
