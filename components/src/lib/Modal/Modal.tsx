import { PropsWithChildren } from "react";
import * as S from "./Modal.styled";
import CloseIcon from "@assets/close.svg";

export type ModalPositionType = "center" | "bottom";
interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  position?: ModalPositionType;
}

function Modal({
  isOpen,
  title,
  onClose,
  children,
  position = "bottom",
}: PropsWithChildren<ModalProps>) {
  if (!isOpen) {
    return null;
  }

  return (
    <S.Backdrop>
      <S.Container position={position}>
        <S.ModalHeader>
          <S.Title>{title}</S.Title>
          <S.CloseButton type="button" onClick={onClose}>
            <img src={CloseIcon} alt="닫기 버튼" />
          </S.CloseButton>
        </S.ModalHeader>
        {children}
      </S.Container>
    </S.Backdrop>
  );
}

export default Modal;
