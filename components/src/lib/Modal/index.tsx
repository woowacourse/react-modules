import { PropsWithChildren } from "react";
import * as S from "./Modal.styled";
import CloseIcon from "@assets/close.svg";
import useModalCloseEvent from "../../hooks/useModalCloseEvent";

export type ModalPositionType = "center" | "bottom";
interface ModalProps {
  title: string;
  onClose: () => void;
  position?: ModalPositionType;
}

function Modal({
  title,
  onClose,
  children,
  position = "bottom",
}: PropsWithChildren<ModalProps>) {
  useModalCloseEvent(() => onClose());

  return (
    <S.Backdrop id="backdrop">
      <S.Modal position={position}>
        <S.ModalHeader>
          <S.Title>{title}</S.Title>
          <S.CloseButton type="button" onClick={onClose}>
            <img src={CloseIcon} alt="닫기 버튼" />
          </S.CloseButton>
        </S.ModalHeader>
        {children}
      </S.Modal>
    </S.Backdrop>
  );
}

export default Modal;
