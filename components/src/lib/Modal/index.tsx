import { PropsWithChildren } from "react";
import * as S from "./Modal.styled";
import CloseIcon from "@assets/close.svg";
import useOutsideClick from "../../hooks/useOutsideClick";
import useKeyDown from "@/hooks/useKeyDown";

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
  const modalRef = useOutsideClick<HTMLDivElement>(() => onClose());
  useKeyDown({ keys: ["Escape"], callback: () => onClose() });

  return (
    <S.Backdrop>
      <S.Modal position={position} ref={modalRef}>
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
