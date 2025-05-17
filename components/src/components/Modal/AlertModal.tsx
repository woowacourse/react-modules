import Modal from "./Modal";
import styled from "@emotion/styled";
import Button from "../common/Button/Button";
import { PropsWithChildren } from "react";

interface ModalInterface {
  title?: string;
  onClose: () => void;
  isOpen: boolean;
  size: "small" | "medium" | "large";
}

const AlertModal = ({
  isOpen,
  onClose,
  title,
  children,
  size,
}: PropsWithChildren<ModalInterface>) => {
  return (
    <Modal isOpen={isOpen} size={size} onClose={onClose} title={title}>
      {children}
      <ModalBottom>
        <Button variant="confirm" size={size} onClick={onClose} />
      </ModalBottom>
    </Modal>
  );
};

export default AlertModal;

const ModalBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  align-itmes: center;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;
